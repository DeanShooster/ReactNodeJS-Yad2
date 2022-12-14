const jwt = require('jsonwebtoken');
const sql = require('mssql');

const userAuth = async (req ,res ,next ) => {
    try{
        const token = req.headers.token;
        const decoded = jwt.verify(token,process.env.SECRET);
        const user = await sql.query(`SELECT Email,FirstName,Phone FROM Users WHERE '${decoded.payload}'=Email`);
        if( user.recordset.length === 0 ) return res.status(404).send( {Message: 'No Authentication.'} );
        req.user = user.recordset[0];
        next();
    }
    catch(e) { res.status(403).send( {Message: 'No Authentication.'} ) }
}

module.exports = userAuth;