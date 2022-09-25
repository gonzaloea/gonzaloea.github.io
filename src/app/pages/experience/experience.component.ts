import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  experiences = [
    {
      title: 'Backend Developer',
      url: 'https://www.uala.com.ar/',
      logo: 'https://seeklogo.com/images/U/uala-logo-7959775EA9-seeklogo.com.png',
      employer: 'Uala\u0301',
      to: undefined,
      from: new Date(2022,6,1),
      description: '',
      skills: [ 'Java', 'DynamoDB', 'AWS', 'Terraform', 'Terragrunt', 'TDD']
    },{
      title: 'Technical Lead',
      url: 'http://vantek.io/',
      logo: 'https://www.wallstreetenglish.com.ar/hubfs/VANTEK_LOGO.png',
      employer: 'Vantek',
      to: new Date(2022,6,1),
      from: new Date(2021,6,1),
      description: '',
      skills: ['Coaching', 'Team Leadership', 'Ionic', 'Java', 'Angular']
    },{
      title: 'FullStack Engineer',
      url: 'http://vantek.io/',
      logo: 'https://www.wallstreetenglish.com.ar/hubfs/VANTEK_LOGO.png',
      employer: 'Vantek',
      to: new Date(2021,6,1),
      from: new Date(2019,7,1),
      description: '',
      skills: ['Bash', 'DevOps', 'Ionic', 'Java', 'Spring Framework', 'Angular', 'PostgreSQL']
    },{
      title: 'FullStack Developer',
      employer: 'Keepcon',
      url: 'https://keepcon.com/',
      logo: 'https://contactcentersonline.com/wp-content/uploads/2021/01/Keepcon-Logos_Logotipo-1-e1609823381566.png',
      to: new Date(2019,7,1),
      from: new Date(2017,11,1),
      description: '',
      skills: ['Ruby on Rails', 'Vue.js', 'DevOps', 'TDD', 'Ruby', 'PostgreSQL']
    },{
      title: 'Software Developer',
      employer: 'Codementor',
      url: 'https://www.codementor.io/@gonzaloalvarez',
      logo: 'https://cdn.filestackcontent.com/cLv6OUoRMWoe3Vn3Pchg',
      to: new Date(2018,10,1),
      from: new Date(2018,6,1),
      description: '',
      skills: ['Algorithm Desing', 'Python', 'Java', 'SQL', 'Ruby']
    },{
      title: 'Software Developer',
      employer: 'Lumina Americas',
      url: 'https://www.luminaamericas.com/',
      logo: 'https://www.luminaamericas.com/wp-content/uploads/2022/02/Logo-Lumina_Mesa-de-trabajo-1-copia.png',
      to: new Date(2017,11,1),
      from: new Date(2014,2,1),
      description: '',
      skills: ['Oracle Database', 'Java Swing', 'Java', 'Spring Framework', 'PL/SQL']
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  yearsDiff(from: Date, to: Date) {
    return Math.floor((to.getTime() - from.getTime() ) /(1000 * 60 * 60 * 24 * 364));
  }

  yearsDiffFromNow(from: Date) {
    return Math.floor((new Date().getTime() - from.getTime() ) /(1000 * 60 * 60 * 24 * 364));
  }

  monthsDiff(from: Date, to: Date) {
    return Math.floor(((to.getTime() - from.getTime() ) /(1000 * 60 * 60 * 24 * 364) % 1) * 12)
  }

  monthsDiffFromNow(from: Date) {
    return Math.floor(((new Date().getTime() - from.getTime() ) /(1000 * 60 * 60 * 24 * 364) % 1) * 12)
  }
}
