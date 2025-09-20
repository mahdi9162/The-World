import React, { use } from 'react';

const Countries = ({ countriesPromise }) => {
  const countriesData = use(countriesPromise);
  const country = countriesData.countries;

  return (
    <div>
      <h1>In the Countries {country.length}</h1>
    </div>
  );
};

export default Countries;
