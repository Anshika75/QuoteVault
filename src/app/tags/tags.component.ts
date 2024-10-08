import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TagType } from './tag.model';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [],
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {
  @Input({ required: true }) tag!: TagType;
  @Input({required:true}) selected!: boolean;
  @Output() tagSelected = new EventEmitter<number>();  // Emit tag id, which is a number

  onSelectedTag() {
    this.tagSelected.emit(this.tag.tagId);  // Emit the tag's id
  }
}
