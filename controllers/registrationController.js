const { events } = require("../models/registrationModel");
const Registration = require("../models/registrationModel");
const mongoose = require('mongoose')

const addRegistration = async(req,res)=> {
    try{
        const user = req.user;
        const{eventId}= req.params;
        const event = await events.findById(eventId)
        if(!event){
            return res.status(404).send({
                success:false,
                error:"No such event found",

            });
        }
        const preRegistration = await Registration.findOne({
user:user._id,
event:eventId,
        });
        if(preRegistration) {
			return res.status(400).send({
				success: false,
				error: "Already registered for this event",
			});
		} 
        const registration = new Registration({
			user: user._id,
			event: eventId,
        }); 
        const savedRegistration = await registration.save();  
        const allRegistrations = event.registrations; 
        event.registrations = [...allRegistrations, savedRegistration._id];
		await event.save();
        const allRegisteredIn = user.registeredIn;
		user.registeredIn = [...allRegisteredIn, event._id];
		await user.save();

		res.status(200).send({
			success: true,
			data: savedRegistration,
		});
	} catch (e) {
		console.log(e);
		return res.status(500).send({
			success: false,
			error: `Server error ${e}`,
		});
	}
};
    
module.exports={
	addRegistration
}
