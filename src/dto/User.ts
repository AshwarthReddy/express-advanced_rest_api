import { Address } from "./Address";

<<<<<<< HEAD
export class UserDTO{
    _id: string;
=======
export class User{
    id: string;
>>>>>>> c350da8 (intial commit)
    name: string;
    emailId: string;
    mobileNumber: string;
    addresss: Address[]


<<<<<<< HEAD
    constructor(_id: string, name: string, emailId: string, mobileNumber: string, address: Address[]) {
        this._id = _id;
=======
    constructor(id: string, name: string, emailId: string, mobileNumber: string, address: Address[]) {
        this.id = id;
>>>>>>> c350da8 (intial commit)
        this.name = name;
        this.emailId = emailId;
        this.mobileNumber = mobileNumber;
        this.addresss = address
      }
}