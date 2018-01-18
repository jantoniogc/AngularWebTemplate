import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {

  links: any[];
  constructor() {}

  ngOnInit() {
    this.links = [
      {
        icon: 'twitter',
        ref: 'https://twitter.com/jantoniogc',
        name: '@jantoniogc'
      },
      {
        icon: 'linkedin',
        ref: 'https://www.linkedin.com/in/jantoniogc/',
        name: 'Linked In Profile'
      },
      {
        icon: 'github-circle',
        ref: 'https://github.com/jantoniogc',
        name: 'Git Hub'
      }
    ];
  }
}
