import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app'

import '../assets/style/owl.carousel.min.css';
import 'owl.carousel';
import "bootstrap";
import '../assets/style/bootstrap.min.css';
import '../assets/style/style.css';
import '../assets/style/fonts.css';
import '../assets/style/sports-page-styles.css';
import '../assets/style/vegas-page-styles.css';
import '../assets/style/bingo-page-styles.css';
import '../assets/style/responsive-styles.css';
import '../assets/style/casino-page-styles.css';
import '../assets/style/live-casino-page-styles.css';
import '../assets/style/poker-page-styles.css';
import '../assets/style/games-page-styles.css';
import '../assets/js/inner_js.js';

const title = 'bet365';

ReactDOM.render(
<App />,
    document.getElementById('app')
);

module.hot.accept();
