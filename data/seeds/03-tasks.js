exports.seed = function(knex, Promise) {
    return knex('tasks')
      .truncate()
      .then(function() {
        return knex('tasks').insert([
          {project_id:1, description: "Bubble Task", notes: "Blow Bubbles", completed:false}])})
        };