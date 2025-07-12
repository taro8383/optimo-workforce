# Internationalization Best Practices

## Critical Issue: Missing Translation Props

### Problem Identified
Components requiring translations must receive proper props. Missing props can silently fail and hide content, as seen in the HotelsPage implementation.

### Prevention Strategies

1. **Type Safety Enforcement**
```typescript
interface TranslationProps {
  translations: Record<string, any>;
  requiredKeys: string[];
  fallbacks?: Record<string, string>;
}
```

2. **Component Validation**
```typescript
function validateTranslations(props: TranslationProps) {
  props.requiredKeys.forEach(key => {
    if (!props.translations[key]) {
      console.warn(`Missing translation key: ${key}`);
      return props.fallbacks?.[key] || '';
    }
  });
}
```

3. **Required Props Pattern**
```typescript
type WithTranslationsProps = {
  translations: {
    [key: string]: string;
  };
} & ComponentProps;

const MyComponent: React.FC<WithTranslationsProps> = ({ translations }) => {
  // Component implementation
};
```

4. **Fallback Mechanisms**
```typescript
const DEFAULT_TRANSLATIONS = {
  title: 'Default Title',
  subtitle: 'Default Subtitle'
};

function MyComponent({ translations = DEFAULT_TRANSLATIONS }) {
  // Component implementation
}
```

## Implementation Checklist

1. [ ] Define TypeScript interfaces for all translation props
2. [ ] Implement runtime validation for critical translations
3. [ ] Document required translation keys in component props
4. [ ] Set up ESLint rules to verify translation props
5. [ ] Add unit tests for translation fallback behavior

## Testing Guidelines

1. **Missing Translations Test**
```typescript
it('should render fallbacks when translations are missing', () => {
  render(<MyComponent translations={{}} />);
  expect(screen.getByText('Default Title')).toBeInTheDocument();
});
```

2. **Key Validation Test**
```typescript
it('should warn about missing required keys', () => {
  const consoleWarn = jest.spyOn(console, 'warn');
  render(<MyComponent translations={{}} requiredKeys={['title']} />);
  expect(consoleWarn).toHaveBeenCalledWith('Missing translation key: title');
});
```

## Workflow Recommendations

1. Add pre-commit hook to verify:
   - All translation-dependent components have proper prop types
   - Required translation keys are documented
   - Fallback values are specified

2. Implement CI checks for:
   - Missing translation keys in component usage
   - Untested translation fallbacks
   - Prop-type violations

## Example Implementation

```typescript
// Good practice example
interface HotelPageProps {
  translations: {
    title: string;
    subtitle: string;
    sections: Record<string, string>;
  };
  fallbacks?: Partial<HotelPageProps['translations']>;
}

const HotelsPage: React.FC<HotelPageProps> = ({ 
  translations,
  fallbacks = DEFAULT_HOTEL_TRANSLATIONS 
}) => {
  const effectiveTranslations = { ...fallbacks, ...translations };
  
  return (
    <div>
      <h1>{effectiveTranslations.title}</h1>
      <p>{effectiveTranslations.subtitle}</p>
    </div>
  );
};
