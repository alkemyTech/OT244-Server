const { response } = require( "express" );
const { Activities } = require("../models");

const getActivities = async ( req, res ) => {};

const addActivity = async ( req, res = response ) => {
    const { name, content, image } = req.body;
    try{        
        const activitie = await Activities.create({
            name: name,
            content: content,
            image: image
        })
        if( !activitie ){
            return res.status(400).json({
                msg: 'Ups! Please Check the fields'
            })
        }
        return res.status(201).json({
            msg: 'Activity created successfully',
            activitie
        })
    }catch( error ){
        console.log( error );
        return res.status(500).json({
            msg: 'Please contact to support'
        })
    }
};
const updateActivity = async( req, res ) => {};
const deleteActivity = async ( req, res ) => {};

module.exports = {
    getActivities,
    addActivity,
    updateActivity,
    deleteActivity,
}