import 'reflect-metadata';
import { createExpressServer } from 'routing-controllers';
import { UserController } from './controllers/UserController';
<<<<<<< HEAD
import { MONGO_DATA_SOURCE } from './DB/AppDataSource';

MONGO_DATA_SOURCE
=======
import { APP_DATA_SOUCE } from './DB/AppDataSource';

APP_DATA_SOUCE
>>>>>>> c350da8 (intial commit)
.initialize()
.then(() => console.log("data base connection established successfully"))
.catch((error) => console.log(`database connection failed , due to ${error}`))




// creates express app, registers all controller routes and returns you express app instance
const app = createExpressServer({
  controllers: [UserController], // we specify controllers we want to use
});

// run express application on port 3000
app.listen(8080).on('error', (error: Error)=> console.log(error))
