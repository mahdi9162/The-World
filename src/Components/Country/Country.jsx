import React from 'react';
import { useState } from 'react';

const Country = ({ country, handleVisitedCountries }) => {
  const countryName = country.name.common;
  const capital = country.capital.capital[0];
  const population = country.population.population;
  const region = country.region.region;

  let countryBadge;
  if (population > 100000000) {
    countryBadge = <span className="badge">Mega Country</span>;
  } else if (population > 50000000) {
    countryBadge = <span className="badge">Big Country</span>;
  } else {
    countryBadge = <span className="badge">Small Country</span>;
  }

  const [visited, setVisited] = useState(false);

  const handleBtn = () => {
    setVisited(!visited);
    // setVisited(visited ? false : true);

    handleVisitedCountries(country);

    
  };

  return (
    <div
      className={`border border-b-blue-300 text-center p-4 rounded-2xl space-y-1 transition-all ease-in-out 
        duration-[0.3s] ${visited && `visited-card`}`}
    >
      <img className="mx-auto" src={country.flags?.flags.png} alt={country.flags.flags.alt} />
      <h3 className="mt-3">Name : {countryName}</h3>
      <p>Capital : {capital}</p>
      <p>
        Population : {population} <span>{countryBadge}</span>
      </p>
      <p>Region : {region}</p>
      <button onClick={handleBtn} className="mt-2.5">
        {visited ? 'Visited' : 'Not Visited'}
      </button>
    </div>
  );
};

export default Country;
