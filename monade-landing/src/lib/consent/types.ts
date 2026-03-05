export type ConsentCategory = 'necessary' | 'functional' | 'analytics' | 'marketing';

export type ConsentPreferences = {
  necessary: true;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
  updatedAt: string;
};
