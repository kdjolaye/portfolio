import { Component } from '@angular/core';
@Component({ selector: 'app-skills', imports: [], templateUrl: './skills.html', styleUrl: './skills.css' })
export class Skills {
 groups = [
  { title: 'Développement', items: ['Java, Spring Boot et microservices', 'APIs REST, Angular et TypeScript', 'C# / ASP.NET', 'Docker, Kafka, Keycloak / OAuth2', 'Swagger / OpenAPI, Git'] },
  { title: 'Automatisation & outils métier', items: ['Excel avancé et Excel VBA', 'Automatisation de tâches répétitives', 'Outils de gestion et tableaux de bord', 'Suivi de stock, ventes, commandes et caisse'] },
  { title: 'Formation & support', items: ['Initiation à l’informatique', 'Windows et outils bureautiques', 'Accompagnement des utilisateurs', 'Administration de sessions Pearson VUE / PSI', 'Assistance et résolution d’incidents'] }
 ];
}
