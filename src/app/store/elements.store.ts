import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { PeriodicElement } from '../models/periodic-element.model';
import { computed, inject } from '@angular/core';
import { ElementsService } from '../services/elements.service';
import { pipe, switchMap, debounceTime, distinctUntilChanged } from 'rxjs';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';

export interface ElementsState {
  elements: PeriodicElement[];
  filteredElements: PeriodicElement[];
  isLoading: boolean;
  filterTerm: string;
}

const initialState: ElementsState = {
  elements: [],
  filteredElements: [],
  isLoading: false,
  filterTerm: '',
};

export const ElementsStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  
  
  withComputed(({ elements, filterTerm }) => ({
    filteredElements: computed(() => {
      const term = filterTerm().toLowerCase();
      if (!term) {
        return elements();
      }
      return elements().filter(
        (element) =>
          element.name.toLowerCase().includes(term) ||
          element.symbol.toLowerCase().includes(term) ||
          element.position.toString().includes(term) ||
          element.weight.toString().includes(term)
      );
    }),
  })),


  withMethods((store, elementsService = inject(ElementsService)) => ({
    async loadElements(): Promise<void> {
      patchState(store, { isLoading: true });
      const elements = await elementsService.getElements().toPromise();
      patchState(store, { elements: elements || [], isLoading: false });
      patchState(store, { filteredElements: elements || [] });
    },
    
    updateElement(updatedElement: PeriodicElement): void {
      patchState(store, (state) => ({
        elements: state.elements.map((element) =>
          element.position === updatedElement.position
            ? updatedElement
            : element
        ),
      }));
      this.setFilterTerm(store.filterTerm());
    },

    setFilterTerm(term: string): void {
      patchState(store, { filterTerm: term });
    },
  }))
);
