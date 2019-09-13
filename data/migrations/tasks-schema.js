exports.up = function(knex, Promise) {
    return knex.schema.createTable('tasks', tbl => {
        tbl.increments('id');
        tbl.integer('project_id').references('projects.id').notNullable();
        tbl.string('description').notNullable();
        tbl.string('notes');
        tbl.boolean('completed');
        
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('tasks');
};