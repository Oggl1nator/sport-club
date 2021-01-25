import { Component, OnInit } from '@angular/core';
import { Group } from '../../dto/group';
import { GroupsService } from '../../service/groups.service';

@Component({
    selector: 'app-groups',
    templateUrl: './groups.component.html',
    styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

    groups!: Group[];

    constructor(private groupsService: GroupsService) { }

    ngOnInit(): void {
        this.getGroupList();
    }

    getGroupList(): any {
        return this.groupsService.getGroups().subscribe( www => {
            this.groups = www;
            console.log(this.groups);
        });
    }
}
