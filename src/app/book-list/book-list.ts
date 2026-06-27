import { Component } from '@angular/core';
import { Book } from '../book';
import { CommonModule } from '@angular/common';
import { BookService } from '../book.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  imports: [CommonModule],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css',
})
export class BookList implements OnInit {
  books:Book[]=[]
  constructor(private bookService:BookService){}
  ngOnInit(){
    this.getBooks();
  }

  getBooks():void{
    this.bookService.getBooks().subscribe(books=>this.books=books);
  }
}
