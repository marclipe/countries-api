/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('country').del()
  await knex("country").insert([
    {
      id: 1,
      name: "Brazil",
      population: "214.3",
      flag: "https://www.countryflags.com/wp-content/uploads/brazil-flag-png-large.png",
    },
    {
      id: 2,
      name: "Canada",
      population: "38.25",
      flag: "https://www.countryflags.com/wp-content/uploads/canada-flag-png-large.png",
    },
  ]);
};
