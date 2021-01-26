import { Client } from "./client";
import { Group } from "./group";

export class Subscription {

    public id!: number;
    public client!: Client;
    public group!: Group;
    public visitsLeft!: number;
}
