const express = require('express');
const sql = require('mssql');
const UserAuth = require('../middleware/authentication');

const router = express.Router();

//-------------------------------------- GET REQUESTS --------------------------------------------------------------- //

/**
 * Returns a fixed number of states upon application load.
 */
router.get('/initial_states', async(req,res,next)=>{
    try{
        const states = await sql.query(`SELECT * FROM Property`);
        const finalStates = states.recordsets[0];
        if( finalStates.length === 0 ) throw new Error('No apartments in DB.');
        res.send(finalStates);
    }
    catch{ return next(e); }
});

//-------------------------------------- POST REQUESTS --------------------------------------------------------------- //

/**
 * Returns the states according to the search form input.
 */
router.post('/realestate/search', async(req,res,next)=>{
    try{
        // DUMB QUERY , req.body handles has search values.
        const states = await sql.query(`SELECT * FROM Property`);
        res.send(states.recordset);
    }
    catch{ return next(e); }
});

/**
 * Adds a realestate sell to the DB.
 */
router.post('/publish/realestate',UserAuth, async(req,res,next)=>{
    try{
        const state = req.body;
        console.log( false == 1);
        state.Elevator = state.Elevator == 1 ? 1 : 0;
        state.AC = state.AC == 1 ? 1 : 0;
        state.TadiranAC = state.TadiranAC == 1 ? 1 : 0;
        state.Mamad = state.Mamad == 1 ? 1 : 0;  
        state.Bars = state.Bars == 1 ? 1 : 0;
        state.Warehouse = state.Warehouse == 1 ? 1 : 0;
        state.DisabledAccess = state.DisabledAccess == 1 ? 1 : 0;
        state.Renovated = state.Renovated == 1 ? 1 : 0; 
        state.Furnished = state.Furnished == 1 ? 1 : 0; 
        state.Exclusive = state.Exclusive == 1 ? 1 : 0; 
        state.OnPoles = state.OnPoles == 1 ? 1 : 0;
        state.KosherKitchen = state.KosherKitchen == 1 ? 1 : 0;
        state.SunHeatedWaterTank = state.SunHeatedWaterTank == 1 ? 1 : 0;
        state.ImmediateEntance = state.ImmediateEntance == 1 ? 1 : 0;
        console.log(state);
        console.log(req.body);
        console.log('started...');
        const x = await sql.query(`INSERT INTO Property VALUES(${state.PropertyKind},${state.PropertyState},N${state.City},N${state.Street},
            ${state.HouseNumber},${state.RoomNumber},${state.Floor},${state.TotalFloors},${state.Price},${state.Parking},${state.Balcony},
            ${state.Elevator},${state.AC},${state.TadiranAC},${state.Mamad},${state.Bars},${state.Warehouse},${state.DisabledAccess},
            ${state.Renovated},${state.Furnished},${state.Exclusive},${state.OnPoles},${state.KosherKitchen},${state.SunHeatedWaterTank},
            ${state.Size},${(state.EntranceDate).toString()},${state.ImmediateEntance},${state.AboutFurniture},${state.About},${state.Owner} )`);
        console.log('end...');
        res.send({});
    }
    catch(e){ next(e); }
});


module.exports = router;