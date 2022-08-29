import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Lucifer',
        email: 'jewelhasan47@yahoo.com',
        password: bcrypt.hashSync( '123123123', 10 ),
        isAdmin: true
    },
    {
        name: 'Jewel Hasan',
        email: 'jewelhasan477@gmail.com',
        password: bcrypt.hashSync( '123123123', 10 ),
    },
];

export default users;