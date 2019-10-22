import React, { useState } from 'react';
import shortid from 'shortid'

import Form from './components/Form'
import ClocksView from './components/ClocksView'


import Clocks from './models/Clocks'

function App() {

  const [clocksList,setClocksList] = useState([new Clocks(shortid.generate(),'test',3)])

  const addClocks = (name,UTC) => {
    setClocksList(prevClocks => [...prevClocks,new Clocks(shortid.generate(),name,parseInt(UTC))])
  }

  const removeClocks = id => {
    setClocksList(prevClocks => prevClocks.filter(o => o.id !== id))
  }

  return (
    <>
      <Form add={addClocks}/>
      <div className="list">
        {clocksList.map(clocks => <ClocksView {...clocks} key={clocks.id} remove={removeClocks}/>)}
      </div>
    </>
  );
}

export default App;
