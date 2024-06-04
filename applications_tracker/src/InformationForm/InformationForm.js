import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

function InformationForm() {
  // Options Array
  const optionsArray = [
    "React",
    "Typescript",
    "JavaScript",
    "C#",
    "C++",
    "SQL",
    "NoSQL",
    "Python",
    "Ruby",
    "Next.js",
    "Node.js",
    "Express",
  ];

  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [techStack, setTechStack] = useState("");
  const [applied, setApplied] = useState(false);

  function handleCompanyInputValue(e) {
    e.preventDefault();

    setCompany(e.target.value);
    console.log(company);
  }

  function handleLocationInputValue(e) {
    e.preventDefault();

    setLocation(e.target.value);
    console.log(location);
  }

  function handleTechStacks(e) {
    e.preventDefault();

    setTechStack(e.target.value);
    console.log(techStack);
  }

  function handleHaveYouApplied(e) {
    e.preventDefault();

    setApplied(e.target.value);
  }

  return (
    <div className="App">
      <header>
        <h1>Application Tracker</h1>
      </header>
      <div className="submitForm">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="companyName">Company Name</Form.Label>
            <Form.Control
              id="companyName"
              type="text"
              placeholder="Enter company"
              value={company}
              onChange={handleCompanyInputValue}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="location">Location</Form.Label>
            <Form.Control
              id="location"
              type="text"
              placeholder="Enter Location"
              value={location}
              onChange={handleLocationInputValue}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="techStack">Tech Stacks</Form.Label>
            <Form.Select
              id="techStack"
              value={techStack}
              onChange={handleTechStacks}
            >
              <option></option>
              {optionsArray.map((tech, index) => (
                <option key={index} value={tech}>
                  {tech}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          {/* <Form.Group className="mb-3">
            <Form.Label htmlFor="appliedYesNo">Applied?</Form.Label>
            <Form.Check
              id="appliedYesNo"
              type="checkbox"
              value={applied}
              onChange={handleHaveYouApplied}
            />
          </Form.Group> */}
          <Button variant="primary" type="submit">
            Add to table
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default InformationForm;
