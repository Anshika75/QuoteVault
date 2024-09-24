import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-quote',
  standalone: true,
  imports: [],
  templateUrl: './new-quote.component.html',
  styleUrl: './new-quote.component.css'
})
export class NewQuoteComponent {
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}
