import { Component, Input } from '@angular/core';
import { QuoteType } from './quote.model';

@Component({
  selector: 'app-quote',
  standalone: true,
  imports: [],
  templateUrl: './quote.component.html',
  styleUrl: './quote.component.css'
})
export class QuoteComponent {  
  @Input({ required: true }) quote!: QuoteType;
}
