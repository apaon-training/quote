
import './App.css';
import {useEffect, useState} from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

function App() {
  //Define variable to store our itemsdata
  const [quoteItems, setQuoteItems] =useState(null);
  const headers ={ 'Authorization':'Bearer pat302oUGS1B2NPNR.4a95c5e60a8ac93b46d6c9c619d2e35feb2766c5a0cbb45ef562c164b4d64cc5'}
  useEffect(() => {
    fetch('https://api.airtable.com/v0/appSaehfbC49RLcln/tblJk59wskJYawprk',{headers})
    .then(response => response.json())
    .then(data =>{
      setQuoteItems(data);
    });
  },[]);

  //configure headers with postman token - pat302oUGS1B2NPNR.4a95c5e60a8ac93b46d6c9c619d2e35feb2766c5a0cbb45ef562c164b4d64cc5
  
  //'useEffect' used here for running fetch only once
  // URL for get - https://api.airtable.com/v0/appSaehfbC49RLcln/tblJk59wskJYawprk

 

  return (
    <div className="App">
      <p>API Integration</p>
      {/* Converting 'quoteItems' variable data into string for displaying purpose */}
      {/* <span>{JSON.stringify(quoteItems)}</span> */}
      <div className="card">
      <DataTable value={quoteItems?.records} tableStyle={{ minWidth: '50rem' }}>
                <Column field="fields.Item ID" header="ID"></Column>
                <Column field="fields.Quantity" header="Quantity"></Column>
                <Column field="fields.Price" header="Price"></Column>
            </DataTable>
     {/* Use primeng DataTable for showing data */}
      </div>
    </div>
  );
}

export default App;
