import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'wea5-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  isLoading: boolean = false;
  foundBooks: Book[] = [];
  keyup = new EventEmitter<string>();
  @Output() bookSelected = new EventEmitter<Book>();

  constructor(private bs: BookStoreService) { }

  ngOnInit(): void {
    this.keyup.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      tap(() => this.isLoading = true),
      switchMap(x => this.bs.getAllSearch(x)),
      tap(() => this.isLoading = false)
    ).subscribe(x => this.foundBooks = x);
  }

}
