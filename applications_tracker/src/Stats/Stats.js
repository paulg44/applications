/*
## Percentages ## 
Grab Tech Stack data from the json file
And the number of entries in data
Count the number of times each tech is counted (variable for each?)
Compare for percentages and output the data
## Sort by Location ##
Compare tech stacks against locations 
*/

import Table from "react-bootstrap/Table";
import data from "../data.json";

function Stats() {
  const techCounts = {};

  data.companies.forEach((company) => {
    const tech = company.techStack;
    if (techCounts[tech]) {
      techCounts[tech]++;
    } else {
      techCounts[tech] = 1;
    }
  });

  const sortedArr = Object.entries(techCounts).sort((a, b) => b[1] - a[1]);
  console.log(sortedArr);

  return (
    <div>
      <h2>Tech Stack Stats</h2>
      <Table>
        <thead>
          <tr>
            <td>Tech Stack Counter</td>
          </tr>
        </thead>
        <tbody>
          {sortedArr.map(([tech, count]) => (
            <tr key={tech}>
              <td>{tech}</td>
              <td>{count}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Stats;
