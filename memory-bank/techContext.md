# Technical Context: Optimo Workforce

## Core Dependencies
- React 18
- React DOM
- TypeScript
- Vite
- TailwindCSS
- Lucide-react (icons)
- React Router DOM (navigation)
- react-i18next (internationalization)
- i18next (translation framework)

## Development Tools
- ESLint (with React/TypeScript plugins)
- Prettier (via Vite)
- PostCSS
- Autoprefixer
- i18next-parser (translation key extraction)

## Configuration Files
- `tailwind.config.js`: Custom colors, fonts, animations
- `postcss.config.js`: PostCSS processing
- `vite.config.js`: Vite/React configuration
- `i18n.ts`: i18next initialization and configuration
- `locales/`: Translation JSON files (en, es)

## Styling Approach
- Tailwind utility classes
- Custom animations (defined in Tailwind config)
- Responsive design with mobile-first approach
- Theming through CSS variables
- Language selector transitions
