import { Component, Input } from '@angular/core';
import { TagType } from './tag.model';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [],
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']  // Fixed property name
})
export class TagsComponent {
  @Input({ required: true }) tag!: TagType;
}
