import { Address } from "./Address";

export class User{
    id: string;
    name: string;
    emailId: string;
    mobileNumber: string;
    addresss: Address[]


    constructor(id: string, name: string, emailId: string, mobileNumber: string, address: Address[]) {
        this.id = id;
        this.name = name;
        this.emailId = emailId;
        this.mobileNumber = mobileNumber;
        this.addresss = address
      }
}