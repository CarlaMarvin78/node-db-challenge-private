exports.seed = function(knex, Promise) {
    return knex('project_resource')
      .truncate()
      .then(function() {
        return knex('project_resource').insert([
          {project_id:1, resource_id:1}])})
        };

