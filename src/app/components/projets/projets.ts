import { Component } from '@angular/core';
@Component({ selector: 'app-projets', imports: [], templateUrl: './projets.html', styleUrl: './projets.css' })
export class Projets {
 projects = [
  { name: 'Automatisations Excel VBA', type: 'Outils métier · Depuis juin 2026', problem: 'Réduire les saisies répétitives et faciliter le suivi des opérations quotidiennes.', solution: 'Plus de cinq outils Excel automatisés réalisés pour des besoins de particuliers et de professionnels.', tags: ['Excel avancé', 'VBA', 'Automatisation'], areas: ['Stocks', 'Ventes et achats', 'Caisse et commandes', 'Tableaux de bord', 'Livraison et QR Code', 'Pharmacie et clinique', 'Opérations financières'], github: '' },
  { name: 'NextSend', type: 'Application web · Avril – juin 2026', problem: 'Préparer et envoyer des réponses professionnelles aux demandes de contact sans créer chaque document manuellement.', solution: 'Un formulaire produit un PDF professionnel à partir des informations saisies, puis l’envoie automatiquement par email via Resend.', tags: ['PDF', 'Resend', 'Email', 'Traitement serveur'], areas: [], github: 'https://github.com/kdjolaye/NextSend' },
  { name: 'ArchiCore', type: 'Application web · Janvier – avril 2026', problem: 'Gérer les dossiers clients, missions d’audit, équipes et documents dans un même espace, avec des accès adaptés aux rôles.', solution: 'Application de gestion d’audit et d’archivage avec API REST, authentification JWT et contrôle d’accès par rôles.', tags: ['Spring Boot 4', 'Angular 21', 'API REST', 'JWT'], areas: [], github: 'https://github.com/kdjolaye/Archicore' },
  { name: 'Applications de gestion', type: 'Applications desktop · Projets BTS', problem: 'Suivre des opérations commerciales et administratives dans des outils dédiés.', solution: 'Réalisations de gestion commerciale, suivi scolaire et gestion de blanchisserie.', tags: ['WinDev', 'HyperFileSQL'], areas: [], github: '' },
 ];
}

