import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import { Title } from '@angular/platform-browser';
import { Meta, MetaDefinition} from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  public pageLabel: string = '';

  constructor(
    private router: Router,
    private title: Title,
    private meta: Meta
  ) {
      this.getDataRoute()
        .subscribe( data => {
          this.pageLabel = data.titulo;
          this.title.setTitle(this.pageLabel);
          let metaTag: MetaDefinition = {
            name : 'Description',
            content: this.pageLabel
          }
          this.meta.updateTag(metaTag);
        })
  }

  getDataRoute() {
    return this.router.events
      .filter(evento => evento instanceof ActivationEnd)
      .filter((evento: ActivationEnd) => evento.snapshot.firstChild === null)
      .map((evento: ActivationEnd) => evento.snapshot.data);
  }
  ngOnInit() {
  }

}
