# Gestion Clinica - Backend NodeJS
## API REST con JWT 🏥
### Create - Read - Update - Delete 🚀
* Usuarios   
* Clinicas   
* Medicos
### Construido con 🛠️
* [MongoDB](https://www.mongodb.com/es) -  Base de datos distribuida, basada en documentos y de uso general
* [Express](https://expressjs.com/es/) - Infraestructura web rápida, minimalista y flexible para Node.js
* [Mongoose](https://mongoosejs.com/) - Solución sencilla basada en esquemas para modelar los datos
* [NodeJS](https://nodejs.org/es/) - Entorno de ejecucion para JavaScript
* [nodemon](https://www.npmjs.com/package/nodemon) - Herramienta que reinicia automáticamente la app al detectar cambios
* [JWT](https://jwt.io/) - Permite decodificar, verificar y generar JWT

### Intalación 📌
* Clone el repositorio y dirijase a `backend/api-nodejs/gestionclinica-nodejs`
* Entonces, instale las dependencias/paquetes con `npm install` o `yarn`.
    * Luego cree un archivo `.env` y declare `DB_URI=<Your database uri>`
        * Nota: La api usa MongoDB y mongoose, you must write an MongoDB url, example `mongodb://<Your hosted db>/<Your database>`
    * Then run `npm run dev` or `yarn dev`.
* Run as production:
    * After clone the repository, run the command `npm run lint && npm run prettier && npm run buid` or `yarn lint && yarn prettier && yarn buid`
    * Then run `npm start` or `yarn start`