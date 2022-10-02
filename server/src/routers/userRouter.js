const express = require('express');
const sql = require('mssql');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const UserAuth = require('../middleware/authentication');

const router = express.Router();

//-------------------------------------- GET REQUESTS --------------------------------------------------------------- //

/**
 * Returns contact and name info of a state owner.
 */
router.get('/owner/:id',async(req,res,next)=>{
    try{
        const specifiedOwner = req.params.id;
        if( !specifiedOwner ) throw new Error('Owner was not specified.');
        const owner = await sql.query(`SELECT FirstName,Phone FROM Users WHERE '${specifiedOwner}'=Email`);
        res.send(owner.recordset[0]);
    }
    catch{ return next(e); }
});

/**
 * Checks if a user exist given a token.
 */
router.get('/validate',UserAuth, async(req,res,next)=>{
    try{
        res.send(req.user);
    }
    catch{ return next(e); }
});

//-------------------------------------- POST REQUESTS --------------------------------------------------------------- //

/**
 * Checks if a user exist if so returns the token otherwise error.
 */
router.post('/login', async(req,res,next)=>{
    try{
        const user = await sql.query(`SELECT Email,Password,FirstName FROM Users WHERE (Email='${req.body.email}')`);
        if( user.recordset.length === 0 ) throw new Error('User does not exist');
        const isMatch = await bcrypt.compare(req.body.password ,user.recordset[0].Password );
        if( !isMatch ) throw new Error('Invalid Password');
        const token = jwt.sign( {payload: user.recordset[0].Email}, process.env.SECRET, {expiresIn: "1h"} );
        res.send({token, name: user.recordset[0].FirstName});
    }
    catch(e){ return next(e); }
});

/**
 * Creates a user in the SQL DB with Email and hashed password only.
 */
router.post('/register', async(req,res,next)=>{
    try{
        const user = { email: req.body.email, password: await bcrypt.hash(req.body.password,8) };
        const newUser = await sql.query(`INSERT INTO Users VALUES('${user.email}','${user.password}',NULL,NULL,NULL,NULL,NULL,NULL,NULL)`);
        const token = jwt.sign( {payload: newUser.email}, process.env.SECRET, {expiresIn: "1h"} );
        res.send( {token} );
    }
    catch(e){ return next(e); }
});



module.exports = router;