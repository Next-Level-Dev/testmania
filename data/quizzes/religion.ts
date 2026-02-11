
import { QuizData } from '../../types';

export const religionQuizzes: QuizData[] = [
  {
    id: 'religion-core',
    title: 'Which Religion matches your Soul?',
    description: 'Determine which theological operating system governs your soul. (Archetype Mapping)',
    thumbnail: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&q=80&w=400',
    type: 'type',
    categories: [
      { id: 'christian', title: 'Christianity', description: 'Salvation through faith in God and Jesus.' },
      { id: 'islam', title: 'Islam', description: 'Total submission to the will of Allah.' },
      { id: 'buddhism', title: 'Buddhism', description: 'Nirvana through the cessation of desire.' },
      { id: 'atheist', title: 'Atheism', description: 'Science and physical evidence are the only truths.' },
      { id: 'satanist', title: 'Satanism', description: 'Self-deification and indulgence.' }
    ],
    questions: [
      { id: 'r1', text: 'What is the most sacred thing?', options: [
        { id: 'ra', text: 'God\'s will.', value: { islam: 15, christian: 10 } },
        { id: 'rb', text: 'Internal peace.', value: { buddhism: 15 } },
        { id: 'rc', text: 'Human logic.', value: { atheist: 15 } },
        { id: 'rd', text: 'My own freedom.', value: { satanist: 15 } }
      ]},
      { id: 'r2', text: 'The afterlife is:', options: [
        { id: 're', text: 'Paradise or Hell.', value: { islam: 15, christian: 15 } },
        { id: 'rf', text: 'A cycle of rebirth.', value: { buddhism: 15 } },
        { id: 'rg', text: 'Non-existent.', value: { atheist: 15 } }
      ]},
      { id: 'r3', text: 'Prayer is:', options: [
        { id: 'rh', text: 'A mandatory duty.', value: { islam: 20 } },
        { id: 'ri', text: 'A conversation with Love.', value: { christian: 15 } },
        { id: 'rj', text: 'A form of meditation.', value: { buddhism: 10 } },
        { id: 'rk', text: 'Talking to the wall.', value: { atheist: 15 } }
      ]},
      { id: 'r4', text: 'The "Quran" is:', options: [
        { id: 'rl', text: 'The Final Word of God.', value: { islam: 25 } },
        { id: 'rm', text: 'A book of history/myth.', value: { atheist: 10 } }
      ]},
      { id: 'r5', text: 'Indulgence in pleasure is:', options: [
        { id: 'rn', text: 'A sin / trap.', value: { buddhism: 10, islam: 10, christian: 10 } },
        { id: 'ro', text: 'The goal of life.', value: { satanist: 20 } }
      ]},
      { id: 'r6', text: 'The Trinity:', options: [
        { id: 'rp', text: 'Absolute Truth.', value: { christian: 25 } },
        { id: 'rq', text: 'Blasphemy against the One.', value: { islam: 15 } }
      ]},
      { id: 'r7', text: 'Suffering is caused by:', options: [
        { id: 'rr', text: 'Sin.', value: { christian: 15 } },
        { id: 'rs', text: 'Attachment.', value: { buddhism: 20 } },
        { id: 'rt', text: 'Biology / Physics.', value: { atheist: 10 } }
      ]},
      { id: 'r8', text: 'The "Five Pillars" are:', options: [
        { id: 'ru', text: 'My way of life.', value: { islam: 20 } },
        { id: 'rv', text: 'I don\'t know them.', value: { atheist: 2 } }
      ]},
      { id: 'r9', text: 'What is a "God"?', options: [
        { id: 'rw', text: 'A fairytale.', value: { atheist: 15 } },
        { id: 'rx', text: 'Me, potentially.', value: { satanist: 15, buddhism: 2 } }
      ]},
      { id: 'r10', text: 'Ultimate goal:', options: [
        { id: 'ry', text: 'Salvation.', value: { christian: 10, islam: 10 } },
        { id: 'rz', text: 'Truth.', value: { atheist: 10 } },
        { id: 'rza', text: 'Enlightenment.', value: { buddhism: 15 } }
      ]}
    ]
  }
];
