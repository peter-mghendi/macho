import { Component, OnInit } from '@angular/core';
import {PresidentialResults} from "../core/models";
import {NationService} from "../core/services/nation.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: PresidentialResults | null = null

  constructor(private nation: NationService) {
  }

  ngOnInit(): void {
    this.nation.getPresidentialResults().subscribe((value) => this.data = value);
  }
}
