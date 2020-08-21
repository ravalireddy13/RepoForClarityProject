import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-mirlo',
    templateUrl: './mirlo.component.html',
    styleUrls: ['./mirlo.component.scss']
})
export class MirloComponent {

    rowSelected = [];
    editUser;
    removeItem(id) {

        this.users = this.users.filter(item => item.id !== id);

    }


    save(user) {
        user = Object.assign(this.editUser);
        this.editUser = null;
    }

    users = [{
        "id": 1,
        "first_name": "Ravali Reddy",
        "last_name": "Sankaramaddi",
        "email": "ravalirs@umich.edu"
    }, {
        "id": 2,
        "first_name": "Sameer",
        "last_name": "Kencham",
        "email": "skencham@miraclesoft.com"
    }, {
        "id": 3,
        "first_name": "Lavanya",
        "last_name": "Guntuku",
        "email": "lguntuku@miraclesoft.com"
    }, {
        "id": 4,
        "first_name": "Sandhya",
        "last_name": "Ethakota",
        "email": "sethakota@miraclesoft.com"
    }, {
        "id": 5,
        "first_name": "Jyotsna",
        "last_name": "Dasari",
        "email": "jdasari@miraclesoft.com"
    }];
}
