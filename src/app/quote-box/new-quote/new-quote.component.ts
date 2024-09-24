import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type newQuoteType } from '../quote/quote.model';

@Component({
  selector: 'app-new-quote',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-quote.component.html',
  styleUrl: './new-quote.component.css'
})
export class NewQuoteComponent {
  @Output() close = new EventEmitter<void>();
  @Output() add = new EventEmitter<newQuoteType>();
  enteredAuthor = '';
  enteredQuote = '';
  onClose() {
    this.close.emit();
  }
  onSubmit() {
    this.add.emit({
      author: this.enteredAuthor,
      quote: this.enteredQuote,
    });
  }
}
