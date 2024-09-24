import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-quote',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-quote.component.html',
  styleUrl: './new-quote.component.css'
})
export class NewQuoteComponent {
  @Output() close = new EventEmitter<void>();
  enteredAuthor = '';
  enteredQuote = '';
  onClose() {
    this.close.emit();
  }
}
