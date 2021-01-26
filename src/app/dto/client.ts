import { Person } from './person';

export class Client extends Person {

    public id!: number;
    public dateOfBirth!: Date;
    public phoneNumber!: string;
}
