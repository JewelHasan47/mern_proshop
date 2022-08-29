import products from '../data/products.js';

const getProducts = ( req, res, next ) => {
    res.json( products );
}

const getProduct = ( req, res, next ) => {
    const product = products.find( p => p._id === req.params.id );
    res.json( product );
}

export {
    getProduct,
    getProducts
}