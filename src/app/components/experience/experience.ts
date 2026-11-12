import { Component } from '@angular/core';
@Component({ selector: 'app-experience', imports: [], templateUrl: './experience.html', styleUrl: './experience.css' })
export class Experience {
  experiences = [
    { role: 'Développeur d’outils Excel VBA', company: 'Projets pour particuliers et professionnels', period: 'Depuis juin 2026', current: true, summary: 'Conception de plus de cinq outils automatisés pour faciliter la gestion quotidienne et réduire les tâches répétitives.', tags: ['Excel avancé', 'VBA', 'Gestion', 'Automatisation'] },
    { role: 'Formateur en initiation à l’informatique', company: 'Activité professionnelle', period: 'Activité actuelle', current: true, summary: 'Formation en informatique générale, Windows, bureautique, Excel et bonnes pratiques numériques.', tags: ['Initiation', 'Windows', 'Bureautique', 'Excel'] },
    { role: 'Administrateur de Centre d’Examen', company: 'KORINTEK SARL', period: 'Avril 2024 – Présent · Temps plein', current: true, summary: 'Administration d’un centre d’examen Pearson VUE SELECT / PSI, gestion des sessions et assistance technique aux candidats.', tags: ['Pearson VUE SELECT', 'PSI', 'ATLAS Cloud', 'PVTC', 'Support technique'] },
    { role: 'Développeur Full Stack', company: 'Projet NextSend', period: 'Avril – juin 2026', current: false, summary: 'Outil qui transforme un formulaire de contact en PDF professionnel et l’envoie automatiquement par email.', tags: ['PDF', 'Resend', 'Email', 'Traitement serveur'] },
    { role: 'Développeur Full Stack Freelance', company: 'Projet ArchiCore', period: 'Janvier – avril 2026', current: false, summary: 'Application web de gestion d’audit et d’archivage, développée pour centraliser les dossiers clients, missions, équipes et documents avec un accès sécurisé par rôles.', tags: ['Spring Boot 4', 'Angular 21', 'API REST', 'JWT'] },
    { role: 'Développeur Backend – Microservices', company: 'AEK GROUPE', period: 'Mai – décembre 2025 · Télétravail', current: false, summary: 'Conception d’une architecture microservices et intégration de la sécurité, du paiement et du suivi distribué.', tags: ['Java', 'Spring Boot', 'Docker', 'Eureka', 'Kafka Streams', 'Keycloak', 'CinetPay', 'Swagger', 'Zipkin'] },
    { role: 'Stagiaire Développeur Full Stack', company: 'MOOV AFRICA TOGO', period: 'Janvier – avril 2024 · Temps plein', current: false, summary: 'Développement d’une application RH (congés, permissions et absences) sous ASP.NET / C#, et digitalisation des circuits de validation.', tags: ['C#', 'ASP.NET', 'SQL Server'] },
  ];  education = [ { degree: 'BTS en Développement d’Applications', school: 'CIFOP-TOKOIN, Lomé', year: '2023' } ];
}

