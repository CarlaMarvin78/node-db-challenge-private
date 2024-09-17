exports.up = function(knex, Promise) {
    return knex.schema.createTable('project_resource', tbl => {
        tbl.integer('project_id').notNullable().references('projects.id');
        tbl.integer('resource_id').notNullable().references('resources.id');
        tbl.primary(['project_id', 'resource_id']);
        
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('project_resource');
};