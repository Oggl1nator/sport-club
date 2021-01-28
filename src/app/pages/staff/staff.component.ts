import { Component, OnInit } from '@angular/core';
import { Coach } from 'src/app/dto/coach';
import { StaffService } from '../../service/staff/staff.service';

@Component({
    selector: 'app-staff',
    templateUrl: './staff.component.html',
    styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

    staff!: Coach[];
    newCoach!: Coach;
    isAdding: boolean;
    pattern: string = '^[а-яА-ЯЁё\\-\\s]+$';
    error!: string;

    constructor(private staffService: StaffService) {
        this.isAdding = false;
    }

    ngOnInit(): void {
        this.getStaffList();
    }

    getStaffList(): any {
        return this.staffService.getStaff().subscribe( www => {
            this.staff = www;
            console.log(this.staff);
        });
    }

    addNewCoach() {
        this.isAdding = true;
        this.newCoach = new Coach();
    }

    saveNewCoach() {
        console.log(this.newCoach);
        this.staffService.saveCoach(this.newCoach).subscribe( www => {
            console.log(www);
            if (www && www.coach) {
                this.staff.push(www.coach);
            } else {
                this.error = 'Не удалось сохранить изменения';
            }
            this.undoAdding();
        });
    }

    undoAdding() {
        this.isAdding = false;
    }
}
