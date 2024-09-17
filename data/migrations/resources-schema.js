

exports.up = function(knex, Promise) {
    return knex.schema.createTable('resources', tbl => {
        tbl.increments('id');
        tbl.string('name').unique().notNullable();
        tbl.string('description');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('resources');
};