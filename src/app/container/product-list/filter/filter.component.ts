import { Component, EventEmitter, Input, output, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
})
export class FilterComponent {
  @Input() All: number = 0;
  @Input() inStock: any;
  @Input() outOfStock: number = 0;
  selectedRadioBtn:string = 'All';
  @Output() newChangeEvent = new EventEmitter();
  radioChanged() {
    this.newChangeEvent.emit(this.selectedRadioBtn);
  }
}
