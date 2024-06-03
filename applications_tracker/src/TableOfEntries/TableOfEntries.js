import Table from "react-bootstrap/Table";

function TableOfEntries() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr id="companyName">
          <td>1</td>
          <td>Microsoft</td>
          <td>Amazon</td>
          <td>@Google</td>
        </tr>
        <tr id="location">
          <td>2</td>
          <td>Remote</td>
          <td>Derby</td>
          <td>London</td>
        </tr>
        <tr id="techStack">
          <td>3</td>
          <td>C#</td>
          <td>React</td>
          <td>JavaScript</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TableOfEntries;
