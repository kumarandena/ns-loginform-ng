import { Component, OnInit } from "@angular/core";
import { Page } from "ui/page";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {

    constructor(private page: Page) {
    }

    ngOnInit(): void {
        this.page.actionBarHidden = true;
    }
}
