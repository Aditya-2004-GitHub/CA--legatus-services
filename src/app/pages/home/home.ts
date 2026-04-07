import { Component, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { Router } from '@angular/router';
import { Data } from '../../services/data';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements AfterViewInit {
  @ViewChildren('counter') counters!: QueryList<ElementRef>;

  constructor(private router: Router, private data: Data) {}

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

  toggleFaq(event: Event) {
    const btn = event.currentTarget as HTMLElement;
    const item = btn.parentElement;
    if (item) {
        const isOpen = item.classList.contains('open');
        document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
        if (!isOpen) item.classList.add('open');
    }
  }

  ngAfterViewInit() {
    // Reveal animation
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(r => observer.observe(r));

    // Stats counter animation
    const counterObserver = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                this.animateCounter(e.target as HTMLElement);
                counterObserver.unobserve(e.target);
            }
        });
    }, { threshold: 0.5 });
    
    document.querySelectorAll('.counter').forEach(c => counterObserver.observe(c));
  }

  private animateCounter(el: HTMLElement) {
    const target = parseFloat(el.getAttribute('data-target') || '0');
    const isDecimal = el.getAttribute('data-decimal') === 'true';
    const duration = 2000;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const val = target * eased;
      el.textContent = isDecimal ? val.toFixed(1) : Math.floor(val).toString();
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = isDecimal ? target.toFixed(1) : target.toString();
    };
    requestAnimationFrame(step);
  }
}
