import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-editable-part',
  templateUrl: './editable-part.component.html',
  styleUrls: ['./editable-part.component.scss'],
})
export class EditablePartComponent {
  @Input() value: string = ''; // Input for the value to be edited
  @Input() editable: boolean = true; // Allow control over whether it is editable or not
  @Input() label: string = ''; // Label for the field

  isEditing: boolean = false;
  editControl = new FormControl('');

  // Track the current editing instance
  private static currentEditingField: EditablePartComponent | null = null;

  constructor() {
    if (EditablePartComponent.currentEditingField) {
      // Close the previous editing field if it's different from the current one
      EditablePartComponent.currentEditingField.closeEdit();
    }
    EditablePartComponent.currentEditingField = this;
  }

  toggleEdit() {
    if (this.editable) {
      if (this.isEditing) {
        // If currently editing, save and close
        this.closeEdit();
      } else {
        // Otherwise, start editing
        this.isEditing = true;
        this.editControl.setValue(this.value); // Prepopulate with current value
        EditablePartComponent.currentEditingField = this;
      }
    }
  }

  onBlur() {
    this.closeEdit();
  }

  closeEdit() {
    this.isEditing = false;
    this.value = this.editControl.value || this.value; // Save edited value
    if (EditablePartComponent.currentEditingField === this) {
      EditablePartComponent.currentEditingField = null;
    }
  }

  getIconPath(label: string): string {
    const iconMap: { [key: string]: string } = {
      Assignee: 'assets/icon-activity.svg',
      'Co-owner': 'assets/icon-coowner.svg',
      Importance: 'assets/icon-importance.svg',
      'Customer name': 'assets/icon-customername.svg',
      'Invoice ID': 'assets/icon-invoiceid.svg',
    };
    return iconMap[label] || 'assets/default-icon.svg'; // Fallback icon if none matches
  }
}
