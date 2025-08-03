import { CommonModule } from '@angular/common';
import {
  Component,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  searchText: string = '';
  @ViewChild('searchInputEl') searchInputEl: ElementRef;

  @Output() searchValue = new EventEmitter();

  setSearchText() {
    console.log('BtnClicked')
    this.searchText = this.searchInputEl.nativeElement.value;
    this.searchValue.emit(this.searchText);
  }
  EnterKeyClick(event){
    if (event.key === 'Enter') {
      event.preventDefault();
      this.setSearchText()
    }
  }
}
