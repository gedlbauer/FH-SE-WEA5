import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookStoreService } from 'src/app/services/book-store.service';
import { Book } from 'src/app/shared/book';

@Component({
  selector: 'wea5-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  book: Book;

  constructor(private route: ActivatedRoute,
    private bookStoreService: BookStoreService,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>
      this.book = this.bookStoreService.getBookById(params['id'])
    );
  }

  showBookList(): void {
    this.router.navigateByUrl("/books");
  }

}
