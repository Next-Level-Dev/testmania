
import { QuizData } from '../../types';

export const philosophyQuizzes: QuizData[] = [
  {
    id: 'philosopher-id',
    title: 'Which Philosopher Are You?',
    description: 'Matches your reasoning to history\'s greatest minds. (Archetype Mapping)',
    thumbnail: 'https://images.unsplash.com/photo-1543165796-5426273eaab3?auto=format&fit=crop&q=80&w=400',
    type: 'type',
    categories: [
      { id: 'nietzsche', title: 'Friedrich Nietzsche', description: 'The Will to Power. You reject objective morality.' },
      { id: 'kant', title: 'Immanuel Kant', description: 'The Categorical Imperative. Duty is everything.' },
      { id: 'diogenes', title: 'Diogenes of Sinope', description: 'The Cynic. Brutal honesty and rejection of social norms.' },
      { id: 'camus', title: 'Albert Camus', description: 'The Absurdist. Find joy in the meaninglessness.' },
      { id: 'aurelius', title: 'Marcus Aurelius', description: 'The Stoic. Control your reactions, find inner peace.' }
    ],
    questions: [
      { id: 'p1', text: 'You see a law that is clearly illogical. You:', options: [
        { id: 'pa', text: 'Follow it because duty is absolute.', value: { kant: 15 } },
        { id: 'pb', text: 'Break it to show how stupid it is.', value: { diogenes: 15 } },
        { id: 'pc', text: 'Follow it only if it benefits my power.', value: { nietzsche: 10 } },
        { id: 'pd', text: 'I don\'t care. I have inner peace.', value: { aurelius: 15 } }
      ]},
      { id: 'p2', text: 'Art is:', options: [
        { id: 'pe', text: 'Life-affirming energy.', value: { nietzsche: 15 } },
        { id: 'pf', text: 'A moral teacher.', value: { kant: 10 } },
        { id: 'pg', text: 'Distraction from the void.', value: { camus: 15 } }
      ]},
      { id: 'p3', text: 'If someone steals from you:', options: [
        { id: 'ph', text: 'They are logically wrong.', value: { kant: 10 } },
        { id: 'pi', text: 'I should have guarded it better. My fault.', value: { aurelius: 15 } },
        { id: 'pj', text: 'Good for them, property is an illusion.', value: { diogenes: 15 } }
      ]},
      { id: 'p4', text: 'Suffering is:', options: [
        { id: 'pk', text: 'A training ground.', value: { aurelius: 10 } },
        { id: 'pl', text: 'A forge for the Ubermensch.', value: { nietzsche: 15 } },
        { id: 'pm', text: 'The condition for being happy.', value: { camus: 15 } }
      ]},
      { id: 'p5', text: 'Lying is:', options: [
        { id: 'pn', text: 'Always wrong.', value: { kant: 25 } },
        { id: 'po', text: 'Sometimes creative.', value: { nietzsche: 5 } },
        { id: 'pp', text: 'Essential for survival.', value: { diogenes: -5 } }
      ]},
      { id: 'p6', text: 'Is there a meaning to life?', options: [
        { id: 'pq', text: 'Yes, moral duty.', value: { kant: 15 } },
        { id: 'pr', text: 'No, so let\'s imagine we are happy.', value: { camus: 20 } },
        { id: 'ps', text: 'Yes, to become a god.', value: { nietzsche: 15 } }
      ]},
      { id: 'p7', text: 'The best way to live is:', options: [
        { id: 'pt', text: 'In a tub with nothing.', value: { diogenes: 20 } },
        { id: 'pu', text: 'In a palace with a clear mind.', value: { aurelius: 15 } }
      ]},
      { id: 'p8', text: 'Hope is:', options: [
        { id: 'pv', text: 'Dangerous delusion.', value: { nietzsche: 10 } },
        { id: 'pw', text: 'A logical requirement.', value: { kant: 5 } }
      ]},
      { id: 'p9', text: 'You find a wallet. No ID.', options: [
        { id: 'px', text: 'Leave it. Not mine.', value: { kant: 10, aurelius: 10 } },
        { id: 'py', text: 'Take it. Luck is a power.', value: { nietzsche: 10 } }
      ]},
      { id: 'p10', text: 'What is "Good"?', options: [
        { id: 'pz', text: 'Whatever increases power.', value: { nietzsche: 20 } },
        { id: 'pza', text: 'Whatever is universal.', value: { kant: 20 } }
      ]}
    ]
  }
];
