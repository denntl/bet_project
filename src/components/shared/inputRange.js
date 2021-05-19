import React from 'react';



class InputRange extends React.Component {
    constructor(props) {
        super(props);
        let line = this.changeMinMax(this.props.minMax, this.props.type)
        this.state = {
            type: this.props.type,
            line: line,
            count: this.props.minMax[this.props.type].max,
            startPoint: this.props.minMax[this.props.type].min,
            currentMarketId: this.props.currentMarketId,
            eventId: this.props.eventId
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.state.startPoint != nextProps.minMax[nextProps.type].min) {
            this.props.changeGoals(this.state.type, nextProps.minMax[nextProps.type].min);
        }
        // if (this.state.count != nextProps.minMax[nextProps.type].max) {
        //     this.props.changeGoals(this.state.type, nextProps.minMax[nextProps.type].max);
        // }
        let line = this.changeMinMax(nextProps.minMax, this.state.type);
        this.setState({
            line: line,
            count: nextProps.minMax[nextProps.type].max,
            startPoint: nextProps.minMax[nextProps.type].min,
            eventId: nextProps.eventId
        })
    }

    changeMinMax(arr, type) {
        let min, max;
        let line = [];
        min = parseInt(arr[type].min);
        max = parseInt(arr[type].max);
        for(let i = min; i <= max; i++) {
          line.push(i);
        }

        return line;
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (((nextProps.minMax[nextProps.type].max != this.state.count) && nextProps.eventId == this.state.eventId)) {
            let rangeSliderKey = 'range-'+this.state.type+this.state.currentMarketId+'-'+this.state.eventId;
            window.rangeSliderMap[rangeSliderKey].changePoints(nextProps.minMax[nextProps.type].max, nextProps.minMax[nextProps.type].min);
            return true;
        } else {
            return false;
        }
    }

    componentDidMount() {

        //this.props.changeGoals(this.state.type, this.state.startPoint); not need yet

        if (typeof window.rangeSliderMap === 'undefined') {
            window.rangeSliderMap = {};
        }
        let rangeSliderKey = 'range-'+this.state.type+this.state.currentMarketId+'-'+this.state.eventId;

        window.rangeSliderMap[rangeSliderKey] = new this.RangeSlider('RangeSlider', this.state.type, this.state.count, this.state.currentMarketId, this.state.startPoint);
        window.rangeSliderMap[rangeSliderKey].onChangeValue = function(sliderInstance) {
            var val = sliderInstance.value;
            if (sliderInstance.startPoint !== 0) {
                val = Number(sliderInstance.value) + sliderInstance.startPoint;
            }

            if (this.state.type == 1) {
                this.setState({
                    homeTeamGoals: val
                })
                this.props.changeGoals(1, val)
            }
            if (this.state.type == 2 ) {
                this.setState({
                    awayTeamGoals: val
                })
                this.props.changeGoals(2, val)
            }

        }.bind(this)


    }
    componentWillUnmount() {
        let rangeSliderKey = 'range-'+this.state.type+this.state.currentMarketId+'-'+this.state.eventId;
        delete window.rangeSliderMap[rangeSliderKey];
    }

