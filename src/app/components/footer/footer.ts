import { Component } from '@angular/core';
@Component({ selector: 'app-footer', imports: [], templateUrl: './footer.html', styleUrl: './footer.css' })
export class Footer { currentYear = new Date().getFullYear(); links = [ { label: 'Projets', href: '#projects' }, { label: 'Formation', href: '#training' }, { label: 'Contact', href: '#contact' } ]; }

