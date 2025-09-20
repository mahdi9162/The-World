import React, { use } from 'react';
import Country from '../Country/Country';
import { useState } from 'react';

const Countries = ({ countriesPromise }) => {
  const countriesData = use(countriesPromise);
  const country = countriesData.countries;

  const [visitedCountries, setVisitedCountries] = useState([]);

  const handleVisitedCountries = (country) => {
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  return (
    <>
      <h1 className="w-3/4 mb-3 mx-auto text-center bg-blue-400 border-transparent rounded-3xl p-3.5">
        In The {country.length} Of Countries 💝
      </h1>
      <p className=" mb-3 font-bold text-2xl">Total Visited Country : {visitedCountries.length}</p>
      <ol className="mb-8 list-decimal list-inside text-lg">
        {visitedCountries.map((visitedCountry) => {
          return <li key={visitedCountry.ccn3.ccn3}>{visitedCountry.name.common}</li>;
        })}
      </ol>
      <div className="grid grid-cols-3 gap-10">
        {country.map((country) => {
          return <Country key={country.ccn3.ccn3} country={country} handleVisitedCountries={handleVisitedCountries}></Country>;
        })}
      </div>
    </>
  );
};

export default Countries;
