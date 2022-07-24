const { response } = require( "express" );
const { Activities } = require("../models");

const getActivities = async ( req, res ) => {};
const addActivity = async ( req, res = response ) => {
    const { name, content, image } = req.body;
    try{        
        const activitie = await Activities.create({
            name: name,
            content: content,
            image: image,
            createAt: new Date()
        })
        if( !activitie ){
            return res.status(400).json({
                msg: 'Algo ha ido mal! Verifica los campos de la actividad'
            })
        }
        return res.status(201).json({
            msg: 'Actividad creada con éxito!',
            activitie
        })
    }catch( error ){
        console.log( error );
        return res.status(500).json({
            msg: 'Error en el servidor'
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