    RangeSlider(containerID, type, countMax, marketId, startPoint) {
        var self = this,
            $RangeSlider = $('#'+containerID+ '-' + type + "-" + marketId),
            $SliderThumnb = $RangeSlider.find('.RangeSlider_Thumb'),
            $SliderTrack = $RangeSlider.find('.RangeSlider_Track'),
            $SliderTrackFill = $RangeSlider.find('.RangeSlider_TrackFill'),
            $ClickArea = $RangeSlider.find('.RangeSlider_ClickArea'),
            $SliderPoints = $RangeSlider.find('.RangeSlider_Point');
        this.count = startPoint === 0 ? countMax : Number(countMax) - Number(startPoint);
        this.value = 0;
            this.oldValue = 0;
            this.startPoint = Number(startPoint);
        /* helper to find slider value based on filled track width */
        var findValueFromTrackFill = function(trackFillWidth) {
            var totalWidth = $SliderTrack.width(),
                onePercentWidth = totalWidth / 100,
                value = Math.round((trackFillWidth / onePercentWidth) / 100 * self.count);
            if (self.value !== self.oldValue && typeof self.onChangeValue === 'function') {
                self.oldValue = self.value;
                self.onChangeValue(self);
            }
            return {value: value, percent: (trackFillWidth / onePercentWidth) };
        }

        /* change highlighted number based on new value */
        var updateSelectedValue = function(newValue) {
            $SliderPoints.removeClass('RangeSlider_PointActive');
            $SliderPoints.eq( newValue ).addClass('RangeSlider_PointActive');
        }

        /* highlight track based on new value (and move thumb) */
        var updateHighlightedTrack = function(newPosition) {
           // newPosition = newPosition + '0%';

            newPosition = newPosition * ( $SliderTrack.width() / self.count )
          // let  newPosition =  $SliderTrackFill.width() / $SliderTrack.width() / 100
            $SliderTrackFill.css('width', newPosition);
        }

        /* set up drag funcationality for thumbnail */
        var setupDrag = function($element, initialXPosition) {
            $SliderTrackFill.addClass('RangeSlider_TrackFill-stopAnimation');
            var trackWidth = $SliderTrackFill.width();
            var newValue = findValueFromTrackFill( trackWidth );
            updateSelectedValue(newValue.value);

            $element.on('mousemove', function(e){
                var newPosition = trackWidth + e.clientX - initialXPosition;
                self.imitateNewValue( newPosition );

                newValue = findValueFromTrackFill( $SliderTrackFill.width() );

                updateSelectedValue(newValue.value);
            });
        }
        /* remove drag functionality for thumbnail */
        var finishDrag = function($element) {
            $SliderTrackFill.removeClass('RangeSlider_TrackFill-stopAnimation');
            $element.off('mousemove');
            var newValue = findValueFromTrackFill( $SliderTrackFill.width() );
            self.updateSliderValue( newValue );
        }

        /* method to update all things required when slider value updates */
        this.updateSliderValue = function(newValue) {
            updateSelectedValue( newValue.value );
            updateHighlightedTrack(newValue.value);
            self.value = newValue.value;
           // console.log('this.value = ', self.value);
        }

        /* method to imitate new value without animation */
        this.imitateNewValue = function(XPosition) {
            $SliderTrackFill.addClass('RangeSlider_TrackFill-stopAnimation');
            if ( XPosition > $SliderTrack.width() ) {
                XPosition = $SliderTrack.width();
            }
            //console.log("XPosition", XPosition)
            $SliderTrackFill.css('width', XPosition + 'px');
        }

        this.changePoints = function(countMax, startPoint) {
            self.startPoint = Number(startPoint);
            if (Number(startPoint) !== 0) {
                self.count = Number(countMax) - Number(startPoint);
            } else {
                self.count = countMax;
            }
        }

        /*
         * bind events when instance created
         */
        $ClickArea.on('mousedown', function(e){
            /* if a number or thumbnail has been clicked, use their event instead */
            var $target = $(e.target);
            if ( $target.hasClass('RangeSlider_Thumb') ) {
                return false;
            }
            /* now we can continue based on where the clickable area was clicked */
            self.imitateNewValue( e.offsetX );
            setupDrag( $(this), e.clientX );
        });

        $ClickArea.on('mouseup', function(e){
           // console.log('"$ClickArea" calling "finishDrag"');
            finishDrag( $(this) );
        });

        // update value when markers are clicked
        $SliderPoints.on('mousedown', function(e){
            e.stopPropagation();
            var XPos = $(this).position().left + ($(this).width()/2);
            self.imitateNewValue( XPos );
            setupDrag( $ClickArea, e.clientX );
        });

        // when thumbnail is clicked down, init the drag stuff
        $SliderThumnb.on('mousedown', function(e){
            e.stopPropagation();
            setupDrag( $(this), e.clientX );
        });

        // when the thumbnail is released, remove the drag stuff
        $SliderThumnb.on('mouseup', function(e){
           // console.log('"$SliderThumnb" calling "finishDrag"');
            finishDrag( $(this) );
        });
    }

    render() {
        return(
            <div className="range_wrapp">
                <div className="CONTAINER">
                <div className="RangeSlider" id={`RangeSlider-${this.state.type}-${this.state.currentMarketId}`}>

                    <div className="RangeSlider_ClickArea">
                        <div className="RangeSlider_Track">
                            <div className="RangeSlider_TrackFill">
                                <div className="RangeSlider_Thumb"></div>
                            </div>
                        </div>
                        <div className="RangeSlider_Points">
                            {
                                this.state.line.map((point, index) => {
                                    //console.log('line', this.state.line)
                                    return <div className={`RangeSlider_Point ${index === 0 ? "RangeSlider_PointActive" : ""}`} key={`${index}-${this.state.type}`}>{point}</div>
                                })
                            }

                        </div>
                    </div>
                </div>
                </div>

            </div>



        )

    }
}

export default InputRange;