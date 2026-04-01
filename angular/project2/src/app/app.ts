import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContentParent } from "./content-parent/content-parent";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ContentParent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('project2');
}
