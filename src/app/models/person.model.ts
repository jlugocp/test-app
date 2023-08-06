import { Address } from "./address.model";
import { Company } from "./company.models";

/**
 * Person data
 */
export class Person {
    
    id = 0;

    name = '';

    username = '';

    email = '';

    address = new Address();

    phone = '';

    website = '';

    company = new Company();

}