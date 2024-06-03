import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

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

  return (
    <div className="App">
      <header>
        <h1>Application Tracker</h1>
      </header>
      <div className="submitForm">
        <Form>
          <Form.Group className="mb-3" controlId="companyName">
            <Form.Label htmlFor="companyName">Company Name</Form.Label>
            <Form.Control
              id="companyName"
              type="text"
              placeholder="Enter company"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="location">
            <Form.Label htmlFor="location">Location</Form.Label>
            <Form.Control
              id="location"
              type="text"
              placeholder="Enter Location"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="techStack">
            <Form.Label>Tech Stacks</Form.Label>
            <Form.Select>
              <option></option>
              {optionsArray.map((tech, index) => (
                <option key={index} value={tech}>
                  {tech}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Button variant="primary" type="submit">
            Add to table
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default InformationForm;
