import {Component, OnInit} from '@angular/core';
import {PresidentialResults} from "../core/models";
import {NationService} from "../core/services/nation.service";
import {retry, share, switchMap, timer} from "rxjs";

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
    timer(1, 2 * 60 * 1000)
      .pipe(
        switchMap(() => this.nation.getPresidentialResults()),
        retry(),
        share()
      )
      .subscribe((value) => this.data = value);
  }
}
