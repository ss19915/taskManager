import mongoose from 'mongoose';

const mongooseConnect = (dbUri) => {
    mongoose.connect(dbUri, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useUnifiedTopology: true,
    });

    mongoose.connection.on('connected', () => {
        console.log('Mongoose default connection is open');
    });

    mongoose.connection.on('error', () => {
        mongoose.connect(dbUri, {
            useNewUrlParser: true,
            useFindAndModify: false,
            useCreateIndex: true,
            useUnifiedTopology: true,
        });    
    });

    mongoose.connection.on('disconnected', () => {
        console.log('Mongoose default connection is disconnected');
    });

    process.on('SIGINT', () => {
        mongoose.connection.close(() => {
            console.log('Mongoose default connection is disconnected due to application termination');
            process.exit(0);
        });
    });
};

export default mongooseConnect;