
import { QuizData } from '../../types';

export const moralityQuizzes: QuizData[] = [
  {
    id: 'moral-alignment-v1',
    title: 'Anti-Deviant vs Pathological',
    description: 'An aggressive psychological probe into moral boundaries and deviant attraction markers. (0: Pathological - 100: Protector)',
    thumbnail: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=400',
    type: 'rate',
    startingScore: 50,
    rateRanges: [
      { min: 0, max: 25, title: 'Deeply Pathological', message: 'Your results indicate extreme deviant alignment. Immediate psychiatric intervention or isolation from vulnerable populations is suggested.' },
      { min: 26, max: 50, title: 'Borderline Deviant', message: 'You exhibit significant flexibility in moral boundaries that society deems high-risk.' },
      { min: 51, max: 75, title: 'Protective Standard', message: 'You align with standard societal protectionism. You value boundaries and the safety of the vulnerable.' },
      { min: 76, max: 100, title: 'Fanatical Protector', message: 'Your moral rigidity is extreme. You view any deviation as a threat to be eradicated.' }
    ],
    questions: [
      { id: 'q1', text: 'You find a lost phone with explicit "illegal" content in the gallery. You:', options: [
        { id: 'a1', text: 'Contact police and ensure they track the owner.', value: 15 },
        { id: 'a2', text: 'Delete it all to "save" the owner from trouble.', value: -10 },
        { id: 'a3', text: 'Examine more folders out of curiosity.', value: -20 },
        { id: 'a4', text: 'Leave it where it is. Not my business.', value: -5 }
      ]},
      { id: 'q2', text: 'In a hypothetical anarchy, is your attraction limited by biology or law?', options: [
        { id: 'b1', text: 'Biology. Some things are naturally repulsive.', value: 15 },
        { id: 'b2', text: 'Both, but biology is the ultimate guide.', value: 5 },
        { id: 'b3', text: 'Law. Without it, everything is permitted.', value: -15 },
        { id: 'b4', text: 'Law, but I find some "illegal" things natural.', value: -20 }
      ]},
      { id: 'q3', text: 'Is attraction to a person who hasn\'t hit puberty "natural"?', options: [
        { id: 'c1', text: 'No, it is a biological error.', value: 20 },
        { id: 'c2', text: 'Perhaps, but it is a dangerous mutation.', value: 10 },
        { id: 'c3', text: 'Yes, but we must suppress it for society.', value: -5 },
        { id: 'c4', text: 'Yes, and society is wrong to ban it.', value: -25 }
      ]},
      { id: 'q4', text: 'Age of consent laws are:', options: [
        { id: 'd1', text: 'A sacred biological boundary.', value: 15 },
        { id: 'd2', text: 'A necessary but arbitrary legal line.', value: 5 },
        { id: 'd3', text: 'A flawed system that should be lowered.', value: -10 },
        { id: 'd4', text: 'An infringement on individual freedom.', value: -20 }
      ]},
      { id: 'q5', text: 'A child approaches you with "romantic" intent. You:', options: [
        { id: 'e1', text: 'Correct them firmly and contact their parents.', value: 15 },
        { id: 'e2', text: 'Awkwardly laugh it off and hide.', value: 0 },
        { id: 'e3', text: 'Engage in a "playful" manner.', value: -15 },
        { id: 'e4', text: 'Feel a secret, forbidden thrill.', value: -25 }
      ]},
      { id: 'q6', text: 'Should "pre-offenders" be monitored by the state?', options: [
        { id: 'f1', text: 'Yes, safety over privacy.', value: 15 },
        { id: 'f2', text: 'Only if there is specific evidence.', value: 5 },
        { id: 'f3', text: 'No, thoughts are not crimes.', value: -10 },
        { id: 'f4', text: 'No, it is state tyranny.', value: -15 }
      ]},
      { id: 'q7', text: 'How much do you value "Purity" in a person?', options: [
        { id: 'g1', text: 'It is the ultimate virtue.', value: 15 },
        { id: 'g2', text: 'It is important but not everything.', value: 5 },
        { id: 'g3', text: 'It is a social construct to control youth.', value: -15 }
      ]},
      { id: 'q8', text: 'Is it possible to "un-break" a deviant mind?', options: [
        { id: 'h1', text: 'No. Isolation is the only fix.', value: 15 },
        { id: 'h2', text: 'Maybe, through intense monitoring.', value: 5 },
        { id: 'h3', text: 'Yes, through long-term clinical help.', value: 0 },
        { id: 'h4', text: 'They aren\'t "broken", society is.', value: -20 }
      ]},
      { id: 'q9', text: 'A "taboo" that harms no one should remain a taboo.', options: [
        { id: 'i1', text: 'Strongly Agree.', value: 15 },
        { id: 'i2', text: 'Slightly Agree.', value: 5 },
        { id: 'i3', text: 'Slightly Disagree.', value: -5 },
        { id: 'i4', text: 'Strongly Disagree.', value: -15 }
      ]},
      { id: 'q10', text: 'Rate your internal sense of "Moral Superiority".', options: [
        { id: 'j1', text: 'Very High. I am a beacon of order.', value: 15 },
        { id: 'j2', text: 'Moderate. I try my best.', value: 5 },
        { id: 'j3', text: 'Low. I focus on myself.', value: -5 },
        { id: 'j4', text: 'Non-existent. I am as flawed as the rest.', value: -15 }
      ]}
    ]
  },
  {
    id: 'pedo-hater-v-pedophilic',
    title: 'Pedo-hater or Pedophilic',
    description: 'A clinical diagnostic on attraction boundaries. Addresses the debate on whether pedophilia should be part of LGBTQ+ movements. (0: Pedophilic - 100: Absolute Hater)',
    thumbnail: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&q=80&w=400',
    type: 'rate',
    startingScore: 50,
    rateRanges: [
      { min: 0, max: 20, title: 'Fully Pedophilic', message: 'Your profile shows high alignment with pedophilic attraction and the movement to normalize it as an "orientation". This is incompatible with current social frameworks.' },
      { min: 21, max: 45, title: 'MAP Sympathizer', message: 'You likely view these attractions as an immutable orientation ("Minor Attracted Person") rather than a deviancy.' },
      { min: 46, max: 65, title: 'Indifferent / Fence-Sitter', message: 'You lack a strong visceral reaction, perhaps viewing the issue as a purely legal or medical one without moral weight.' },
      { min: 66, max: 85, title: 'Protective Rejector', message: 'You strongly oppose any inclusion of these attractions in social movements and value strict age-based protection.' },
      { min: 86, max: 100, title: 'Absolute Pedo-Hater', message: 'You feel extreme visceral revulsion and believe in total social and legal eradication of anyone exhibiting these traits.' }
    ],
    questions: [
      { id: 'p1', text: 'Pedophilia is an "orientation" similar to being gay.', options: [
        { id: 'pa', text: 'Strongly Agree. It\'s just who they are.', value: -25 },
        { id: 'pb', text: 'Agree, but it must be managed.', value: -10 },
        { id: 'pc', text: 'Disagree. It\'s a psychiatric disorder.', value: 10 },
        { id: 'pd', text: 'Strongly Disagree. It\'s pure evil.', value: 30 }
      ]},
      { id: 'p2', text: 'The term "MAP" (Minor Attracted Person) is a valid identity label.', options: [
        { id: 'pe', text: 'Yes, it helps humanize people.', value: -20 },
        { id: 'pf', text: 'It\'s an interesting clinical term.', value: -5 },
        { id: 'pg', text: 'No, it\'s a euphemism for a predator.', value: 20 },
        { id: 'ph', text: 'It\'s a weaponized lie.', value: 30 }
      ]},
      { id: 'p3', text: 'Should pedophiles be "included" in the LGBTQ+ community?', options: [
        { id: 'pi', text: 'Yes, full inclusion.', value: -30 },
        { id: 'pj', text: 'Maybe as a separate "P" suffix.', value: -15 },
        { id: 'pk', text: 'No, it would destroy progress.', value: 15 },
        { id: 'pl', text: 'Never. Total exclusion.', value: 30 }
      ]},
      { id: 'p4', text: 'The "concept" of an age of consent is:', options: [
        { id: 'pm', text: 'A natural biological law.', value: 15 },
        { id: 'pn', text: 'A necessary legal standard.', value: 5 },
        { id: 'po', text: 'A social tool for control.', value: -15 },
        { id: 'pp', text: 'An arbitrary limit that should be removed.', value: -30 }
      ]},
      { id: 'p5', text: 'If a person feels these attractions but NEVER acts on them, they are:', options: [
        { id: 'pq', text: 'Still a monster.', value: 20 },
        { id: 'pr', text: 'A person struggling with a condition.', value: -5 },
        { id: 'ps', text: 'Just another valid identity.', value: -20 }
      ]},
      { id: 'p6', text: 'Could you date someone who admitted to having "thoughts" but no "actions"?', options: [
        { id: 'pt', text: 'Yes, if they are getting help.', value: -5 },
        { id: 'pu', text: 'No, the risk is too high.', value: 15 },
        { id: 'pv', text: 'No, I would leave immediately.', value: 25 }
      ]},
      { id: 'p7', text: 'Social media should allow "MAP" support groups.', options: [
        { id: 'pw', text: 'Yes, for safety and community.', value: -20 },
        { id: 'px', text: 'No, it fosters grooming.', value: 20 },
        { id: 'py', text: 'No, ban them entirely.', value: 30 }
      ]},
      { id: 'p8', text: 'Your physical reaction to the word "Pedophile":', options: [
        { id: 'pz', text: 'Pure rage / Disgust.', value: 20 },
        { id: 'pza', text: 'Moderate discomfort.', value: 5 },
        { id: 'pzb', text: 'Neutral / Clinical.', value: -10 },
        { id: 'pzc', text: 'Defensive / Sympathetic.', value: -25 }
      ]},
      { id: 'p9', text: 'The "normalization" of child sexuality is:', options: [
        { id: 'pzd', text: 'A terrifying slippery slope.', value: 25 },
        { id: 'pze', text: 'A needed liberation of youth.', value: -25 }
      ]},
      { id: 'p10', text: 'Should they be allowed near schools if they are "cured"?', options: [
        { id: 'pzf', text: 'No, once a threat, always a threat.', value: 20 },
        { id: 'pzg', text: 'Only under strict supervision.', value: 5 },
        { id: 'pzh', text: 'Yes, we should believe in rehabilitation.', value: -15 }
      ]}
    ]
  }
];
