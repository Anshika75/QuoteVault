import { Component, Input } from '@angular/core';
import { QuoteComponent } from "./quote/quote.component";

@Component({
  selector: 'app-quote-box',
  standalone: true,
  imports: [QuoteComponent],
  templateUrl: './quote-box.component.html',
  styleUrl: './quote-box.component.css'
})
export class QuoteBoxComponent {
  
  @Input() id!: number | undefined;
  @Input() name: string | undefined;
}
