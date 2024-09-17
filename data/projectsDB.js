const db = require('./dbConfig');

function getResources(){
    return db('resources');
}

function addResource(resource){
    return db('resources').insert(resource).then(ids => ({ id: ids[0] }));

}

function getProjects(){
    return db('projects')
    .then(projects => projects.map(project => { return {...project, completed: (project.completed==1)}}));
}

function addProject(project){
    return db('projects').insert(project).then(ids => ({id: ids[0]}));
}

function getTasks(){
    return db('tasks').join('projects', 'projects.id', '=', 'project_id')
    .select ({id: 'tasks.id', project_name: 'projects.name', project_description: 'projects.description',
     description: 'tasks.description', notes: 'tasks.notes', completed: 'tasks.completed'})
     .then(tasks => tasks.map(task => { return {...task, completed: (task.completed==1)}}));
}

function addTask(task){
    return db('tasks').insert(task).then(ids => ({id: ids[0]}));
}

module.exports ={getResources, addResource, getProjects, addProject, getTasks, addTask};

