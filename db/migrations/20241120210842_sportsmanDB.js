exports.up = function (knex) {
  return Promise.all([
    // Create the "game" table
    knex.schema.createTable("game", (table) => {
      table.increments("id").primary(); // id column with auto-incrementing primary key
      table.string("name").notNullable(); // name column with type string
      table.string("state").notNullable(); // state column with type string
      table.string("notes").notNullable(); // notes column with type string
      table.string("images"); // strings of img URLs
    }),

    // Create the "saltfish" table
    knex.schema.createTable("saltfish", (table) => {
      table.increments("id").primary(); // id column with auto-incrementing primary key
      table.string("name").notNullable(); // name column with type string
      table.string("state").notNullable(); // state column with type string
      table.string("notes").notNullable(); // notes column with type string
      table.string("images"); // strings of img URLs
    }),

    // Create the "freshfish" table
    knex.schema.createTable("freshfish", (table) => {
      table.increments("id").primary(); // id column with auto-incrementing primary key
      table.string("name").notNullable(); // name column with type string
      table.string("state").notNullable(); // state column with type string
      table.string("notes").notNullable(); // notes column with type string
      table.string("images"); // strings of img URLs
    }),

    // Create the "plants" table
    knex.schema.createTable("plants", (table) => {
      table.increments("id").primary(); // id column with auto-incrementing primary key
      table.string("name").notNullable(); // name column with type string
      table.string("state").notNullable(); // state column with type string
      table.string("notes").notNullable(); // notes column with type string
      table.string("images"); // strings of img URLs
    }),
  ]);
};

exports.down = function (knex) {
  return Promise.all([
    knex.schema.dropTableIfExists("game"),
    knex.schema.dropTableIfExists("saltfish"),
    knex.schema.dropTableIfExists("freshfish"),
    knex.schema.dropTableIfExists("plants"),
  ]);
};
