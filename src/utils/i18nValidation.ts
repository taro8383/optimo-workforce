import { i18n } from 'i18next';

/**
 * Validates i18n translations structure and required keys
 */
export function validateTranslations(i18nInstance: i18n) {
  const requiredNamespaces = [
    'common',
    'integrationsPage',
    'hero',
    'footer',
    // Add other required namespaces
  ];

  requiredNamespaces.forEach(ns => {
    if (!i18nInstance.hasResourceBundle('en', ns) || !i18nInstance.hasResourceBundle('es', ns)) {
      console.error(`Missing namespace: ${ns}`);
    }
  });

  // Integration-specific validation
  validateIntegrationsTranslations(i18nInstance);
}

/**
 * Validate integrations page translations
 */
function validateIntegrationsTranslations(i18nInstance: i18n) {
  const requiredIntegrationKeys = [
    'categories.all',
    'hero.title',
    'integrations.toast.description',
    // Add all other required keys from integrations.json
  ];

  const languages = ['en', 'es'];
  
  languages.forEach(lng => {
    requiredIntegrationKeys.forEach(key => {
      const fullKey = `integrationsPage.${key}`;
      if (!i18nInstance.exists(fullKey, { lng })) {
        console.warn(`[i18n] Missing translation (${lng}): ${fullKey}`);
        
        // Set fallback from other language if available
        const fallbackLng = lng === 'en' ? 'es' : 'en';
        const fallbackValue = i18nInstance.t(fullKey, { lng: fallbackLng });
        if (fallbackValue) {
          i18nInstance.addResource(lng, 'integrationsPage', key, fallbackValue);
          console.info(`[i18n] Added fallback for ${fullKey} from ${fallbackLng}`);
        }
      }
    });
  });
}

/**
 * Fallback handler for missing translations
 */
export function createFallbackHandler(i18nInstance: i18n) {
  return (lngs: string[], ns: string, key: string) => {
    const fallbackLng = lngs[0] === 'en' ? 'es' : 'en';
    const fallbackValue = i18nInstance.t(key, { lng: fallbackLng, ns });
    
    if (fallbackValue) {
      console.warn(`[i18n] Using fallback (${fallbackLng}) for: ${ns}:${key}`);
      return fallbackValue;
    }
    
    console.error(`[i18n] Missing translation for: ${ns}:${key}`);
    return `TRANSLATION_MISSING:${key}`;
  };
}
