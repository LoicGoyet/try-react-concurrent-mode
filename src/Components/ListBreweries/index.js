import React from 'react';

import {fetchBreweries} from '../../Services/api';

const resource = fetchBreweries();

const ListBreweries = () => {
  const breweries = resource.read();

  return (
    <React.Fragment>
      <h1>List Breweries</h1>
      <ul>
        {breweries.map(brewery => <li key={brewery.id}>{brewery.name}</li>)}
      </ul>
    </React.Fragment>
  );
};

export default ListBreweries;