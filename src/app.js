import React from 'react';
import ReactDOM from 'react-dom';

import _ from 'lodash';
import dayjs from 'dayjs';

const App = () => {
  const [current, setCurrent] = React.useState(dayjs().format('YYYY-MM-DD HH:mm:ss'));

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrent(dayjs().format('YYYY-MM-DD HH:mm:ss'));
    }, 1000);
    return () => clearInterval(intervalId);
  });

  return (
    <div>
      <h1>Current1 Time: {current}</h1>
      <h2>Using Lodash to capitalize: {_.capitalize("hello world")}</h2>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('container'));