import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/service/common.service';

@Component({
	selector: 'app-component1',
	templateUrl: './component1.component.html',
	styleUrls: ['./component1.component.scss']
})
export class Component1Component implements OnInit {
	// dumyData!: DummyData[];
	dumyData: any;

	constructor(private readonly apiService: CommonService, public router: Router) { }

	ngOnInit(): void {
		this.getDummyData();
	}

	getDummyData() {
		this.apiService.getDummyData().subscribe((data) => {
			this.dumyData = data.map((blog: any) => {
				blog.imgURL = `https://source.unsplash.com/random/300x200?sig=${blog.id}`;
				return blog;
			});
		});
	}

	viewBlogInfo(event: any) {
		console.log(event);
		this.router.navigate(['admin/second-component', event]).catch(undefined);
	}
}
