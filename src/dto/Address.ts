export class Address{

    dNo: string;
    street: string;
    city: string;
    pinCode: number;
    constructor(dNo: string, street: string, city: string, pinCode: number){
        this.dNo = dNo;
        this.street = street;
        this.city = city;
        this.pinCode = pinCode
    }
}