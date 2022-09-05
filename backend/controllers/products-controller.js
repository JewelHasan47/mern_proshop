import Product from '../models/product-model.js';

const getProducts = async ( req, res, next ) => {
    try {
        const products = await Product.find( {} );

        if ( products.length !== 0 ) {
            res.json( products );
        } else {
            res.status( 404 ).json( { message: 'Products Not Found!' } );
        }

    } catch ( err ) {
        console.log( err.message )
        next( err );
    }
};

const getProduct = async ( req, res, next ) => {
    try {
        const product = await Product.findOne( { _id: req.params.id } );

        if ( product ) {
            res.json( product );
        } else {
            res.status( 404 ).json( { message: 'Product Not Found!' } );
        }

    } catch ( err ) {
        console.log( err.message );
        next( err );
    }


}

export {
    getProduct,
    getProducts
}