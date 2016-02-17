'use strict';

import React from 'react';
import { isUri } from 'valid-url';
import request from 'request';
import { cheerio } from 'cheerio';

export default class Scraper extends React.Component {

  constructor(props) {
    super(props);
  }
	scrape(event) {
    event.preventDefault();
    let input = this.refs.urlInput;

    if (!isUri(input.value)) {
      return this.props.onFailure({reason: 'Invalid URL'});
    }

    /**
    * Scrape and pass in result to onSuccess prop
    */
    request(input.value, (error, response, html) => {
      if (!error && response.statusCode === 200) {
        const $ = cheerio.load(html);

        console.log($('div').length);
      }
    });

    const data = {};

    return this.props.onSuccess(data);
  }
	render() {
		return (
      <div>
				<input
					className={this.props.inputClass}
					type='text'
					ref='urlInput'
				/>
				<button
					onClick={this.scrape.bind(this)}
					className={this.props.buttonClass}
				>{this.props.buttonText}</button>
			</div>
		);
	}
}
