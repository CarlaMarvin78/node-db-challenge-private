const db = require('./data/projectsDB')
db.getTasks ()
    .then (tasks => console.log(tasks));
db.getProjects()
    .then (projects => console.log(projects));