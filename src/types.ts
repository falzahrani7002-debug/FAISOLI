export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface FoodItem {
  id: string;
  name: string;
  icon: string;
  isAllergen: boolean;
  category: 'dairy' | 'nuts' | 'grains' | 'seafood' | 'other';
}

export interface Fact {
  id: number;
  title: string;
  content: string;
  icon: string;
}

export interface Symptom {
  id: number;
  name: string;
  description: string;
  icon: string;
  color: string;
}

export interface AllergyDetail {
  id: string;
  name: string;
  icon: string;
  description: string;
  hiddenSources: string[];
  alternatives: string[];
  symptoms: string[];
  isCommon: boolean;
}

export interface JournalEntry {
  id: string;
  foodName: string;
  symptoms: string;
  date: string;
}
