import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-icon-buttons',
  templateUrl: './icon-buttons.component.html',
  styleUrls: ['./icon-buttons.component.scss'],
})
export class IconButtonsComponent {
  @Input() svgPath: string = ''; // Input for SVG icon path
  @Input() buttonTitle: string = ''; // Input for button title

  // Event emitter to notify parent about view changes
  @Output() viewChanged = new EventEmitter<string>();

  // Trigger the view change on button click
  onButtonClick() {
    this.viewChanged.emit(this.buttonTitle);
  }
}
