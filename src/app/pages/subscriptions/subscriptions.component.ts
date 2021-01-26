import { Component, OnInit } from '@angular/core';
import { Subscription } from 'src/app/dto/subscription';
import { SubscriptionsService } from 'src/app/service/subscriptions/subscriptions.service';

@Component({
    selector: 'app-subscriptions',
    templateUrl: './subscriptions.component.html',
    styleUrls: ['./subscriptions.component.css']
})
export class SubscriptionsComponent implements OnInit {

    subscriptions!: Subscription[];

    constructor(private subscriptionsService: SubscriptionsService) { }

    ngOnInit(): void {
        this.getSubscriptionList();
    }

    getSubscriptionList(): any {
        return this.subscriptionsService.getSubscriptions().subscribe( www => {
            this.subscriptions = www;
            console.log(this.subscriptions);
        });
    }
}
