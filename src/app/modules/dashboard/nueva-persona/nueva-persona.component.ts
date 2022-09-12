import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nueva-persona',
  templateUrl: './nueva-persona.component.html',
  styleUrls: ['./nueva-persona.component.css']
})
export class NuevaPersonaComponent implements OnInit {

  constructor(
    public router: Router,
  ) { }

  ngOnInit(): void {
  }

}
