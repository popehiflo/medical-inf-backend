const mongoose = require('mongoose');

const dbConnection = async () => {
    //mongodb+srv://clinic_user:E9szIVDtLq6lFCcO@cluster0.6by7g.mongodb.net/clinicadb?authSource=admin&replicaSet=atlas-byp7xv-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true
    try {
        await mongoose.connect(
            process.env.DB_CNN, 
            {
                useNewUrlParser: true, 
                useUnifiedTopology: true,
                useCreateIndex: true
            }
        );

        console.log('Base de Datos Online');
        
    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la BD, ver logs');
    }



}

module.exports = {
    dbConnection
}