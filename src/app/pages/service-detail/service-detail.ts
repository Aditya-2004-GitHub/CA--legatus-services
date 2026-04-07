import { Component, computed, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Data } from '../../services/data';

@Component({
  selector: 'app-service-detail',
  imports: [],
  templateUrl: './service-detail.html',
  styleUrl: './service-detail.css'
})
export class ServiceDetail {
  private serviceId = signal<string>('');

  public service = computed(() => {
    return this.data.getServiceById(this.serviceId());
  });

  constructor(private route: ActivatedRoute, private data: Data) {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.serviceId.set(params['id']);
      }
    });
  }
}
