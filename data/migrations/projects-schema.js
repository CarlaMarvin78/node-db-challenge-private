exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects', tbl => {
        tbl.increments('id');
        tbl.string('name').notNullable();
        tbl.string('description');
        tbl.boolean('completed');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('projects');
};