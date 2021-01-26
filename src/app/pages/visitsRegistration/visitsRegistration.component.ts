import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/dto/client';
import { Coach } from 'src/app/dto/coach';
import { VisitsRegistrationService } from '../../service/visitsRegistration/visitsRegistration.service';

@Component({
    selector: 'app-visits-registration',
    templateUrl: './visitsRegistration.component.html',
    styleUrls: ['./visitsRegistration.component.css']
})
export class VisitsRegistrationComponent implements OnInit {

    public pickedCoachId!: number;
    public coaches!: Coach[];
    public clients!: Client[];
    public visited!: boolean[];

    constructor(private visitsRegistrationService: VisitsRegistrationService) { }

    ngOnInit(): void {
        this.getCoachList();
    }

    getCoachList(): any {
        return this.visitsRegistrationService.getCoaches().subscribe( www => {
            this.coaches = www;
            console.log(this.coaches);
        });
    }

    loadSubscribedClients(coachId: number): void {
        console.log(coachId);
        this.pickedCoachId = coachId;
        this.getSubscribedClients(coachId);
    }

    getSubscribedClients(coachId: number) {
        return this.visitsRegistrationService.getClients(coachId).subscribe( www => {
            this.clients = www;
            this.initVisited();
            console.log(this.clients);
            console.log(this.visited);
        });
    }

    initVisited() {
        this.visited = [];
        this.clients.forEach( () => {
            this.visited.push(false);
        });
    }

    registerVisits() {
        console.log(this.visited);
        let visitedClients: Client[] = [];
        this.visited.forEach( (visit: boolean, idx) => {
            if (visit) {
                visitedClients.push(this.clients[idx]);
            }
        });
        return this.visitsRegistrationService.saveVisits(visitedClients);
    }
}
