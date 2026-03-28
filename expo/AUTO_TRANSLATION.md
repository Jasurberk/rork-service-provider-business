# Automatic Translation System

This app now includes automatic translation for user-generated content (services, portfolio items, clients, and business profile).

## How It Works

### 1. **Type System**
All translatable fields now support both simple strings and translation objects:

```typescript
type TranslatedText = {
  en?: string;
  ru?: string;
  uz?: string;
  original?: string;  // tracks the original language
};

// Example: Service name can be string or TranslatedText
name: string | TranslatedText;
```

### 2. **Automatic Translation**
When you create or update content, the app automatically:
- Detects the language you're writing in
- Translates the text to English, Russian, and Uzbek
- Stores all translations in the data structure

### 3. **Display Translation**
When viewing content, the app shows the text in your selected language using the `getTranslatedText()` helper function.

## Usage in Stores

All stores (services, portfolio, clients, business) now have translation support:

```typescript
// Adding a new service
await addService({
  id: 'new-service',
  name: 'Haircut',  // Will be automatically translated
  description: 'Professional haircut service',  // Will be translated too
  // ... other fields
});

// The stored data will look like:
{
  id: 'new-service',
  name: {
    en: 'Haircut',
    ru: 'Стрижка',
    uz: 'Soch olish',
    original: 'en'
  },
  description: {
    en: 'Professional haircut service',
    ru: 'Профессиональная услуга стрижки',
    uz: 'Professional soch olish xizmati',
    original: 'en'
  }
}
```

### Disabling Auto-Translation

If you need to add content without translation (e.g., migrating existing data):

```typescript
await addService(serviceData, false);  // false = disable auto-translation
```

## Usage in Components

Components use the `getTranslatedText()` helper:

```typescript
import { getTranslatedText } from '@/lib/translation-utils';
import { useLanguageStore } from '@/hooks/useLanguageStore';

function ServiceCard({ service }) {
  const { language } = useLanguageStore();
  
  return (
    <Text>{getTranslatedText(service.name, language)}</Text>
  );
}
```

The `getTranslatedText()` function:
- Returns the text in the selected language
- Falls back to other languages if not available
- Handles both string and TranslatedText types

## Translation Process

1. **Language Detection**: AI analyzes the text and detects if it's English, Russian, or Uzbek
2. **Translation**: For each target language, the text is translated using AI
3. **Storage**: All translations are stored together with the original language marker
4. **Display**: The appropriate translation is shown based on user's language preference

## Files Modified

- `types/index.ts` - Added TranslatedText type
- `lib/translation-utils.ts` - Translation helper functions
- `hooks/useServicesStore.ts` - Added translation support
- `hooks/usePortfolioStore.ts` - Added translation support
- `hooks/useClientsStore.ts` - Added translation support  
- `hooks/useBusinessStore.ts` - Added translation support
- `components/ServiceCard.tsx` - Display translations
- `components/PortfolioCard.tsx` - Display translations
- `components/ClientCard.tsx` - Display translations
- `app/(tabs)/settings.tsx` - Display profile translations

## Benefits

1. **Seamless Experience**: Users enter text once in any language, everyone sees it in their preferred language
2. **No Manual Work**: Translations happen automatically in the background
3. **Flexible**: Works with existing string data and new translation objects
4. **Fallback Support**: If a translation is missing, falls back gracefully to available languages

## Example Workflow

1. User creates a service in Russian: "Стрижка волос"
2. App detects language: Russian
3. App translates to English and Uzbek
4. Stores: `{ ru: "Стрижка волос", en: "Haircut", uz: "Soch olish", original: "ru" }`
5. English user sees "Haircut", Uzbek user sees "Soch olish", Russian user sees "Стрижка волос"
