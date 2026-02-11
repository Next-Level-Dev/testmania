
import { QuizData } from '../../types';

export const lifestyleQuizzes: QuizData[] = [
  {
    id: 'reader-level',
    title: 'How much of a Reader are you?',
    description: 'Measures your relationship with the written word. (0: Non-Reader - 100: Bookworm)',
    thumbnail: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&q=80&w=400',
    type: 'rate',
    startingScore: 50,
    rateRanges: [
      { min: 0, max: 25, title: 'Visual Learner', message: 'Books are basically paperweights to you. You prefer your stories moving and at 60fps.' },
      { min: 26, max: 50, title: 'Casual Browser', message: 'You read the occasional bestseller or news article, but the library isn\'t your home.' },
      { min: 51, max: 75, title: 'Literary Enthusiast', message: 'You have a "To-Read" pile that is taller than you. You actually finish books.' },
      { min: 76, max: 100, title: 'Infinite Librarian', message: 'You live in stories. You smell paper for fun. You are more book than human.' }
    ],
    questions: [
      { id: 'q1', text: 'Last time you finished a book:', options: [
        { id: 'a1', text: 'Last night.', value: 15 },
        { id: 'a2', text: 'Last month.', value: 5 },
        { id: 'a3', text: 'Last year.', value: -10 },
        { id: 'a4', text: 'Middle school (forced).', value: -20 }
      ]},
      { id: 'q2', text: 'Kindle vs Physical Paper:', options: [
        { id: 'b1', text: 'Paper always. The smell is half the experience.', value: 10 },
        { id: 'b2', text: 'Kindle. Efficiency.', value: 5 },
        { id: 'b3', text: 'I prefer audiobooks.', value: 2 },
        { id: 'b4', text: 'I don\'t use either.', value: -10 }
      ]},
      { id: 'q3', text: 'The movie was better than the book.', options: [
        { id: 'c1', text: 'Never. Impossible.', value: 15 },
        { id: 'c2', text: 'Sometimes.', value: 0 },
        { id: 'c3', text: 'Always. Why read when you can watch?', value: -15 }
      ]},
      { id: 'q4', text: 'Do you "skim" or read every word?', options: [
        { id: 'd1', text: 'Every. Single. Word.', value: 10 },
        { id: 'd2', text: 'I look for the highlights.', value: -5 }
      ]},
      { id: 'q5', text: 'A long Wikipedia article on a niche topic:', options: [
        { id: 'e1', text: 'A rabbit hole I love.', value: 10 },
        { id: 'e2', text: 'Too much text. I\'ll wait for the YouTube summary.', value: -10 }
      ]},
      { id: 'q6', text: 'You see a typo in a menu. You:', options: [
        { id: 'f1', text: 'Internal scream.', value: 10 },
        { id: 'f2', text: 'Didn\'t notice.', value: -5 }
      ]},
      { id: 'q7', text: 'Classic Literature (Dostoevsky, etc.) is:', options: [
        { id: 'g1', text: 'Essential food for the soul.', value: 15 },
        { id: 'g2', text: 'Boring and outdated.', value: -15 }
      ]},
      { id: 'q8', text: 'How many books do you own?', options: [
        { id: 'h1', text: '100+.', value: 15 },
        { id: 'h2', text: '1-10.', value: -5 },
        { id: 'h3', text: 'None.', value: -15 }
      ]},
      { id: 'q9', text: 'Fanfiction counts as reading.', options: [
        { id: 'i1', text: 'Yes, absolutely.', value: 10 },
        { id: 'i2', text: 'No, that\'s just scrolling.', value: 2 }
      ]},
      { id: 'j10', text: 'Total reading time per day:', options: [
        { id: 'j1', text: '3+ hours.', value: 20 },
        { id: 'j2', text: '30 mins.', value: 5 },
        { id: 'j3', text: 'Zero.', value: -15 }
      ]}
    ]
  },
  {
    id: 'gamer-level',
    title: 'How much of a Gamer are you?',
    description: 'Measures your technical skill and obsession with virtual worlds. (0: Noob - 100: Pro)',
    thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=400',
    type: 'rate',
    startingScore: 50,
    rateRanges: [
      { min: 0, max: 25, title: 'Casual App-User', message: 'You probably have Candy Crush on your phone and that\'s about it. You touch grass regularly.' },
      { min: 26, max: 50, title: 'Mainstream Gamer', message: 'You play the big hits (FIFA, CoD, Sims) but you don\'t know what a "frame-data" is.' },
      { min: 51, max: 75, title: 'Dedicated Enthusiast', message: 'Steam is your most used app. You own a headset and probably a second monitor.' },
      { min: 76, max: 100, title: 'The Digital Ascendant', message: 'You don\'t play games, you live them. You have opinions on GPU architecture and 0.1% lows.' }
    ],
    questions: [
      { id: 'q1', text: 'Current platform of choice:', options: [
        { id: 'a1', text: 'PC Master Race.', value: 15 },
        { id: 'a2', text: 'Console (PS5/Xbox).', value: 8 },
        { id: 'a3', text: 'Nintendo Switch.', value: 2 },
        { id: 'a4', text: 'Mobile phone.', value: -15 }
      ]},
      { id: 'q2', text: 'Reaction to a "Hard" game (Dark Souls):', options: [
        { id: 'b1', text: 'I love the challenge. Git gud.', value: 15 },
        { id: 'b2', text: 'I want an Easy Mode.', value: -10 }
      ]},
      { id: 'q3', text: 'RGB lighting in a setup:', options: [
        { id: 'c1', text: 'Essential for performance.', value: 10 },
        { id: 'c2', text: 'Distracting / Waste of money.', value: -5 }
      ]},
      { id: 'q4', text: 'How much did your setup cost?', options: [
        { id: 'd1', text: '$2000+.', value: 15 },
        { id: 'd2', text: 'It\'s just a laptop / base console.', value: 0 },
        { id: 'd3', text: 'What setup?', value: -15 }
      ]},
      { id: 'q5', text: 'Esports is a real sport.', options: [
        { id: 'e1', text: 'Agree.', value: 10 },
        { id: 'e2', text: 'Disagree.', value: -10 }
      ]},
      { id: 'q6', text: 'Most played genre:', options: [
        { id: 'f1', text: 'Competitive FPS / MOBA.', value: 15 },
        { id: 'f2', text: 'Deep RPG.', value: 10 },
        { id: 'f3', text: 'Cozy / Simulation.', value: 0 },
        { id: 'f4', text: 'Puzzle / Mobile.', value: -10 }
      ]},
      { id: 'q7', text: 'Your mouse has:', options: [
        { id: 'g1', text: 'Adjustable weights and high DPI.', value: 10 },
        { id: 'g2', text: 'A scroll wheel and 2 buttons.', value: -5 }
      ]},
      { id: 'q8', text: 'Hours per week gaming:', options: [
        { id: 'h1', text: '40+ (A full time job).', value: 25 },
        { id: 'h2', text: '10-20.', value: 10 },
        { id: 'h3', text: 'Under 2.', value: -15 }
      ]},
      { id: 'q9', text: 'Microtransactions are:', options: [
        { id: 'i1', text: 'Cancer of the industry.', value: 10 },
        { id: 'i2', text: 'I buy them often.', value: -5 }
      ]},
      { id: 'q10', text: 'Do you know who Hideo Kojima is?', options: [
        { id: 'j1', text: 'Yes, a genius.', value: 15 },
        { id: 'j2', text: 'No / Heard the name.', value: -10 }
      ]}
    ]
  },
  {
    id: 'hero-villain',
    title: 'Hero vs Villain',
    description: 'Deep down, which archetype rules your choices? (0: Evil Overlord - 100: Pure Hero)',
    thumbnail: 'https://images.unsplash.com/photo-1531259683007-016a7b628fc3?auto=format&fit=crop&q=80&w=400',
    type: 'rate',
    startingScore: 50,
    rateRanges: [
      { min: 0, max: 25, title: 'True Antagonist', message: 'Empathy is a weakness. You would burn the world to be the king of the ashes.' },
      { min: 26, max: 50, title: 'Pragmatic Anti-Hero', message: 'You do what needs to be done. You aren\'t "evil", you just aren\'t delusional about "goodness".' },
      { min: 51, max: 75, title: 'Standard Protagonist', message: 'You try to do the right thing, mostly. You value justice but you aren\'t a saint.' },
      { min: 76, max: 100, title: 'The Paragons', message: 'Self-sacrifice is your default mode. You are the light in the darkness.' }
    ],
    questions: [
      { id: 'q1', text: 'You find a bag of money that belongs to a corrupt billionaire. You:', options: [
        { id: 'a1', text: 'Keep it. They won\'t miss it.', value: -15 },
        { id: 'a2', text: 'Donate it anonymously to orphans.', value: 15 },
        { id: 'a3', text: 'Return it to the billionaire for a reward.', value: -5 }
      ]},
      { id: 'q2', text: 'Revenge is:', options: [
        { id: 'b1', text: 'A dish best served cold.', value: -20 },
        { id: 'b2', text: 'A poison that hurts the user.', value: 15 }
      ]},
      { id: 'q3', text: 'Can the "ends" justify "evil" means?', options: [
        { id: 'c1', text: 'Yes. Victory is all that matters.', value: -15 },
        { id: 'c2', text: 'No. The means define the man.', value: 15 }
      ]},
      { id: 'q4', text: 'Your reaction to a crying stranger:', options: [
        { id: 'd1', text: 'Ignore them. Waste of time.', value: -10 },
        { id: 'd2', text: 'Ask if they need help.', value: 10 }
      ]},
      { id: 'q5', text: 'A "Sacrifice for the greater good" should be:', options: [
        { id: 'e1', text: 'Me.', value: 20 },
        { id: 'e2', text: 'Someone else.', value: -20 }
      ]},
      { id: 'q6', text: 'Power is:', options: [
        { id: 'f1', text: 'A tool to help others.', value: 15 },
        { id: 'f2', text: 'A way to ensure my safety.', value: -5 },
        { id: 'f3', text: 'An end in itself.', value: -15 }
      ]},
      { id: 'q7', text: 'Lying is:', options: [
        { id: 'g1', text: 'A useful weapon.', value: -10 },
        { id: 'g2', text: 'A moral failure.', value: 10 }
      ]},
      { id: 'q8', text: 'If you had a death note, would you use it?', options: [
        { id: 'h1', text: 'Yes, to fix the world.', value: -5 },
        { id: 'h2', text: 'Yes, for personal gain.', value: -25 },
        { id: 'h3', text: 'No, it\'s too much power.', value: 15 }
      ]},
      { id: 'q9', text: 'Loyalty is:', options: [
        { id: 'i1', text: 'Everything.', value: 10 },
        { id: 'i2', text: 'Only until it\'s inconvenient.', value: -20 }
      ]},
      { id: 'q10', text: 'Do you want people to fear you or love you?', options: [
        { id: 'j1', text: 'Fear me.', value: -15 },
        { id: 'j2', text: 'Love me.', value: 15 }
      ]}
    ]
  },
  {
    id: 'superpower',
    title: 'What would be your Superpower?',
    description: 'The power you desire reveals your deepest lack. (Type mapping)',
    thumbnail: 'https://images.unsplash.com/photo-1534802046520-4f27db7f3ae5?auto=format&fit=crop&q=80&w=400',
    type: 'type',
    categories: [
      { id: 'control', title: 'Telekinesis / Control', description: 'You want to manipulate the physical world without touching it. You value agency.' },
      { id: 'intel', title: 'Omniscience / Knowledge', description: 'You want to know everything. Curiosity and truth are your drivers.' },
      { id: 'escape', title: 'Teleportation / Flight', description: 'You want to be anywhere else. You value freedom and hate boundaries.' },
      { id: 'time', title: 'Time Manipulation', description: 'You want to fix mistakes or see the outcome. You value regret-prevention.' }
    ],
    questions: [
      { id: 's1', text: 'Your biggest fear:', options: [
        { id: 'sa', text: 'Being powerless.', value: { control: 15 } },
        { id: 'sb', text: 'Being ignorant.', value: { intel: 15 } },
        { id: 'sc', text: 'Being trapped.', value: { escape: 15 } },
        { id: 'sd', text: 'Wasting time.', value: { time: 15 } }
      ]},
      { id: 's2', text: 'If you could change one thing:', options: [
        { id: 'se', text: 'The way people act.', value: { control: 10 } },
        { id: 'sf', text: 'My past choices.', value: { time: 15 } },
        { id: 'sg', text: 'My current location.', value: { escape: 15 } },
        { id: 'sh', text: 'How much I understand the world.', value: { intel: 15 } }
      ]},
      { id: 's3', text: 'You are most annoyed by:', options: [
        { id: 'si', text: 'Lies.', value: { intel: 10 } },
        { id: 'sj', text: 'Traffic / Slow travel.', value: { escape: 10 } },
        { id: 'sk', text: 'Weakness.', value: { control: 10 } },
        { id: 'sl', text: 'Aging.', value: { time: 10 } }
      ]},
      { id: 's4', text: 'Ideal day:', options: [
        { id: 'sm', text: 'Learning a new secret.', value: { intel: 10 } },
        { id: 'sn', text: 'Traveling to 5 countries.', value: { escape: 15 } },
        { id: 'so', text: 'Winning a major battle.', value: { control: 10 } },
        { id: 'sp', text: 'Reliving my favorite day forever.', value: { time: 15 } }
      ]},
      { id: 's5', text: 'Your "Aesthetic":', options: [
        { id: 'sq', text: 'Crystals and magic.', value: { control: 5 } },
        { id: 'sr', text: 'Libraries and dusty scrolls.', value: { intel: 10 } },
        { id: 'ss', text: 'Cliffs and clouds.', value: { escape: 10 } },
        { id: 'st', text: 'Clocks and gears.', value: { time: 10 } }
      ]},
      { id: 's6', text: 'The problem with humanity is:', options: [
        { id: 'su', text: 'They are stupid.', value: { intel: 10 } },
        { id: 'sv', text: 'They are chaotic.', value: { control: 10 } }
      ]},
      { id: 's7', text: 'Death is:', options: [
        { id: 'sw', text: 'A limit to be broken.', value: { time: 15 } },
        { id: 'sx', text: 'The ultimate mystery to solve.', value: { intel: 15 } }
      ]},
      { id: 's8', text: 'A secret is:', options: [
        { id: 'sy', text: 'Power.', value: { control: 10 } },
        { id: 'sz', text: 'A burden.', value: { escape: 5 } }
      ]},
      { id: 's9', text: 'Would you use your power for evil?', options: [
        { id: 'ta', text: 'Yes, to rule.', value: { control: 15 } },
        { id: 'tb', text: 'Yes, to steal.', value: { escape: 10 } }
      ]},
      { id: 's10', text: 'Superpower origin story:', options: [
        { id: 'tc', text: 'Born with it.', value: { control: 5, time: 5 } },
        { id: 'td', text: 'Studied for it.', value: { intel: 15 } }
      ]}
    ]
  }
];
