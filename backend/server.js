const express = require( 'express' );
const dotenv = require( 'dotenv' );
const productsRoutes = require( './routes/products-routes' );
const { notFoundHandler, errorHandler } = require( './middlewares/common/error-handler' );

// main app
const app = express();
// dotenv config
dotenv.config();

// request parsers
app.use( express.json() );
app.use( express.urlencoded( { extended: true } ) );

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