import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-quote-box',
  standalone: true,
  imports: [],
  templateUrl: './quote-box.component.html',
  styleUrl: './quote-box.component.css'
})
export class QuoteBoxComponent {
  
  @Input() id!: number | undefined;
  @Input() name: string | undefined;
}
