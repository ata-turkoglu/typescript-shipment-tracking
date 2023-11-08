import faker from "@faker-js/faker"
import { Entity } from "./TrackingMap";

export class Destination implements Entity {
    receiver:string;
    location:{
        lat:number;
        lng:number;
    }
    weight:number;

    constructor(){
        this.receiver =faker.name.firstName()
        this.location = {
            lat: +faker.address.latitude(),
            lng: +faker.address.longitude()
        }
    }

    popupText(): string{
        return `<h3>Receiver Name: ${this.receiver}</h3>`
    }
}