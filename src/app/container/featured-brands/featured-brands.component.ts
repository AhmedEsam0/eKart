import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'featured-brands',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './featured-brands.component.html',
  styleUrl: './featured-brands.component.css',
})
export class FeaturedBrandsComponent {
  @Input() brandName: any = '';
  
}
