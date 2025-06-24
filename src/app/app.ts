import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementsTableComponent } from './components/elements-table/elements-table';
import { ElementEditDialogComponent } from './components/element-edit-dialog/element-edit-dialog';
import { ElementFilterComponent } from './components/element-filter/element-filter';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialog } from '@angular/material/dialog';
import { PeriodicElement } from './models/periodic-element.model';
import { ElementsStore } from './store/elements.store';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    ElementsTableComponent,
    ElementFilterComponent,
    MatToolbarModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'Angular elements table';
  readonly store = inject(ElementsStore);
  private dialog = inject(MatDialog);

  ngOnInit(): void {
    this.store.loadElements();
  }

  openEditDialog(element: PeriodicElement): void {
    const dialogRef = this.dialog.open(ElementEditDialogComponent, {
      width: '400px',
      data: element,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result);
      if (result) {
        this.store.updateElement(result);
      }
      console.log('Updated element:', result, 'in store:', this.store.elements());
    });
  }
}
