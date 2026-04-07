import { Component, signal } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { Data } from '../../services/data';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  searchQuery = signal<string>('');

  constructor(private data: Data, private router: Router) {}

  onSearch(event: Event, query: string) {
    event.preventDefault();
    const q = query.toLowerCase();
    const services = this.data.services();
    const found = services.find(s => s.title.toLowerCase().includes(q) || s.id.toLowerCase().includes(q));

    if (found) {
      this.router.navigate(['/service', found.id]);
    } else {
      alert('Service not found.');
    }
  }

  closeNavbar() {
    const navbarCollapse = document.getElementById('navbarMain');
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
      navbarCollapse.classList.remove('show');
    }
  }
}
