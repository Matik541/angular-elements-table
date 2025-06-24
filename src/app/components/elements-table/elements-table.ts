import { Component, Input, Output, EventEmitter, signal, computed, effect, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeriodicElement } from '../../models/periodic-element.model';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ElementsStore } from '../../store/elements.store';

@Component({
  selector: 'app-elements-table',
  imports: [CommonModule, MatTableModule, MatButtonModule, MatIconModule, MatProgressSpinnerModule],
  templateUrl: './elements-table.html',
  styleUrl: './elements-table.scss'
})
export class ElementsTableComponent {
  readonly store = inject(ElementsStore);

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'actions'];

  @Output() editElement = new EventEmitter<PeriodicElement>();

  onEdit(element: PeriodicElement): void {
    this.editElement.emit(element);
  }
}