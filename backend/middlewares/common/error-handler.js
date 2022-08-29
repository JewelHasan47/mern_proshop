import createError from 'http-errors';

// 404 not found error handler
const notFoundHandler = ( req, res, next ) => {
    next( createError( 404, 'Your requested content was not found!' ) );
}

// default error handler
const errorHandler = ( err, req, res, next ) => {
    if( res.headersSent ) {
        next( 'There was an problem!' );
    } else {
        if( err.message ) {
            res.status( 500 ).send( err.message );
        } else {
            res.send( 'There was an error!' );
        }
    }
}

export {
    notFoundHandler,
    errorHandler
}