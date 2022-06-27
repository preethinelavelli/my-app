export interface Person {
    email: string;
    id: number;
    name: string;
    phone: string;
    username: string;
    address: Address;
    company: Company;
}

export interface Address {
    city: string;
    street: string;
    suite: string;
    zipcode: string;
    geo: GeoLocation;
}

export interface Company {
    bs: string;
    catchPhrase: string;
    name: string;
}

export interface GeoLocation {
    lat: string;
    lng: string;
}