import { Component } from '@angular/core';
import { ContentChild } from "../content-child/content-child";

@Component({
  selector: 'app-content-parent',
  imports: [ContentChild],
  templateUrl: './content-parent.html',
  styleUrl: './content-parent.css',
})
export class ContentParent {}
