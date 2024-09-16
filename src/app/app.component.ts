import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { TagsComponent } from "./tags/tags.component";
import { TagData } from "./tags/tags";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, TagsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quote';
  tag = TagData;
}
