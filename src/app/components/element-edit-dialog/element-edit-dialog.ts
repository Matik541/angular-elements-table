import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { PeriodicElement } from '../../models/periodic-element.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-element-edit-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule 
  ],
  templateUrl: './element-edit-dialog.html',
  styleUrl: './element-edit-dialog.scss'
})
export class ElementEditDialogComponent {
  editedElement: PeriodicElement;

  constructor(
    public dialogRef: MatDialogRef<ElementEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PeriodicElement
  ) {
    this.editedElement = { ...data }; 
  }

  onSave(): void {
    this.dialogRef.close(this.editedElement);
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}