exports.seed = function(knex, Promise) {
    return knex('resources') 
      .truncate()
      .then(function() {
        return knex('resources').insert([
          {name:"Carla_Marvin", description: "Lambda Student"}])})
        };
