import { Component, Input } from '@angular/core';
import { QuoteComponent } from './quote/quote.component';
import { QuoteData } from './quote/quote';
import { TagsComponent } from '../tags/tags.component';
import { NewQuoteComponent } from "./new-quote/new-quote.component";
import { newQuoteType } from './quote/quote.model';

@Component({
  selector: 'app-quote-box',
  standalone: true,
  imports: [QuoteComponent, TagsComponent, NewQuoteComponent],
  templateUrl: './quote-box.component.html',
  styleUrls: ['./quote-box.component.css']
})
export class QuoteBoxComponent {
  @Input() tagId!: number | undefined;
  @Input() name: string | undefined;
  @Input() tagSelected: number | undefined;
  // selectedTagId?: number;
  quote = QuoteData;
  isAddingQuote = false;
  value: any;

  get selectedTagQuote() {
    // return this.quote.filter((quote) => quote.tagId === this.tagSelected);
    return this.quote.filter((quote) => quote.tagId === this.tagId);
    // return this.quote.filter((quote) => quote.tagId === this.selectedTagId);
  }

  onAddingQuote() {
    this.isAddingQuote = true;
  }

  onCanceledAddingQuote() {
    this.isAddingQuote = false;
  }

  onAddQuote(quoteData: newQuoteType) {
    this.quote.unshift({
      id: new Date().getTime(),
      tagId: this.tagId ?? 1,
      quote: quoteData.quote,
      author: quoteData.author,
    });
    this.isAddingQuote = false;
  }

  onDeleteQuote(quoteId: number) {
    this.quote = this.quote.filter((quote) => quote.id !== quoteId);
  }
}