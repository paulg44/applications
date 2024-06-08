import "./App.css";

import InformationForm from "./InformationForm/InformationForm";
import TableOfEntries from "./TableOfEntries/TableOfEntries";
import Stats from "./Stats/Stats";
import data from "./data.json";

function App() {
  let total = data.companies.length;

  return (
    <div className="app">
      <div className="formStats">
        <InformationForm />
        <Stats />
      </div>
      <div className="displayTable">
        <h5>Total Companies: {total}</h5>
        <TableOfEntries />
      </div>
    </div>
  );
}

export default App;
