import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BookStoreService } from 'src/app/services/book-store.service';
import { Book } from 'src/app/shared/book';

@Component({
  selector: 'wea5-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[] = [];

  constructor(private bookStoreService: BookStoreService, private router: Router) { }

  ngOnInit(): void {
    this.books = this.bookStoreService.getAll();
  }

}
