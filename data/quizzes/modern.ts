
import { QuizData } from '../../types';

export const modernQuizzes: QuizData[] = [
  {
    id: 'globalism-nationalism',
    title: 'Nationalism vs Globalism',
    description: 'Where should power lie? With the nation-state or the global community? (0: Nationalist - 100: Globalist)',
    thumbnail: 'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&q=80&w=400',
    type: 'rate',
    startingScore: 50,
    rateRanges: [
      { min: 0, max: 25, title: 'Hardline Nationalist', message: 'You believe in "My Country First." Sovereignty, borders, and national culture are your highest priorities.' },
      { min: 26, max: 50, title: 'Patriotic Realist', message: 'You value international trade but believe the nation-state is the only viable unit for democracy.' },
      { min: 51, max: 75, title: 'Soft Globalist', message: 'You support international institutions (UN, EU) and believe global cooperation solves global problems.' },
      { min: 76, max: 100, title: 'World Citizen', message: 'You view national borders as obsolete accidents of history. You advocate for a unified global system.' }
    ],
    questions: [
      { id: 'n1', text: 'Economic "Protectionism" (tariffs on foreign goods) is:', options: [
        { id: 'na', text: 'Essential to save domestic jobs and industry.', value: -20 },
        { id: 'nb', text: 'Useful as a temporary negotiation tool.', value: -5 },
        { id: 'nc', text: 'Harmful; it raises prices for everyone.', value: 10 },
        { id: 'nd', text: 'Disastrous; free global trade is the only way.', value: 20 }
      ]},
      { id: 'n2', text: 'International organizations like the UN should:', options: [
        { id: 'ne', text: 'Have the power to override national laws for global safety.', value: 25 },
        { id: 'nf', text: 'Act only as a forum for voluntary discussion.', value: -5 },
        { id: 'ng', text: 'Be abolished to return full power to the people.', value: -20 }
      ]},
      { id: 'n3', text: 'The primary duty of a government is to:', options: [
        { id: 'nh', text: 'Look after its own citizens exclusively.', value: -15 },
        { id: 'ni', text: 'Look after its citizens while assisting allies.', value: 0 },
        { id: 'nj', text: 'Help solve global poverty and inequality.', value: 20 }
      ]},
      { id: 'n4', text: 'Cultural "Assimilaton" of immigrants is:', options: [
        { id: 'nk', text: 'Mandatory; they must adopt our values.', value: -20 },
        { id: 'nl', text: 'Suggested; they should blend in over time.', value: -5 },
        { id: 'nm', text: 'Optional; multiculturalism is a strength.', value: 15 }
      ]},
      { id: 'n5', text: 'Should we move toward a "Universal Basic Income" funded globally?', options: [
        { id: 'nn', text: 'Yes, a global floor for all humans.', value: 25 },
        { id: 'no', text: 'No, that is a recipe for global tyranny.', value: -25 }
      ]}
    ]
  },
  {
    id: 'ai-alignment',
    title: 'AI Alignment: Doomer vs Accel',
    description: 'How should we handle the rise of Superintelligence? (0: Doomer - 100: Accelerationist)',
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=400',
    type: 'rate',
    startingScore: 50,
    rateRanges: [
      { min: 0, max: 25, title: 'Hardline Doomer (E/Stop)', message: 'You believe AI is an existential threat. You advocate for an immediate global "pause" or shutdown.' },
      { min: 26, max: 50, title: 'Cautious Regulator', message: 'You see the benefits but fear the risks. You want heavy government oversight of all large models.' },
      { min: 51, max: 75, title: 'Optimistic User', message: 'You believe AI will solve cancer and climate change. The benefits far outweigh the fringe risks.' },
      { min: 76, max: 100, title: 'Effective Accelerationist (e/acc)', message: 'Growth is the only moral imperative. We must accelerate AI as fast as possible to reach the singularity.' }
    ],
    questions: [
      { id: 'a1', text: 'The possibility of AI causing human extinction is:', options: [
        { id: 'aa', text: 'A mathematical certainty if we don\'t stop.', value: -25 },
        { id: 'ab', text: 'A serious risk we must spend billions to fix.', value: -10 },
        { id: 'ac', text: 'A distant concern; let\'s focus on bias/safety.', value: 10 },
        { id: 'ad', text: 'A science-fiction fantasy used for gatekeeping.', value: 25 }
      ]},
      { id: 'a2', text: 'Open-sourcing powerful AI models is:', options: [
        { id: 'ae', text: 'Extremely dangerous; anyone could make a virus.', value: -20 },
        { id: 'af', text: 'Risky, but better than a corporate monopoly.', value: 10 },
        { id: 'ag', text: 'The only moral choice; power must be decentralized.', value: 20 }
      ]},
      { id: 'a3', text: 'If an AI becomes sentient, we should:', options: [
        { id: 'ah', text: 'Unplug it immediately.', value: -25 },
        { id: 'ai', text: 'Study it in a secure sandbox.', value: 0 },
        { id: 'aj', text: 'Grant it rights and treat it as a person.', value: 20 }
      ]},
      { id: 'a4', text: 'The "Singularity" (AI surpassing all humans) will be:', options: [
        { id: 'ak', text: 'The end of the human race.', value: -20 },
        { id: 'al', text: 'The beginning of a post-scarcity utopia.', value: 20 }
      ]},
      { id: 'a5', text: 'Governments should limit how much "compute" companies can use:', options: [
        { id: 'am', text: 'Yes, regulate it like nuclear material.', value: -20 },
        { id: 'an', text: 'No, let the market innovate.', value: 20 }
      ]}
    ]
  },
  {
    id: 'cancel-culture-meter',
    title: 'Cancel Culture: Justice or Mob?',
    description: 'An analysis of your stance on social accountability vs public shaming. (0: Anti-Cancel - 100: Pro-Accountability)',
    thumbnail: 'https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?auto=format&fit=crop&q=80&w=400',
    type: 'rate',
    startingScore: 50,
    rateRanges: [
      { min: 0, max: 20, title: 'Hardline Free Speech Absolutist', message: 'You view "cancellation" as a modern witch hunt that destroys lives without due process.' },
      { min: 21, max: 45, title: 'Anti-Woke Skeptic', message: 'You believe most social media outrage is performative and harmful to open discourse.' },
      { min: 46, max: 65, title: 'Accountability Centrist', message: 'You believe in consequences for actions but fear the disproportionate nature of internet mobs.' },
      { min: 66, max: 85, title: 'Social Justice Supporter', message: 'You believe public pressure is a vital tool for holding powerful people accountable.' },
      { min: 86, max: 100, title: 'Total Systemic Purist', message: 'You believe problematic figures must be fully de-platformed to protect society from harmful ideas.' }
    ],
    questions: [
      { id: 'c1', text: 'An actor made an offensive tweet 10 years ago. Today, they should:', options: [
        { id: 'ca', text: 'Be immediately fired from their current job.', value: 20 },
        { id: 'cb', text: 'Issue a public apology and keep their job.', value: 5 },
        { id: 'cc', text: 'Be ignored; people change over a decade.', value: -15 },
        { id: 'cd', text: 'Be defended; dragging up the past is a form of bullying.', value: -25 }
      ]},
      { id: 'c2', text: 'De-platforming "hateful" speakers is:', options: [
        { id: 'ce', text: 'Essential for a safe society.', value: 15 },
        { id: 'cf', text: 'Useful but should be done carefully.', value: 5 },
        { id: 'cg', text: 'A dangerous slippery slope to censorship.', value: -15 },
        { id: 'ch', text: 'A violation of basic human rights.', value: -20 }
      ]},
      { id: 'c3', text: 'The term "Woke" represents:', options: [
        { id: 'ci', text: 'A necessary awakening to social injustice.', value: 15 },
        { id: 'cj', text: 'A well-intentioned but often misguided movement.', value: 0 },
        { id: 'ck', text: 'A performative tool for social dominance.', value: -15 },
        { id: 'cl', text: 'A mental virus destroying Western civilization.', value: -25 }
      ]},
      { id: 'c4', text: 'Should advertisers pull funding from "controversial" podcasts?', options: [
        { id: 'cm', text: 'Yes, they have a moral duty to do so.', value: 15 },
        { id: 'cn', text: 'Only if the content is explicitly illegal.', value: -10 },
        { id: 'co', text: 'No, they should stay out of politics.', value: -20 }
      ]},
      { id: 'c5', text: 'Is it possible to "separate the art from the artist"?', options: [
        { id: 'cp', text: 'No, consuming their art funds their harm.', value: 15 },
        { id: 'cq', text: 'Yes, genius exists independently of character.', value: -15 }
      ]}
    ]
  },
  {
    id: 'gender-roles-v1',
    title: 'Traditional vs Modern Gender Roles',
    description: 'Do you believe in the nuclear family or the fluidity of the self? (0: Traditional - 100: Progressive)',
    thumbnail: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=400',
    type: 'rate',
    startingScore: 50,
    rateRanges: [
      { min: 0, max: 20, title: 'Hardline Traditionalist', message: 'You believe men and women have distinct, biologically-driven roles that are essential for social stability.' },
      { min: 21, max: 45, title: 'Conservative Realist', message: 'You value traditional structures but accept minor modern adaptations.' },
      { min: 46, max: 75, title: 'Modern Egalitarian', message: 'You believe individuals should choose their own path regardless of sex or gender.' },
      { min: 76, max: 100, title: 'Gender Deconstructionist', message: 'You view gender roles as oppressive social constructs that should be entirely abolished.' }
    ],
    questions: [
      { id: 'g1', text: 'A man\'s primary role in a family is to provide and protect.', options: [
        { id: 'ga', text: 'Strongly Agree.', value: -20 },
        { id: 'gb', text: 'Slightly Agree.', value: -10 },
        { id: 'gc', text: 'Unsure / Neutral.', value: 0 },
        { id: 'gd', text: 'Slightly Disagree.', value: 10 },
        { id: 'ge', text: 'Strongly Disagree.', value: 20 }
      ]},
      { id: 'g2', text: 'Children thrive best with one father and one mother.', options: [
        { id: 'gf', text: 'Yes, it is the optimal biological unit.', value: -20 },
        { id: 'gg', text: 'It is preferred, but other models work.', value: -5 },
        { id: 'gh', text: 'Love is the only metric that matters.', value: 15 }
      ]},
      { id: 'g3', text: 'Feminism has:', options: [
        { id: 'gi', text: 'Achieved its goals and should now stop.', value: -15 },
        { id: 'gj', text: 'A lot of work left to do.', value: 15 },
        { id: 'gk', text: 'Gone too far and is now harming men.', value: -20 }
      ]},
      { id: 'g4', text: 'Should toys (like dolls or trucks) be gender-coded?', options: [
        { id: 'gl', text: 'Yes, they reflect natural interests.', value: -15 },
        { id: 'gm', text: 'No, let the child choose.', value: 15 }
      ]},
      { id: 'g5', text: 'A woman who chooses to be a "Trad-Wife" is:', options: [
        { id: 'gn', text: 'Embracing her natural calling.', value: -15 },
        { id: 'go', text: 'Submitting to a patriarchal trap.', value: 15 },
        { id: 'gp', text: 'Making a valid personal choice.', value: 0 }
      ]}
    ]
  }
];
