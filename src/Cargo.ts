import faker from "@faker-js/faker"
import { Entity } from "./TrackingMap";

export class Cargo implements Entity{
    trackingId: string;
    location:{
        lat:number,
        lng:number
    }
    weight: number;

    constructor(){
        this.trackingId = faker.datatype.uuid()
        this.location = {
            lat: +faker.address.latitude(),
            lng: +faker.address.longitude(),
        }
    }

    popupText():string{
        return `<h3>Cargo Name: ${this.trackingId}</h3>`
    }
}