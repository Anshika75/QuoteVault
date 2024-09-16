import { Component, Input } from '@angular/core';
import { Tag } from './tag.model';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent {
  @Input({required:true}) tag!: Tag;
}
