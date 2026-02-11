
import { QuizData } from '../../types';

export const politicsQuizzes: QuizData[] = [
  {
    id: 'political-compass-v1',
    title: 'Where are you on the Political Compass?',
    description: 'A multi-axis mapping of your political identity. (Archetype mapping)',
    thumbnail: 'https://images.unsplash.com/photo-1541872703-74c5e443d1fe?auto=format&fit=crop&q=80&w=400',
    type: 'type',
    categories: [
      { id: 'auth-right', title: 'Authoritarian Right', description: 'Strong state, traditional values, and capitalist economics.' },
      { id: 'auth-left', title: 'Authoritarian Left', description: 'Strong state, social equality, and planned economics.' },
      { id: 'lib-right', title: 'Libertarian Right', description: 'Individual liberty, free markets, and minimal government.' },
      { id: 'lib-left', title: 'Libertarian Left', description: 'Individual liberty, social equality, and decentralized power.' }
    ],
    questions: [
      { id: 'p1', text: 'The economy should be managed by the state for the good of all.', options: [
        { id: 'pa1', text: 'Strongly Agree.', value: { 'auth-left': 15, 'lib-left': 5 } },
        { id: 'pa2', text: 'Agree in principle, but market-driven.', value: { 'lib-left': 10, 'auth-left': 5 } },
        { id: 'pa3', text: 'Disagree; only essential services.', value: { 'auth-right': 10, 'lib-right': 5 } },
        { id: 'pa4', text: 'Strongly Disagree; full privatization.', value: { 'lib-right': 15, 'auth-right': 5 } }
      ]},
      { id: 'p2', text: 'Tradition is more important than progress.', options: [
        { id: 'pb1', text: 'Strongly Agree.', value: { 'auth-right': 15 } },
        { id: 'pb2', text: 'Agree; it provides stability.', value: { 'auth-right': 5, 'auth-left': 2 } },
        { id: 'pb3', text: 'Disagree; we must evolve.', value: { 'lib-left': 10, 'auth-left': 5 } },
        { id: 'pb4', text: 'Strongly Disagree; tradition is a cage.', value: { 'lib-left': 15 } }
      ]},
      { id: 'p3', text: 'Taxation is theft.', options: [
        { id: 'pc1', text: 'Strongly Agree.', value: { 'lib-right': 20 } },
        { id: 'pc2', text: 'Agree, but necessary for defense.', value: { 'lib-right': 10, 'auth-right': 5 } },
        { id: 'pc3', text: 'Disagree; it is the price of society.', value: { 'auth-left': 10, 'lib-left': 10 } },
        { id: 'pc4', text: 'Strongly Disagree; we need more tax.', value: { 'auth-left': 15 } }
      ]},
      { id: 'p4', text: 'We need a strong leader to fix our problems.', options: [
        { id: 'pd1', text: 'Strongly Agree.', value: { 'auth-right': 15, 'auth-left': 15 } },
        { id: 'pd2', text: 'Agree, but with checks and balances.', value: { 'auth-right': 5, 'auth-left': 5 } },
        { id: 'pd3', text: 'Disagree; power should be decentralized.', value: { 'lib-left': 15, 'lib-right': 15 } }
      ]},
      { id: 'p5', text: 'Universal healthcare is a basic human right.', options: [
        { id: 'pe1', text: 'Strongly Agree.', value: { 'auth-left': 15, 'lib-left': 15 } },
        { id: 'pe2', text: 'Agree, but should include private options.', value: { 'lib-left': 5, 'auth-right': 5 } },
        { id: 'pe3', text: 'Disagree; it is a service to be bought.', value: { 'lib-right': 15, 'auth-right': 10 } }
      ]},
      { id: 'p6', text: 'The death penalty should exist for serious crimes.', options: [
        { id: 'pf1', text: 'Strongly Agree.', value: { 'auth-right': 15, 'auth-left': 5 } },
        { id: 'pf2', text: 'Agree in extreme cases only.', value: { 'auth-right': 5 } },
        { id: 'pf3', text: 'Disagree; it is inhumane.', value: { 'lib-left': 15, 'lib-right': 5 } }
      ]},
      { id: 'p7', text: 'Free speech includes the right to "hate speech".', options: [
        { id: 'pg1', text: 'Strongly Agree.', value: { 'lib-right': 15, 'lib-left': 5 } },
        { id: 'pg2', text: 'Agree, but words have consequences.', value: { 'lib-left': 5, 'lib-right': 5 } },
        { id: 'pg3', text: 'Disagree; hate speech is violence.', value: { 'auth-left': 15, 'auth-right': 10 } }
      ]},
      { id: 'p8', text: 'Military spending should be the top priority.', options: [
        { id: 'ph1', text: 'Strongly Agree.', value: { 'auth-right': 15 } },
        { id: 'ph2', text: 'Agree, peace through strength.', value: { 'auth-right': 5 } },
        { id: 'ph3', text: 'Disagree; education/health first.', value: { 'lib-left': 15, 'lib-right': 10 } }
      ]},
      { id: 'p9', text: 'Immigration is generally good for the country.', options: [
        { id: 'pi1', text: 'Strongly Agree.', value: { 'lib-left': 15, 'lib-right': 10 } },
        { id: 'pi2', text: 'Agree, if done legally and controlled.', value: { 'lib-right': 5, 'auth-right': 5 } },
        { id: 'pi3', text: 'Disagree; it dilutes the culture.', value: { 'auth-right': 15, 'auth-left': 5 } }
      ]},
      { id: 'p10', text: 'Corporations have too much power.', options: [
        { id: 'pj1', text: 'Strongly Agree.', value: { 'lib-left': 15, 'auth-left': 15 } },
        { id: 'pj2', text: 'Agree, they need more regulation.', value: { 'auth-left': 5, 'lib-left': 5 } },
        { id: 'pj3', text: 'Disagree; they are the engine of wealth.', value: { 'lib-right': 15 } }
      ]}
    ]
  },
  {
    id: 'tech-beliefs',
    title: 'Technology: Savior or Slayer?',
    description: 'Your fundamental beliefs about human progress and digital dominance. (0: Luddite - 100: Transhumanist)',
    thumbnail: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=400',
    type: 'rate',
    startingScore: 50,
    rateRanges: [
      { min: 0, max: 25, title: 'Neo-Luddite', message: 'You view technology as a cancer. You likely yearn for a return to agrarian simplicity.' },
      { min: 26, max: 50, title: 'Cautious User', message: 'You use tools but fear the loss of human connection and privacy.' },
      { min: 51, max: 75, title: 'Technophile', message: 'You embrace the new. You believe in progress through silicon and code.' },
      { min: 76, max: 100, title: 'Transhumanist', message: 'The biological body is a cage. You support neural links, digital immortality, and total optimization.' }
    ],
    questions: [
      { id: 't1', text: 'Would you put a chip in your brain to increase your IQ?', options: [
        { id: 'ta1', text: 'Sign me up tomorrow.', value: 20 },
        { id: 'ta2', text: 'Maybe, after years of testing.', value: 5 },
        { id: 'ta3', text: 'Only if I lose basic functions.', value: -5 },
        { id: 'ta4', text: 'Never. I value my natural self.', value: -20 }
      ]},
      { id: 't2', text: 'AI will eventually replace human creativity.', options: [
        { id: 'tb1', text: 'Yes, and it will be superior.', value: 15 },
        { id: 'tb2', text: 'Yes, but it will be different.', value: 5 },
        { id: 'tb3', text: 'No, but it will be a tool.', value: -5 },
        { id: 'tb4', text: 'No, art requires a human soul.', value: -15 }
      ]},
      { id: 't3', text: 'Social media is a net negative for humanity.', options: [
        { id: 'tc1', text: 'Strongly Agree.', value: -15 },
        { id: 'tc2', text: 'Slightly Agree.', value: -5 },
        { id: 'tc3', text: 'Slightly Disagree.', value: 5 },
        { id: 'tc4', text: 'Strongly Disagree.', value: 15 }
      ]},
      { id: 't4', text: 'Privacy is a dead concept.', options: [
        { id: 'td1', text: 'Good. I have nothing to hide.', value: 15 },
        { id: 'td2', text: 'Acceptable for convenience.', value: 5 },
        { id: 'td3', text: 'Tragic. We must fight for it.', value: -15 },
        { id: 'td4', text: 'A basic human right we are losing.', value: -20 }
      ]},
      { id: 't5', text: 'Robots should have rights.', options: [
        { id: 'te1', text: 'Yes, if they are sentient.', value: 20 },
        { id: 'te2', text: 'Only to prevent human cruelty.', value: 5 },
        { id: 'te3', text: 'No, they are just toasters.', value: -15 }
      ]}
    ]
  },
  {
    id: 'societal-feelings',
    title: 'How do you feel about Society?',
    description: 'An analysis of your social cohesion vs individual alienation. (0: The Misanthrope - 100: The Communitarian)',
    thumbnail: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&q=80&w=400',
    type: 'rate',
    startingScore: 50,
    rateRanges: [
      { min: 0, max: 25, title: 'Total Misanthrope', message: 'You view "the public" as a mindless, dangerous entity. You find peace only in isolation.' },
      { min: 26, max: 50, title: 'The Outsider', message: 'You participate because you have to, but you never truly feel like "part of the group".' },
      { min: 51, max: 75, title: 'Active Citizen', message: 'You value community and believe we are better together. You contribute regularly.' },
      { min: 76, max: 100, title: 'Social Architect', message: 'You live for the collective. Individualism is a selfish delusion to you.' }
    ],
    questions: [
      { id: 's1', text: 'Most people are generally...', options: [
        { id: 'sa1', text: 'Selfish and untrustworthy.', value: -15 },
        { id: 'sa2', text: 'Stupid and easily led.', value: -10 },
        { id: 'sa3', text: 'Average; a mix of good and bad.', value: 0 },
        { id: 'sa4', text: 'Kind and helpful.', value: 15 }
      ]},
      { id: 's2', text: 'The "Social Contract" is:', options: [
        { id: 'sb1', text: 'A sacred duty.', value: 15 },
        { id: 'sb2', text: 'A necessary inconvenience.', value: 0 },
        { id: 'sb3', text: 'A set of chains.', value: -15 }
      ]},
      { id: 's3', text: 'Do you feel "at home" in your city?', options: [
        { id: 'sc1', text: 'Yes, I belong here.', value: 15 },
        { id: 'sc2', text: 'Sometimes.', value: 0 },
        { id: 'sc3', text: 'No, I\'m an alien here.', value: -15 }
      ]},
      { id: 's4', text: 'Celebrity culture is:', options: [
        { id: 'sd1', text: 'Modern mythology.', value: 5 },
        { id: 'sd2', text: 'Harmless entertainment.', value: 0 },
        { id: 'sd3', text: 'Brain-rot.', value: -15 }
      ]},
      { id: 's5', text: 'I would sacrifice my life for a stranger.', options: [
        { id: 'se1', text: 'Yes, without hesitation.', value: 25 },
        { id: 'se2', text: 'Probably.', value: 10 },
        { id: 'se3', text: 'Only under specific conditions.', value: -5 },
        { id: 'se4', text: 'No, my life is my priority.', value: -20 }
      ]}
    ]
  }
];
