# Lexical Editor Stack

## Vue d'ensemble

Lexical Editor Stack est une solution complète pour créer un éditeur de texte riche basé sur Lexical, le framework d'édition de Facebook. Ce projet combine la puissance de Lexical avec Next.js, offrant une base solide pour des applications d'édition de texte évolutives et performantes.

## Caractéristiques

- **Lexical Editor** : Intégration du framework d'édition de Facebook pour une expérience d'édition riche et personnalisable
- **Frontend Next.js** : Utilise l'App Router pour un routage optimisé et des performances accrues
- **TypeScript** : Typage statique pour un code plus sûr et maintenable
- **Tailwind CSS** : Utilitaire CSS pour un design rapide et réactif de l'interface de l'éditeur
- **Plugins Lexical** : Intégration de plugins populaires tels que @lexical/rich-text, @lexical/list, @lexical/table, etc.
- **Personnalisation** : Outils pour personnaliser l'apparence et le comportement de l'éditeur
- **Collaboration en temps réel** : Option pour intégrer des fonctionnalités d'édition collaborative
- **Exportation/Importation** : Fonctionnalités pour exporter et importer le contenu de l'éditeur dans différents formats
- **Tests** : Vitest et Playwright pour des tests complets de l'éditeur
- **Storybook** : Documentation des composants de l'éditeur et développement isolé
- **State Management** : Zustand pour une gestion d'état simple et efficace de l'éditeur
- **Animations** : Framer Motion pour des animations fluides dans l'interface de l'éditeur

## Prérequis

- Node.js (version 18 ou supérieure)
- npm ou yarn
- Git

## Installation

1. Clonez le repository :
   ```
   git clone https://github.com/NextStacksForge/lexical-editor.git
   cd lexical-editor
   ```

2. Installez les dépendances :
   ```
   npm install
   ```
   ou
   ```
   yarn install
   ```

3. Configurez les variables d'environnement :
   Copiez le fichier `.env.example` en `.env` et remplissez les variables nécessaires.

4. Lancez le projet en mode développement :
   ```
   npm run dev
   ```
   ou
   ```
   yarn dev
   ```

## Scripts disponibles

- `npm run dev` : Lance le projet en mode développement
- `npm run build` : Compile le projet pour la production
- `npm run start` : Démarre le projet en mode production
- `npm run test` : Exécute les tests de l'éditeur
- `npm run storybook` : Lance Storybook pour le développement des composants de l'éditeur

## Personnalisation de l'éditeur

Notre stack offre plusieurs options pour personnaliser l'éditeur Lexical :

1. Thèmes : Modifiez le fichier `src/themes/EditorTheme.ts` pour ajuster l'apparence de l'éditeur.
2. Plugins : Ajoutez ou modifiez les plugins dans `src/plugins/` pour étendre les fonctionnalités de l'éditeur.
3. Nodes personnalisés : Créez des nodes personnalisés dans `src/nodes/` pour ajouter de nouveaux types de contenu.

## Contribution

Les contributions sont les bienvenues ! Veuillez consulter notre guide de contribution pour plus de détails.

## Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## Support

Si vous rencontrez des problèmes ou avez des questions sur l'utilisation ou la personnalisation de l'éditeur Lexical, n'hésitez pas à ouvrir une issue sur GitHub.

---

Développé avec ❤️ par l'équipe NextStacksForge