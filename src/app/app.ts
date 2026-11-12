import { AfterViewInit, Component, OnDestroy, signal } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Skills } from './components/skills/skills';
import { Training } from './components/training/training';
import { Experience } from './components/experience/experience';
import { Projets } from './components/projets/projets';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';
@Component({ selector: 'app-root', imports: [Navbar, Hero, About, Skills, Training, Experience, Projets, Contact, Footer], templateUrl: './app.html', styleUrl: './app.css' })
export class App implements AfterViewInit, OnDestroy {
  protected readonly title = signal('portfolio-laye');
  private revealObserver?: IntersectionObserver;
  ngAfterViewInit(): void {
    const items = document.querySelectorAll<HTMLElement>('.reveal');
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      items.forEach((item) => item.classList.add('is-visible'));
      return;
    }
    this.revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    items.forEach((item) => this.revealObserver?.observe(item));
  }
  ngOnDestroy(): void { this.revealObserver?.disconnect(); }
}
