import mongoose from 'mongoose';
import dotenv from 'dotenv';
import users from './data/users.js';
import products from './data/products.js';
import User from './models/user-model.js';
import Product from './models/product-model.js';
import Order from './models/order-model.js';

dotenv.config();

mongoose.connect( process.env.MONGODB_CONNECTION )
    .then( () => console.log( 'Database Connection Successful...' ) )
    .catch( e => console.log( `Error: ${ e.message }` ) );

const importData = async() => {
    try {
        await User.deleteMany();
        await Product.deleteMany();
        await Order.deleteMany();

        const createdUsers = await User.insertMany( users );

        const adminUser = createdUsers[ 0 ]._id;

        const sampleProducts = products.map( product => {
            return { ...product, user: adminUser };
        } );

        await Product.insertMany( sampleProducts );

        console.log( 'Data Imported!' );

        process.exit();
    } catch( err ) {
        console.error( `${ err }` );
        process.exit( 1 );
    }
}

const destroyData = async() => {
    try {
        await User.deleteMany();
        await Product.deleteMany();
        await Order.deleteMany();

        console.log( 'Data Destroyed!' );

        process.exit();
    } catch( err ) {
        console.error( `${ err }` );
        process.exit( 1 );
    }
}

if( process.argv[ 2 ] === '-d' ) {
    destroyData();
} else {
    importData();
}