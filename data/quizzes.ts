
import { moralityQuizzes } from './quizzes/morality';
import { identityQuizzes } from './quizzes/identity';
import { personalityQuizzes } from './quizzes/personality';
import { philosophyQuizzes } from './quizzes/philosophy';
import { religionQuizzes } from './quizzes/religion';
import { lifestyleQuizzes } from './quizzes/lifestyle';
import { politicsQuizzes } from './quizzes/politics';
import { modernQuizzes } from './quizzes/modern';
import { QuizData } from '../types';

export const QUIZZES: QuizData[] = [
  ...moralityQuizzes,
  ...identityQuizzes,
  ...personalityQuizzes,
  ...philosophyQuizzes,
  ...religionQuizzes,
  ...lifestyleQuizzes,
  ...politicsQuizzes,
  ...modernQuizzes
];
