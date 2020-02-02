import React, {Suspense} from 'react';

import ListBreweries from './Components/ListBreweries';

function App() {
  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <ListBreweries />
    </Suspense>
  );
}

export default App;
