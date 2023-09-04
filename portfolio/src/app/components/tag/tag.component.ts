import { Component, Input } from '@angular/core';
import { Tag } from 'src/class/tag';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent{

  @Input() tag: Tag | undefined;
  @Input() length: string = "100px";
}
