import { Coach } from './coach';

export class Group {

    public id!: number;
    public coach!: Coach;
    public groupType!: string;
    public description!: string;
    public subscriptionVisitPool!: number;
    public subscriptionPrice!: number;
}
