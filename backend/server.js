import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import productsRoutes from './routes/products-routes.js';
import { notFoundHandler, errorHandler } from './middlewares/common/error-handler.js' ;

// main app
const app = express();
// dotenv config
dotenv.config();

// request parsers
app.use( express.json() );
app.use( express.urlencoded( { extended: true } ) );

mongoose.connect( process.env.MONGODB_CONNECTION )
    .then( () => console.log( 'Database Connection Successful...' ) )
    .catch( e => console.log( `Error: ${ e.message }` ) );

// routes
app.get( '/', ( req, res ) => {
    res.send( 'Home' );
} );

app.use( '/api/products', productsRoutes );

// not found error handler
app.use( notFoundHandler );
// common error handler
app.use( errorHandler );

// port
const PORT = process.env.PORT || 5000;
// server running
app.listen( PORT, () => console.log( `Server running in ${ process.env.NODE_ENV } mode on http://localhost:${ PORT }` ) );