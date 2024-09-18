import { Component, Input } from '@angular/core';
import { QuoteComponent } from './quote/quote.component';
import { QuoteData } from './quote/quote';
import { TagsComponent } from '../tags/tags.component';

@Component({
  selector: 'app-quote-box',
  standalone: true,
  imports: [QuoteComponent, TagsComponent],
  templateUrl: './quote-box.component.html',
  styleUrls: ['./quote-box.component.css']
})
export class QuoteBoxComponent {
  @Input() tagId!: number | undefined;
  @Input() name: string | undefined;
  @Input() tagSelected: number | undefined;
  // selectedTagId?: number;
  quote = QuoteData;

  // Fix the filtering logic to filter by tagId, not quote id
  get selectedTagQuote() {
    // return this.quote.filter((quote) => quote.tagId === this.tagSelected);
    return this.quote.filter((quote) => quote.tagId === this.tagId);
    // return this.quote.filter((quote) => quote.tagId === this.selectedTagId);
  }

  
  onDeleteQuote(quoteId: number) {
    this.quote = this.quote.filter((quote) => quote.id !== quoteId);
  }
}
