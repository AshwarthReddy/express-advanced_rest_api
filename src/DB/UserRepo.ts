import { User } from "../entity/User";
import { MONGO_DATA_SOURCE } from "./AppDataSource";
import { EntityRepository, MongoRepository } from "typeorm";

// export const UserRepo =  MONGO_DATA_SOURCE.getRepository(User).extend({
//     findById(id: string){
//         return this.createQueryBuilder('user').where('_id = id', {id}).getMany()

//     },

// })

export const UserRepo = MONGO_DATA_SOURCE.getMongoRepository(User);