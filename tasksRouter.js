const express = require('express');
const db= require('./data/projectsDB');
const router = express.Router();

router.get('/', (req, res) =>{
    db.getTasks()
    .then (tasks => res.status(200).json(tasks))
    .catch (err => {console.log(err); res.status(500).json({error: "The tasks information could not be loaded."})});
})

router.post('/', (req, res) => {
    if (req.query.description==undefined || req.query.project_id==undefined){
        res.status(400).json({message:"Please a description and a project_id for the task."})
    } else {
        db.addTask(req.query)
        .then(id => res.status(201).json(id))
        .catch (err => {console.log(err); res.status(500).json({error: "The task could not be added."})});
        }
})

module.exports = router