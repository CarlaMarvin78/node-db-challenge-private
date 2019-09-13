const express = require('express');
const db= require('./data/projectsDB');
const router = express.Router();

router.get('/', (req, res) =>{
    db.getProjects()
    .then (projects => res.status(200).json(projects))
    .catch (err => {console.log(err); res.status(500).json({error: "The projects information could not be loaded."})});
})

router.post('/', (req, res) => {
    if (req.query.name==undefined){
        res.status(400).json({message:"Please provide a name for the project."})
    } else {
        db.addProject (req.query)
        .then(id => res.status(201).json(id))
        .catch (err => {console.log(err); res.status(500).json({error: "The project could not be added."})});
        }
})

module.exports = router
