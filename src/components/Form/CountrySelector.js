import React, { Component } from 'react';
import { CountryDropdown } from 'react-country-region-selector';


class CountrySelector extends Component {
  constructor (props) {
    super(props);
    this.state = { country: '' };
  }

  selectCountry (val) {
    this.setState({ country: val });
  }

  render () {
    const { country } = this.state;
    return (
      <div className="countrySelectorWrap">
        <CountryDropdown className="countryselector"
          value={country}
          onChange={(val) => this.selectCountry(val)} defaultOptionLabel="Country" required/>
      </div>
    );
  }
}

export default CountrySelector;