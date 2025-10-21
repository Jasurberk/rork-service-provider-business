import { generateText } from "@rork/toolkit-sdk";
import { Language } from "@/hooks/useLanguageStore";
import { TranslatedText } from "@/types";

export async function translateText(text: string, targetLanguages: Language[] = ['en', 'ru', 'uz']): Promise<TranslatedText> {
  try {
    console.log('Translating text:', text);
    
    const detectedLang = await detectLanguage(text);
    console.log('Detected language:', detectedLang);
    
    const translations: TranslatedText = {
      original: detectedLang,
    };

    translations[detectedLang] = text;

    const languagesToTranslate = targetLanguages.filter(lang => lang !== detectedLang);

    for (const lang of languagesToTranslate) {
      const langName = lang === 'en' ? 'English' : lang === 'ru' ? 'Russian' : 'Uzbek';
      const translated = await generateText({
        messages: [
          {
            role: 'user',
            content: `Translate the following text to ${langName}. Only return the translation, nothing else:\n\n${text}`
          }
        ]
      });
      
      translations[lang] = translated.trim();
      console.log(`Translated to ${lang}:`, translated.trim());
    }

    return translations;
  } catch (error) {
    console.error('Translation error:', error);
    return { 
      original: 'en',
      en: text,
      ru: text,
      uz: text
    };
  }
}

async function detectLanguage(text: string): Promise<Language> {
  try {
    const result = await generateText({
      messages: [
        {
          role: 'user',
          content: `Detect the language of this text. Reply with only one word: "en" for English, "ru" for Russian, or "uz" for Uzbek:\n\n${text}`
        }
      ]
    });
    
    const detected = result.trim().toLowerCase();
    if (detected === 'en' || detected === 'ru' || detected === 'uz') {
      return detected as Language;
    }
    return 'en';
  } catch (error) {
    console.error('Language detection error:', error);
    return 'en';
  }
}

export function getTranslatedText(text: string | TranslatedText | undefined, language: Language): string {
  if (!text) return '';
  
  if (typeof text === 'string') {
    return text;
  }
  
  return text[language] || text.en || text.ru || text.uz || text[text.original as Language] || '';
}
