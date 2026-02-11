
export type QuizType = 'rate' | 'type';

export interface RateRange {
  min: number;
  max: number;
  title: string;
  message: string;
}

export interface TypeCategory {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
}

export interface Option {
  id: string;
  text: string;
  // For 'rate', value is a number (can be negative)
  // For 'type', value is a record mapping category IDs to weight (can be negative)
  value: number | Record<string, number>;
}

export interface Question {
  id: string;
  text: string;
  options: Option[];
}

export interface QuizData {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  type: QuizType;
  questions: Question[];
  startingScore?: number; // Baseline for 'rate' quizzes
  // Specific to 'rate'
  rateRanges?: RateRange[];
  // Specific to 'type'
  categories?: TypeCategory[];
}

export interface QuizResult {
  quizId: string;
  type: QuizType;
  timestamp: number;
  // For 'rate' it's the total score
  score?: number;
  // For 'type' it's the winner category ID
  categoryWinner?: string;
  categoryScores?: Record<string, number>;
}
