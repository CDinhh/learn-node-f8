import mongoose from 'mongoose';

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/learn_nodejs_dev');
        console.log('Mongooes connected!!!');
    } catch (error) {
        console.log('connected failed');
    }
}

export default { connect };