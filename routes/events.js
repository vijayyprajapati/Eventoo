const express = require('express')

const{
    createEvent,
    getEvent,
    getEvents,
    deleteEvent,
    updateEvent,
    
}=require("../controllers/eventsController")

const router =express.Router()

//GET all events
router.get('/', getEvents)

//GET a single event
router.get('/:id',getEvent)

//POST a new workout
router.post('/',createEvent)

router.delete('/:id', deleteEvent)

router.patch('/:id', updateEvent)

module.exports=router

