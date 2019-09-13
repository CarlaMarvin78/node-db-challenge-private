const db = require('./dbConfig');

function getResources(){
    return db('resources');
}

function addResource(resource){
    return db('resources').insert(resource).then(ids => ({ id: ids[0] }));

}

function getProjects(){
    return db('projects');
}

function addProject(project){
    return db('projects').insert(project).then(ids => ({id: ids[0]}));
}

function getTasks(){
    return db('tasks').join('projects', 'projects.id', '=', 'project_id')
    .select ('id', 'projects.name', 'projects.description', 'tasks.description', 'tasks.notes', 'tasks.completed');
}

function addTask(task){
    return db('tasks').insert(task).then(ids => ({id: ids[0]}));
}

module.exports ={getResources, addResource, getProjects, addProject, getTasks, addTask};

