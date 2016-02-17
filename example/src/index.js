import React from 'react';
import ReactDOM from 'react-dom';
import Scraper from '../../src/Scraper.jsx';

const success = (data) => {
  alert('Worked!');
};

const failure = (err) => {
  alert(`Error: ${err.reason}`);
};

window.onload = () => {
  ReactDOM.render(
    <Scraper
      inputClass='scraper-input'
      buttonText='Click to Scrape'
      buttonClass='scraper-button'
      onSuccess={success}
      onFailure={failure}
      />,
    document.getElementById('root')
  );
};
