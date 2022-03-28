
import {  useState } from 'react';
import { datatable } from './components/api';
import './App.css';
import Table from './components/Table';

const App = () => {
  const [dataTable, setDataTable] = useState(datatable);
  console.log(dataTable);


  const column = [
    { heading: ' Id', value:'id' },
    { heading: ' Name', value:'name' },
    { heading: 'Email',value:'email' },
    { heading: 'Phone', value:'phone' },
    { heading: 'City', value:'city' },
  ]
  return (
    <div className="App">
      <h1>Dynamic Table </h1>
      <Table data={dataTable}  column={column}/>
    </div>
  );
};

export default App;
