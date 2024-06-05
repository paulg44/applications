import InformationForm from "./InformationForm/InformationForm";
import TableOfEntries from "./TableOfEntries/TableOfEntries";
import Stats from "./Stats/Stats";

function App() {
  return (
    <div>
      <div>
        <InformationForm />
        <Stats />
      </div>
      <TableOfEntries />
    </div>
  );
}

export default App;
