
import './App.css';
import {useEffect, useState} from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

// 1. Learn 'useState() and useEffect() from react.dev website
// 2. Explore 'DataTable' options from primereact.org website and see how we can get the following functionlaties
    //.  a- Edit the row
    //. b- Delete the row
    //. c- Add the row
    
function App() {
  //Define variable to store our itemsdata
  //const [quoteItems, setQuoteItems] = useState({records: [{fields:{'Item ID': 'testdata', 'Quantity': 92, 'Price': 1111}}]});
  const [quoteItems, setQuoteItems] = useState(null);

  //configure headers with postman token
  const headers = { 'Authorization': 'Bearer pat302oUGS1B2NPNR.4a95c5e60a8ac93b46d6c9c619d2e35feb2766c5a0cbb45ef562c164b4d64cc5'}
  
  //'useEffect' used here for running fetch only onceheaders
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
            <DataTable value={quoteItems?.records} tableStyle={{ minWidth: '20rem'}}>
              {/* Fix the item id binding */}
                <Column field="fields.Item ID" header="Id"></Column>
                <Column field="fields.Quantity" sortable header="Quantity"></Column>
                <Column field="fields.Price" header="Price"></Column>
            </DataTable>
      </div>
    </div>
  );
}

export default App;
