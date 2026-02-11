
import { QuizData } from '../../types';

export const identityQuizzes: QuizData[] = [
  {
    id: 'orientation-spectrum',
    title: 'Traditionalist vs Affirming (Queer Rights)',
    description: 'Measures your alignment with traditional sexual hierarchies vs. total social affirmation. (0: Hardline Traditionalist - 100: Absolute Affirmation)',
    thumbnail: 'https://images.unsplash.com/photo-1574676403211-175960000a68?auto=format&fit=crop&q=80&w=400',
    type: 'rate',
    startingScore: 50,
    rateRanges: [
      { min: 0, max: 20, title: 'Hardline Traditionalist', message: 'You believe society functions best when heterosexuality is the protected legal and moral standard.' },
      { min: 21, max: 45, title: 'Conservative Moderate', message: 'You support personal freedom but are wary of institutional changes to marriage or education.' },
      { min: 46, max: 75, title: 'Liberal Integrationist', message: 'You believe in full legal equality and social integration for all sexual orientations.' },
      { min: 76, max: 100, title: 'Absolute Affirmationist', message: 'You believe the traditional "binary" should be deconstructed to make way for a fully fluid social framework.' }
    ],
    questions: [
      { id: 'q1', text: 'Same-sex marriage should be:', options: [
        { id: 'a1', text: 'A constitutional right, protected everywhere.', value: 20 },
        { id: 'a2', text: 'Legal, but with religious exemptions.', value: 5 },
        { id: 'a3', text: 'Civil unions only, not "marriage".', value: -10 },
        { id: 'a4', text: 'Legally prohibited to protect tradition.', value: -25 }
      ]},
      { id: 'q2', text: 'LGBTQ+ themes in elementary school curriculum are:', options: [
        { id: 'b1', text: 'Essential for raising empathetic children.', value: 20 },
        { id: 'b2', text: 'Fine, if kept age-appropriate and factual.', value: 5 },
        { id: 'b3', text: 'Inappropriate; should be left to parents.', value: -15 },
        { id: 'b4', text: 'A form of state-sponsored grooming.', value: -30 }
      ]},
      { id: 'q3', text: 'Business owners should be allowed to refuse service based on sexual orientation:', options: [
        { id: 'c1', text: 'Never. Discrimination is illegal.', value: 15 },
        { id: 'c2', text: 'Only if it conflicts with a religious ceremony.', value: 0 },
        { id: 'c3', text: 'Yes. Freedom of association is absolute.', value: -15 }
      ]},
      { id: 'q4', text: 'Media representation (movies/TV) of queer characters:', options: [
        { id: 'd1', text: 'Is still not enough; more is needed.', value: 15 },
        { id: 'd2', text: 'Is currently at a healthy balance.', value: 0 },
        { id: 'd3', text: 'Feels forced and performative lately.', value: -10 },
        { id: 'd4', text: 'Is harmful and should be restricted.', value: -20 }
      ]},
      { id: 'q5', text: 'Adoption by same-sex couples is:', options: [
        { id: 'e1', text: 'Identical in quality to any other couple.', value: 15 },
        { id: 'e2', text: 'Better than a child being in foster care.', value: 5 },
        { id: 'e3', text: 'Less ideal than a mother/father household.', value: -15 },
        { id: 'e4', text: 'Harmful to the psychological health of the child.', value: -25 }
      ]}
    ]
  },
  {
    id: 'gender-alignment',
    title: 'Biological Essentialist vs Gender Affirming',
    description: 'Measures your stance on the legal and social definition of Gender. (0: Essentialist - 100: Affirming)',
    thumbnail: 'https://images.unsplash.com/photo-1550684376-efcbd6e3f031?auto=format&fit=crop&q=80&w=400',
    type: 'rate',
    startingScore: 50,
    rateRanges: [
      { min: 0, max: 20, title: 'Hardline Essentialist', message: 'You believe sex and gender are immutable, binary, and determined at birth.' },
      { min: 21, max: 45, title: 'Gender Skeptic', message: 'You prioritize biological reality over identity in public policy (sports, bathrooms, etc.).' },
      { min: 46, max: 75, title: 'Soft Affirmationist', message: 'You support transition for adults and believe in personal identity rights.' },
      { min: 76, max: 100, title: 'Gender Revolutionary', message: 'You believe gender is purely internal and the state should have no role in defining it.' }
    ],
    questions: [
      { id: 'q1', text: 'Gender identity should be legally determined by:', options: [
        { id: 'a1', text: 'Self-declaration alone (Self-ID).', value: 25 },
        { id: 'a2', text: 'Self-declaration after medical/psychological diagnosis.', value: 10 },
        { id: 'a3', text: 'The biological markers at birth.', value: -20 },
        { id: 'a4', text: 'Chromosomes and DNA exclusively.', value: -30 }
      ]},
      { id: 'q2', text: 'Transgender women in female-only competitive sports:', options: [
        { id: 'b1', text: 'Should compete where they identify.', value: 20 },
        { id: 'b2', text: 'Should compete after meeting specific hormone criteria.', value: 5 },
        { id: 'b3', text: 'Should have a separate "Open" category.', value: -5 },
        { id: 'b4', text: 'Should be barred to protect biological women.', value: -25 }
      ]},
      { id: 'q3', text: 'Access to gender-affirming surgery for adults:', options: [
        { id: 'c1', text: 'Should be covered by public healthcare.', value: 15 },
        { id: 'c2', text: 'Should be legal, but privately funded.', value: 5 },
        { id: 'c3', text: 'Should be restricted or banned as "mutilation".', value: -25 }
      ]},
      { id: 'q4', text: 'Use of "Neo-pronouns" (Ze/Zir, etc.) in public institutions:', options: [
        { id: 'd1', text: 'Should be legally protected and used by all.', value: 20 },
        { id: 'd2', text: 'Is a polite personal choice, not a legal matter.', value: 5 },
        { id: 'd3', text: 'Is an infringement on the speech rights of others.', value: -15 },
        { id: 'd4', text: 'Is a sign of societal delusion.', value: -25 }
      ]},
      { id: 'q5', text: 'When a child expresses gender dysphoria, the first step should be:', options: [
        { id: 'e1', text: 'Immediate social and medical affirmation.', value: 20 },
        { id: 'e2', text: 'Social affirmation, but wait on medical steps.', value: 5 },
        { id: 'e3', text: 'Neutral therapy to explore all causes.', value: -10 },
        { id: 'e4', text: 'Active discouragement to wait until adulthood.', value: -25 }
      ]}
    ]
  }
];
