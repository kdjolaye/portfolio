import { Component, signal } from '@angular/core';
@Component({ selector: 'app-navbar', imports: [], templateUrl: './navbar.html', styleUrl: './navbar.css' })
export class Navbar {
  menuOpen = signal(false);
  navLinks = [ { label: 'À propos', href: '#about' }, { label: 'Compétences', href: '#skills' }, { label: 'Parcours', href: '#experience' }, { label: 'Projets', href: '#projects' }, { label: 'Formation', href: '#training' } ];
}

