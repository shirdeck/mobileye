//=============================================================================
// Country Selector Component
//=============================================================================

import React, { useState } from 'react';
import { CountryDropdown } from 'react-country-region-selector';

const CountrySelector = () => {
  const [country, setCountry] = useState('');

  const selectCountry = (val) => {
    setCountry(val);
  }

  return (
    <div className="countrySelectorWrap">
        <CountryDropdown 
        className="countryselector" 
        value={country} 
        onChange={(val) => selectCountry(val)} 
        defaultOptionLabel="Country" 
        required/>
      </div>
  )
}

export default CountrySelector;