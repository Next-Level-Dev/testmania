
import { QuizData } from '../../types';

export const personalityQuizzes: QuizData[] = [
  {
    id: 'introvert-extrovert',
    title: 'Introvert vs Extrovert',
    description: 'Where do you get your energy? (0: Hermit - 100: Social Butterfly)',
    thumbnail: 'https://images.unsplash.com/photo-1516534775068-ba3e7458af70?auto=format&fit=crop&q=80&w=400',
    type: 'rate',
    startingScore: 50,
    rateRanges: [
      { min: 0, max: 25, title: 'The True Hermit', message: 'Other people are a resource drain you can rarely afford. You thrive in silence and internal thought.' },
      { min: 26, max: 50, title: 'Introspective Lean', message: 'You enjoy people in small doses, but you definitely need significant recharge time alone.' },
      { min: 51, max: 75, title: 'Socially Flexible', message: 'An ambivert who can handle a party but also values their quiet nights in. You are well-balanced.' },
      { min: 76, max: 100, title: 'The Social Engine', message: 'You fuel your soul through interaction. Silence is your enemy; the crowd is your battery.' }
    ],
    questions: [
      { id: 'q1', text: 'Your phone rings. Unknown number. You:', options: [
        { id: 'a1', text: 'Watch it ring with anxiety.', value: -15 },
        { id: 'a2', text: 'Pick up immediately. Who knows who it is?', value: 15 },
        { id: 'a3', text: 'Google the number while it rings.', value: -5 }
      ]},
      { id: 'q2', text: 'Ideal Friday night:', options: [
        { id: 'b1', text: 'Huge party with people I don\'t know.', value: 20 },
        { id: 'b2', text: 'Dinner with 2 close friends.', value: 0 },
        { id: 'b3', text: 'Solo gaming / Reading.', value: -20 }
      ]},
      { id: 'q3', text: 'Public speaking is:', options: [
        { id: 'c1', text: 'A nightmare.', value: -15 },
        { id: 'c2', text: 'A thrilling opportunity.', value: 15 }
      ]},
      { id: 'q4', text: 'Recharge method:', options: [
        { id: 'd1', text: 'Talking it out with someone.', value: 10 },
        { id: 'd2', text: 'Napping / Quiet time.', value: -15 }
      ]},
      { id: 'q5', text: 'Working in a bustling coffee shop:', options: [
        { id: 'e1', text: 'Stimulating and productive.', value: 10 },
        { id: 'e2', text: 'Distracting and annoying.', value: -10 }
      ]},
      { id: 'q6', text: 'You are the first to arrive at a party. You:', options: [
        { id: 'f1', text: 'Hide in the bathroom until more arrive.', value: -15 },
        { id: 'f2', text: 'Help the host and start the music.', value: 15 }
      ]},
      { id: 'q7', text: 'How many friends are too many?', options: [
        { id: 'g1', text: 'Anything over 3.', value: -15 },
        { id: 'g2', text: 'The more the merrier.', value: 15 }
      ]},
      { id: 'q8', text: 'Small talk is:', options: [
        { id: 'h1', text: 'A useful social lubricant.', value: 10 },
        { id: 'h2', text: 'A painful waste of time.', value: -15 }
      ]},
      { id: 'q9', text: 'In a group meeting, you are usually:', options: [
        { id: 'i1', text: 'The one presenting the ideas.', value: 15 },
        { id: 'i2', text: 'The one taking the notes.', value: -10 }
      ]},
      { id: 'q10', text: 'Do you ever feel "lonely" in a crowd?', options: [
        { id: 'j1', text: 'Yes, often.', value: -15 },
        { id: 'j2', text: 'No, never.', value: 15 }
      ]}
    ]
  },
  {
    id: 'logical-emotional',
    title: 'Logical vs Emotional',
    description: 'How do you process the world? (0: The Vulcan - 100: The Empath)',
    thumbnail: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&q=80&w=400',
    type: 'rate',
    startingScore: 50,
    rateRanges: [
      { min: 0, max: 25, title: 'The Pure Logic Core', message: 'You are an analytical machine. Feelings are just chemical data points to be managed.' },
      { min: 26, max: 50, title: 'Rational Pragmatist', message: 'You value logic above all, but acknowledge that human emotion is a variable to account for.' },
      { min: 51, max: 75, title: 'Balanced Soul', message: 'You think with your head but act with your heart when it matters. High EQ.' },
      { min: 76, max: 100, title: 'The Infinite Empath', message: 'You feel the world before you understand it. Compassion is your primary directive.' }
    ],
    questions: [
      { id: 'q1', text: 'A friend is crying. Your first instinct:', options: [
        { id: 'a1', text: 'Give them a hug and cry with them.', value: 20 },
        { id: 'a2', text: 'Try to solve the problem that caused the tears.', value: -15 },
        { id: 'a3', text: 'Ask what they need: a hug or a solution?', value: 5 }
      ]},
      { id: 'q2', text: 'Decision making process:', options: [
        { id: 'b1', text: 'A pro/con list based on data.', value: -15 },
        { id: 'b2', text: 'A "gut feeling" that feels right.', value: 15 }
      ]},
      { id: 'q3', text: 'In an argument:', options: [
        { id: 'c1', text: 'I focus on who is logically right.', value: -10 },
        { id: 'c2', text: 'I focus on how everyone is feeling.', value: 15 }
      ]},
      { id: 'q4', text: 'Movies that make you cry:', options: [
        { id: 'd1', text: 'Almost every single one.', value: 15 },
        { id: 'd2', text: 'Very rarely, if ever.', value: -15 }
      ]},
      { id: 'q5', text: 'Rules are:', options: [
        { id: 'e1', text: 'Absolute logical boundaries.', value: -10 },
        { id: 'e2', text: 'Guidelines that should bend for people.', value: 10 }
      ]},
      { id: 'q6', text: 'You value:', options: [
        { id: 'f1', text: 'Efficiency.', value: -15 },
        { id: 'f2', text: 'Kindness.', value: 15 }
      ]},
      { id: 'q7', text: 'Can you "switch off" your feelings?', options: [
        { id: 'g1', text: 'Yes, I can go cold in an instant.', value: -20 },
        { id: 'g2', text: 'No, they are always present.', value: 15 }
      ]},
      { id: 'q8', text: 'The Trolley Problem (Kill 1 to save 5):', options: [
        { id: 'h1', text: 'Pull the lever. 5 > 1.', value: -15 },
        { id: 'h2', text: 'I can\'t play God with lives.', value: 15 }
      ]},
      { id: 'q9', text: 'AI taking over jobs is:', options: [
        { id: 'i1', text: 'Inevitable progress.', value: -10 },
        { id: 'i2', text: 'Tragic for human dignity.', value: 15 }
      ]},
      { id: 'q10', text: 'Love is:', options: [
        { id: 'j1', text: 'A chemical reward for survival.', value: -20 },
        { id: 'j2', text: 'The ultimate meaning of life.', value: 20 }
      ]}
    ]
  },
  {
    id: 'friend-group-role',
    title: 'Which Friend Group Role are you?',
    description: 'Every squad has a dynamic. Where do you fit in? (Archetype Mapping)',
    thumbnail: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=400',
    type: 'type',
    categories: [
      { id: 'mom', title: 'The "Group Mom"', description: 'The planner, the protector, and the one with the bandaids.' },
      { id: 'clown', title: 'The Class Clown', description: 'The source of chaos and laughter. Nothing is serious.' },
      { id: 'ghost', title: 'The Ghost', description: 'You only show up for the big stuff, then disappear for weeks.' },
      { id: 'leader', title: 'The Strategic Lead', description: 'You decide where to eat and how to get there. The brain.' }
    ],
    questions: [
      { id: 'f1', text: 'Someone in the group is blackout drunk. You:', options: [
        { id: 'fa', text: 'Hold their hair and call them an Uber.', value: { mom: 15 } },
        { id: 'fb', text: 'Take a hilarious video for later.', value: { clown: 15 } },
        { id: 'fc', text: 'I already left an hour ago.', value: { ghost: 15 } },
        { id: 'fd', text: 'Coordinate who is staying and who is paying.', value: { leader: 15 } }
      ]},
      { id: 'f2', text: 'The group chat is silent for 3 days. You:', options: [
        { id: 'fe', text: 'Send a "How is everyone?" text.', value: { mom: 10 } },
        { id: 'ff', text: 'Send a cursed meme.', value: { clown: 15 } },
        { id: 'fg', text: 'I haven\'t even looked at it.', value: { ghost: 15 } },
        { id: 'fh', text: 'Propose a plan for Saturday.', value: { leader: 15 } }
      ]},
      { id: 'f3', text: 'Your contribution to the hangout:', options: [
        { id: 'fi', text: 'Snacks and emotional support.', value: { mom: 10 } },
        { id: 'fj', text: 'The entertainment.', value: { clown: 10 } },
        { id: 'fk', text: 'My rare presence is the gift.', value: { ghost: 15 } },
        { id: 'fl', text: 'The itinerary.', value: { leader: 10 } }
      ]},
      { id: 'f4', text: 'When there is drama:', options: [
        { id: 'fm', text: 'I try to mediate and fix it.', value: { mom: 15 } },
        { id: 'fn', text: 'I make jokes to break the tension.', value: { clown: 15 } },
        { id: 'fo', text: 'I ignore all notifications.', value: { ghost: 15 } },
        { id: 'fp', text: 'I listen to both sides and pick the winner.', value: { leader: 10 } }
      ]},
      { id: 'f5', text: 'Ideal group activity:', options: [
        { id: 'fq', text: 'Cozy game night.', value: { mom: 10, leader: 5 } },
        { id: 'fr', text: 'Chaotic road trip.', value: { clown: 15 } },
        { id: 'fs', text: 'Something where I can leave early.', value: { ghost: 15 } }
      ]},
      { id: 'f6', text: 'Who has your location?', options: [
        { id: 'ft', text: 'Everyone.', value: { mom: 10 } },
        { id: 'fu', text: 'No one. I am a mystery.', value: { ghost: 20 } }
      ]},
      { id: 'f7', text: 'If the group split up in a horror movie:', options: [
        { id: 'fv', text: 'I\'d die trying to save the group clown.', value: { mom: 15 } },
        { id: 'fw', text: 'I\'d be the first to die while doing something stupid.', value: { clown: 15 } },
        { id: 'fx', text: 'I\'m the one who suggested splitting up.', value: { leader: 15 } },
        { id: 'fy', text: 'I\'m already back at the car.', value: { ghost: 15 } }
      ]},
      { id: 'f8', text: 'Your "Vibe" is:', options: [
        { id: 'fz', text: 'Comforting.', value: { mom: 10 } },
        { id: 'ga', text: 'Exhausting (in a good way).', value: { clown: 10 } },
        { id: 'gb', text: 'Unpredictable.', value: { ghost: 10 } },
        { id: 'gc', text: 'Authoritative.', value: { leader: 10 } }
      ]},
      { id: 'f9', text: 'Frequency of hosting:', options: [
        { id: 'gd', text: 'Every time. My house is the hub.', value: { mom: 15 } },
        { id: 'ge', text: 'I contribute $ for pizza.', value: { leader: 5, clown: 5 } },
        { id: 'gf', text: 'I show up, eat, and leave.', value: { ghost: 10 } }
      ]},
      { id: 'f10', text: 'If you left the group:', options: [
        { id: 'gg', text: 'It would fall apart.', value: { mom: 10, leader: 10 } },
        { id: 'gh', text: 'It would be much quieter.', value: { clown: 10 } },
        { id: 'gi', text: 'They might not notice for a week.', value: { ghost: 15 } }
      ]}
    ]
  }
];
