import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import fs from "fs";

const app = express();
const PORT = 4040;

app.use(cors());
app.use(bodyParser.json());

app.post("/addNewCompany", (req, res) => {
  const newCompany = req.body;

  // console.log("recieved new company", newCompany);

  fs.readFile("../data.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Internal Server Error" });
    }

    const jsonData = JSON.parse(data);
    const companies = jsonData.companies;

    const newId = companies.length ? companies[companies.length - 1].id + 1 : 1;
    newCompany.id = newId;

    companies.push(newCompany);

    fs.writeFile(
      "../data.json",
      JSON.stringify({ companies: companies }, null, 2),
      "utf8",
      (err) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ message: "Internal Server Error" });
        }
        res
          .status(201)
          .json({ message: "Company added successfully", newCompany });
      }
    );
  });
});
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
