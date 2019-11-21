import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  templateUrl: './registro.html',
  styleUrls: ['./registro.css']
})
export class HelloComponent  {
  @Input() name: string;
}
