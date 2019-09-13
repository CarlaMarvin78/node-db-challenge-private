const express = require('express');
const server = express();
const projectsRouter = require ('./projectsRouter');
const resourcesRouter = require ('./resourcesRouter');
const tasksRouter = require ('./tasksRouter');


server.use (express.json());
server.use ('/api/projects', projectsRouter);
server.use ('/api/resources', resourcesRouter);
server.use ('/api/tasks', tasksRouter);

module.exports = server
