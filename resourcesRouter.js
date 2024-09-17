const express = require('express');
const db= require('./data/projectsDB');
const router = express.Router();

router.get('/', (req, res) =>{
    db.getResources()
    .then (resources => res.status(200).json(resources))
    .catch (err => {console.log(err); res.status(500).json({error: "The resources information could not be loaded."})});
})

router.post('/', (req, res) => {
    if (req.query.name==undefined){
        res.status(400).json({message:"Please provide a name for the resource."})
    } else {
        db.addResource(req.query)
        .then(id => res.status(201).json(id))
        .catch (err => {console.log(err); res.status(500).json({error: "The resource could not be added."})});
        }
})

module.exports = router