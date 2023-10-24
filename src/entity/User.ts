import { IsNotEmpty } from "class-validator";
import { ObjectId } from "mongodb";
import { Address } from "../dto/Address";
import { Column, Entity, ObjectIdColumn } from "typeorm";

@Entity("user")
export class User{

    @ObjectIdColumn()
    public _id: ObjectId;

    @Column()
    public name: string;

    @Column()
    public emailId: string;
    @Column()
    @IsNotEmpty()
    public mobileNumber: string;

    @Column()
    public addresss: Address[]
}