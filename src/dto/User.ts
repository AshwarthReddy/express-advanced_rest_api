import { Address } from "./Address";

export class UserDTO{
    _id: string;
    name: string;
    emailId: string;
    mobileNumber: string;
    addresss: Address[]


    constructor(_id: string, name: string, emailId: string, mobileNumber: string, address: Address[]) {
        this._id = _id;
        this.name = name;
        this.emailId = emailId;
        this.mobileNumber = mobileNumber;
        this.addresss = address
      }
}