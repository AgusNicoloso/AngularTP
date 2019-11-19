import { Component, OnInit, Output , EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-paginador',
  templateUrl: './paginador.component.html',
  styleUrls: ['./paginador.component.css']
})
export class PaginadorComponent implements OnInit {
  @Output() pageEvent: EventEmitter<boolean> = new EventEmitter();
  page = 0;
  constructor() { }

  ngOnInit() {
  }

  changePage(change: boolean) {
    this.pageEvent.emit(change);
    this.page = change ? this.page += 1 : this.page -= 1;
  }

}
