import { Component, OnInit } from "@angular/core";
import { MenuItem } from "primeng/api";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-specification",
  templateUrl: "./specification.component.html",
})
export class SpecificationComponent implements OnInit {
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;
  specVersion = "1.1";
  detailHTML = "";

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe((params) => {
    this.http.get("/assets/specification/" + this.specVersion + "/" + params.get('route') , {
        responseType: "text",
      }).subscribe((data) => {
        this.detailHTML = data;
    });
    });

    this.items = [
      { label: "Home", routerLink: "/" },
      { label: "Specification", routerLink: "specification" },
    ];
    this.home = { icon: "pi pi-home", routerLink: "/" };
  }

  versionChange(event: any) {
    console.log("Index is :", event.index);
  }
}
