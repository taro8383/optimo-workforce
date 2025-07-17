# System Patterns: Optimo Workforce

## Architecture
- Single Page Application (SPA) with multiple views
- Component-based UI architecture
- State-driven page rendering

## Key Technical Decisions
1. **Vite** chosen for fast development builds
2. **TailwindCSS** for utility-first styling
3. **TypeScript** for type safety
4. **React hooks** for state management

## Component Structure
- Layout components (Header with Language Selector, Footer)
- Marketing sections (Hero, Pricing, etc.)
- Industry-specific pages (Restaurants, Hotels, Cafes)
- Utility pages (ROI Calculator, FAQ, Contact, Future Features)

## Design Patterns
- Custom animations (fade-in, slide-up, language selector transitions)
- Responsive grid layouts
- Gradient backgrounds
- Card-based content presentation

## Performance Optimization Patterns
- **Code Splitting**: Route-based lazy loading with React.lazy() and Suspense
- **Bundle Optimization**: Vendor chunking for React, i18n, and UI libraries
- **Image Optimization**: Lazy loading with IntersectionObserver and error handling
- **SEO Enhancement**: Complete meta tags, Open Graph, and structured data
- **PWA Support**: Web App Manifest with installability features
- **Resource Hints**: Preload and preconnect optimizations
- **Error Boundaries**: Graceful image loading failures with fallback placeholders

## Build Configuration Patterns
- **Vite Configuration**: Production-ready optimization with chunk splitting
- **Asset Optimization**: Automatic minification and compression
- **Source Maps**: Development and production source mapping
- **Environment Variables**: Configurable build targets and base URLs
