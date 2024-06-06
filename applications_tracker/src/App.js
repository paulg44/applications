import "./App.css";

import InformationForm from "./InformationForm/InformationForm";
import TableOfEntries from "./TableOfEntries/TableOfEntries";
import Stats from "./Stats/Stats";

function App() {
  return (
    <div className="app">
      <div className="displayTable">
        <TableOfEntries />
      </div>
      <div className="formStats">
        <InformationForm />
        <Stats />
      </div>
    </div>
  );
}

export default App;
