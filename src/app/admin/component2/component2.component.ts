import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DummyData } from 'src/app/modals/component1';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.scss']
})
export class Component2Component implements OnInit {

  routeParamsInfo!: DummyData;
  constructor(
    private readonly activatedRoute: ActivatedRoute,
  ) {

    this.activatedRoute.params.subscribe((routeParams) => {
      this.routeParamsInfo = {
        id: routeParams['id'],
        firstName: routeParams['firstName'],
        lastName: routeParams['lastName'],
        body: routeParams['body'],
        title: routeParams['title'],
        imgURL: routeParams['imgURL'],
        description: routeParams['description'],
        date: routeParams["date"]
      };
    });
  }

  ngOnInit(): void {
  }

}
