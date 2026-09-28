import { Component, signal } from '@angular/core';
import { CustomerGroup } from '../classes/customer';
import { CustomerHttpService } from '../service/customer-http-service';

@Component({
  selector: 'app-ex18-customer-group',
  standalone: false,
  templateUrl: './ex18-customer-group.html',
  styleUrl: './ex18-customer-group.css',
})
export class Ex18CustomerGroup {
  customerGroups = signal<CustomerGroup[]>([]);
  constructor(private customerService: CustomerHttpService) {}

  ngOnInit(): void {
    this.customerService.getCustomerGroups().subscribe({
      next: (data) => {
        this.customerGroups.set(data);
      },
      error: (err) => {
        console.error('Not found: ', err);
      }
    });
  }
}
