import { Component, Input } from '@angular/core';
import { QuoteComponent } from './quote/quote.component';
import { QuoteData } from './quote/quote';
import { TagsComponent } from '../tags/tags.component';

@Component({
  selector: 'app-quote-box',
  standalone: true,
  imports: [QuoteComponent],
  templateUrl: './quote-box.component.html',
  styleUrls: ['./quote-box.component.css']
})
export class QuoteBoxComponent {
  @Input() tagId!: number | undefined;
  @Input() name: string | undefined;
  quote = QuoteData;

  // Fix the filtering logic to filter by tagId, not quote id
  get SelectedTagQuote() {
    return this.quote.filter((quote) => quote.tagId === this.tagId);
  }
}
