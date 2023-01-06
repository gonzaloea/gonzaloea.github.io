import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  downloadCurriculumVitae() {
    let link = document.createElement("a");
    link.download = "CV - Gonzalo Alvarez.pdf";
    link.href = "assets/files/CV - Gonzalo Alvarez.pdf";
    link.click();
  }
}
