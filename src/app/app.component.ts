  import { Component } from '@angular/core';
  import { HeaderComponent } from "./header/header.component";
  import { TagsComponent } from "./tags/tags.component";
  import { TagData } from "./tags/tags";
  import { QuoteBoxComponent } from "./quote-box/quote-box.component";

  @Component({
    selector: 'app-root',
    standalone: true,
    imports: [HeaderComponent, TagsComponent, QuoteBoxComponent],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
  export class AppComponent {
    title = 'quote';
    tag = TagData;
    selectedTagId = 1;
    get selectedTag() {
      return this.tag.find(tag => tag.tagId === this.selectedTagId);
    }
    onSelectedTag(tagId: number) {
      this.selectedTagId = tagId;
    }
  }
