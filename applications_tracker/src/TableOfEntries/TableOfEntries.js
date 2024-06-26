import "./TableOfEntries.css";
import Table from "react-bootstrap/Table";
import data from "../data.json";

function TableOfEntries() {
  return (
    <Table striped bordered hover className="table">
      <thead>
        <tr>
          <th>Company</th>
          <th>Location</th>
          <th>Tech Stack</th>
        </tr>
      </thead>
      <tbody>
        {data.companies
          .map((comp) => (
            <tr key={comp.id}>
              <td>{comp.company}</td>
              <td>{comp.location}</td>
              <td>{comp.techStack}</td>
            </tr>
          ))
          .sort()
          .reverse()}
      </tbody>
    </Table>
  );
}

export default TableOfEntries;
