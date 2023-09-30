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

router.delete("/countries/:id", async(request, response) => {
  const countryId = request.params.id;

  try {
    const existingCountry = await db("country").where({id: countryId}).first();

    if (!existingCountry) {
      return response.status(404).json({message: "Country not found!"})
    }

    await db("country").where({id: countryId}).del();

    response.status(200).json({message: "Country deleted successfully"})

  } catch(error) {
    console.error(error);
    response.status(500).json({message: "Interval Server Error!"})
  }
})

module.exports = router;