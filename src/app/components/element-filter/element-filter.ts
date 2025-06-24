import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ElementsStore } from '../../store/elements.store';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-element-filter',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './element-filter.html',
  styleUrl: './element-filter.scss'
})
export class ElementFilterComponent implements OnInit {
  readonly store = inject(ElementsStore);
  filterControl = new FormControl('');

  ngOnInit(): void {
    this.filterControl.valueChanges.pipe(
      debounceTime(2000), 
      distinctUntilChanged()
    ).subscribe(term => {
      this.store.setFilterTerm(term || '');
    });
  }
}