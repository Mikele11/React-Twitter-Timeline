import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import TwitterTimeline from 'react-twitter-embedded-timeline';

ReactDOM.render(
    //<TwitterTimeline widgetId="695868534455275520" chrome="noborders noheader" height={300} />,
    <App />,
    document.getElementById('root')
  );

