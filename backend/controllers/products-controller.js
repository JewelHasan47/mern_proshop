const products = require( '../data/products' );

const getProducts = ( req, res, next ) => {
    res.json( products );
}

const getProduct = ( req, res, next ) => {
    const product = products.find( p => p._id === req.params.id );
    res.json( product );
}


module.exports = {
    getProducts,
    getProduct,
}