import { Geo } from "./geo.models";

/**
 * Address data
 */
export class Address {
    
    street = '';

    suite = '';

    city = '';

    zipcode = '';

    geo = new Geo();
}