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
  console.log(techCounts);

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

  let totalCountForPercentage = 0;
  for (const key in techCounts) {
    totalCountForPercentage += techCounts[key];
  }
  console.log(totalCountForPercentage);

  function percentageOfTechStack(techValue, total) {
    const percent = (techValue / total) * 100;
    return percent.toFixed(1);
  }

  return (
    <div>
      <h2>Tech Stack Stats</h2>
      <Table>
        <thead>
          <tr>
            <th>Tech Stack</th>
            <th>Count</th>
            <th>Percentage</th>
          </tr>
        </thead>
        <tbody>
          {sortedArr.map(([tech, count]) => (
            <tr key={tech}>
              <td>{tech}</td>
              <td>{count}</td>
              <td>{percentageOfTechStack(count, totalCountForPercentage)}%</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Stats;
