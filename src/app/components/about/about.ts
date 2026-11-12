import { Component } from '@angular/core';
@Component({ selector: 'app-about', imports: [], templateUrl: './about.html', styleUrl: './about.css' })
export class About {
 infos = [ { label: 'Localisation', value: 'Lomé, Togo' }, { label: 'Formation', value: 'BTS Développement d’Applications, 2023' }, { label: 'Langues', value: 'Français, Anglais, Ewé' }, { label: 'Activités', value: 'Développement · Formation · VBA' } ];
}
