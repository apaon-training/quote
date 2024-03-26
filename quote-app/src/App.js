import './App.css';
import {useEffect, useState} from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

function App() {
  const [quoteItems, setQuoteItems] = useState(null);
  const headers = { 'Authorization': 'Bearer pat302oUGS1B2NPNR.4a95c5e60a8ac93b46d6c9c619d2e35feb2766c5a0cbb45ef562c164b4d64cc5'}
  useEffect(() => {
      //we use 'fetch' command to send http request
      fetch('https://api.airtable.com/v0/appSaehfbC49RLcln/tblJk59wskJYawprk', {headers})
      .then( response => response.json())
      .then(data => {
        setQuoteItems(data);
      });

  }, []);
 

  return (
    <div className="App">
      <p>API Integration</p>
      {/* Converting 'quoteItems' variable data into string for displaying purpose */}
      {/* <span>{JSON.stringify(quoteItems)}</span> */}
      <div className="card">
            <DataTable value={quoteItems?.records} tableStyle={{ minWidth: '50rem' }}>
              {/* Fix the item id binding */}
                <Column field="fields.Item ID" header="Id"></Column>
                <Column field="fields.Quantity" header="Quantity"></Column>
                <Column field="fields.Price" header="Price"></Column>
            </DataTable>
      </div>
    </div>
  );
}

export default App;