const express = require("express"); 
const router = express.Router();
const db = require('../db/db.js'); 

router.get("/countries", async(request, response) => {
  try {
    const countries = await db("country"); 
    response.json(countries);
  } catch(error) {
    console.error(error);
    response.status(500).send("Internal Server Error!");
  }
})

router.post("/countries", async (request, response) => {
  try {
    const { name, population, flag } = request.body; 

    const result = await db("country").insert({
      name, 
      population,
      flag
    })

    if(result.length > 0) {
      response.status(201).json({ message: "Country added successfully" })
    } else {
      response.status(500).json({ message: "Failed to add country" })
    }

  } catch(error) {
    console.error(error)
    response.status(500).json({message: "Internal Server Error!"})
  }
})

module.exports = router;