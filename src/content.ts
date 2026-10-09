// All site copy lives here so it can be edited without touching layout code.
// Images: drop files into /public/images using the paths below. Any missing
// image falls back to a styled placeholder automatically.

export const profile = {
  name: 'Sasha Rastogi',
  firstName: 'Sasha',
  roles: ['Student', 'Researcher', 'Public Health & Cancer Awareness Advocate'],
  major: 'Psychology',
  portrait: '/images/portrait.jpg',
  intro:
    'Sasha Rastogi is a high-school student with a strong interdisciplinary interest in psychology, public health, cancer research, healthcare communication and technology. Her work focuses on understanding the psychosocial experience of cancer, improving cancer awareness and prevention, and developing accessible interventions for patients and communities.',
  theme:
    'A central theme across her work is the move from understanding a problem to designing a practical solution — from primary research with cancer patients, to the Sahara Kit, to awareness workshops, screening initiatives, HPV education and a machine-learning breast-cancer classifier.',
}

export const arc = [
  { step: 'Research', text: 'Primary research with 77 Indian cancer patients.' },
  { step: 'Understand', text: 'Distress, disclosure, coping and barriers to care.' },
  { step: 'Design', text: 'The Sahara Kit, comics and myth-busting content.' },
  { step: 'Implement', text: 'Workshops, kit distribution and screening camps.' },
  { step: 'Impact', text: 'Communities reached, women screened, patients supported.' },
]

export const impactStats = [
  { value: '77', label: 'cancer patients in primary research' },
  { value: '400+', label: 'students & staff reached on HPV' },
  { value: '₹2,00,000', label: 'crowdfunded for a screening camp' },
  { value: '98%', label: 'CNN accuracy, benign vs malignant' },
  { value: '14', label: 'Sahara Kits distributed at Prashanti' },
  { value: '4', label: 'breast-cancer awareness workshops' },
]

export const cancerStudy = {
  title: 'Psychosocial Experience of Cancer Diagnosis in India',
  subtitle: 'Disclosure Practices, Coping Mechanisms, and Barriers to Mental Health Support',
  role: 'Independent Researcher',
  collab: 'Collaboration with DoctorsForYou & AIIMS',
  summary:
    'Primary research involving 77 Indian cancer patients to understand the psychological, emotional and behavioural experience of a cancer diagnosis in India.',
  findings: [
    { value: 54.4, label: 'experienced emotional distress very often following diagnosis' },
    { value: 64.4, label: 'learned of their diagnosis through family members rather than physicians' },
  ],
  notes: [
    'Family support, acceptance and prayer/meditation emerged as major coping mechanisms.',
    'Financial barriers, stigma and limited access to psycho-oncology services limited access to professional mental-health support.',
  ],
  recognition: ['Presented at the Oxford Global Psychology Conference', 'Submitted for the CREST Gold award'],
  tags: [
    'Cancer psychology',
    'Coping mechanisms',
    'Mental health',
    'Patient experience',
    'Healthcare communication',
    'Indian sociocultural context',
  ],
}

export const financeStudy = {
  title: 'Gender & Investment Risk Appetite',
  program: 'Shri Shodh Research Programme',
  sample: '74 Delhi-NCR investors',
  points: [
    'Gender and financial risk appetite',
    'Confidence in financial knowledge',
    'Behavioural differences in investment decision-making',
  ],
  recognition: [
    'Presented at the Eurasia Business and Economics Society Conference',
    'Published in the Oxford Journal of Student Scholarship',
  ],
}

export const sahara = {
  role: 'Designer & Developer — Emotional Support Intervention',
  partner: 'Prashanti — Indian Cancer Society Healing Centre',
  summary:
    'An emotional-support toolkit designed to help cancer patients and their families cope with the emotional difficulties of diagnosis and treatment — directly informed by Sasha’s cancer-coping research.',
  components: [
    { name: 'Guided journal', note: 'simple emotional-reflection prompts' },
    { name: 'Breathing exercises', note: 'for difficult moments in treatment' },
    { name: 'Origami sheets', note: 'with step-by-step instructions' },
    { name: 'Mandala colouring', note: 'calm, focused distraction' },
    { name: 'Colour pencils', note: 'for colouring and journalling' },
    { name: 'Stress ball', note: 'a tactile release' },
  ],
  data: [
    { value: 45.5, label: 'identified acceptance as a coping strategy' },
    { value: 40.3, label: 'identified prayer / meditation' },
    { value: 0, label: 'selected journalling' },
  ],
  insight:
    'Rather than reading the absence of journalling as an absence of emotional need, Sasha designed very simple prompts to make emotional reflection less intimidating — alongside creative activities patients could engage with more easily.',
  distributed: 14,
  images: ['/images/sahara-1.jpg', '/images/sahara-2.jpg', '/images/sahara-3.jpg'],
}

export const suraksha = {
  role: 'Founder & Program Lead',
  summary:
    'A student-led cancer-awareness initiative focused on breast-cancer awareness and early detection, taking evidence-based health information directly into community settings.',
  venues: ['Ivy Apartments', 'Palm Springs', 'Vidya School', 'Vikasa Stitching School'],
  topics: [
    'Early signs and symptoms of breast cancer',
    'Risk factors',
    'Screening and early detection',
    'Busting common cancer myths',
    'Improving health awareness within communities',
  ],
  stats: [
    { value: '4', label: 'workshops' },
    { value: '≤80', label: 'women per session' },
    { value: '2', label: 'with the Indian Cancer Society' },
    { value: '50+', label: 'women to be screened' },
  ],
  crowdfund:
    'Crowdfunded ₹2,00,000 towards a screening camp intended to give 50+ underprivileged women access to screening.',
  feature: 'Featured in Samvada, the RWA newsletter of Sushant Lok-1 A&B Blocks.',
  instagram: 'https://www.instagram.com/suraksha_in_pink',
  images: ['/images/suraksha-1.jpg', '/images/suraksha-2.jpg'],
}

export const ics = {
  role: 'Public Health Intern — HPV & Breast Cancer Outreach',
  org: 'Indian Cancer Society',
  groups: [
    {
      title: 'Public health communication',
      items: [
        'Created a series of HPV and breast-cancer educational comics for ICS social media.',
        'Developed cancer myth-busting content.',
        'Translated accurate health information into accessible, engaging formats.',
        'Extended the reach of awareness information beyond in-person sessions.',
      ],
    },
    {
      title: 'Data & operations',
      items: ['Supported data clean-up and organisation of information.'],
    },
  ],
  link: 'https://www.instagram.com/p/DWDZITQEkx5/',
  images: ['/images/ics-comic-1.jpg', '/images/ics-comic-2.jpg'],
}

export const hpv = {
  role: 'Campaign Lead — HPV Awareness',
  partner: 'KIITJEE School × Yuva Unstoppable',
  reach: '400+',
  topics: ['HPV vaccination', 'Cervical-cancer prevention', 'HPV awareness', 'Preventive healthcare'],
  link: 'https://drive.google.com/drive/folders/15yuNzeRb_Nrst-9dS0QlcRJ2T_er_pi2?usp=share_link',
  image: '/images/hpv-1.jpg',
}

export const tech = {
  title: 'Breast Cancer Classification Website',
  role: 'Independent Technology & Research Project',
  summary:
    'Applying machine learning to breast-cancer classification using a publicly available Kaggle breast-biopsy imaging dataset — and turning the model into a tool anyone can use.',
  steps: [
    'Trained a Convolutional Neural Network (CNN) on breast-biopsy images.',
    'Built an interactive web application for real-time classification.',
  ],
  metrics: [
    { value: 98, label: 'Benign / malignant accuracy' },
    { value: 94, label: 'Subtype classification accuracy' },
  ],
  skills: ['Machine Learning', 'CNN', 'Medical Imaging', 'Data Analysis', 'Web Development'],
  link: 'https://gentle-path-hope.lovable.app/',
}

export const articles = {
  outlet: 'Pangea Society',
  focus: 'AI, Psychology & Neuroscience',
  reach: '100+ Medium readers · one article featured in Samvada',
  list: [
    'AI Brain Drain: Are We Outsourcing Our Thoughts?',
    'The Memory Trap',
    'You’re Not as Rational as You Think',
    'Wired Without Knowing It: Classical and Operant Conditioning',
    'The Mind Adapts, Even When You Don’t Notice',
    'The Neuroscience of Gut Feelings',
  ],
}

export const academics = {
  school: 'University of Chicago',
  program: 'Biological Psychology Summer Program',
  course: 'PSYC 20300 — Introduction to Biological Psychology',
  instructor: 'Brian Prendergast',
  results: [
    { value: '91.28%', label: 'final grade' },
    { value: '95.25%', label: 'highest examination score' },
    { value: 'Top 25%', label: 'assessment performance' },
  ],
  note:
    'Sasha consulted Professor Prendergast on her cancer-coping research, exploring a biological perspective that complements the sociocultural framework of her existing work.',
}

export const arts = [
  {
    title: 'Hindustani Classical Music',
    org: 'Prayag Sangeet Samiti, Allahabad',
    headline: 'Senior Diploma',
    detail: '6 years of graded vocal training in raags, taals, aalap improvisation and musical theory.',
  },
  {
    title: 'Western Percussion',
    org: 'Rockschool',
    headline: 'Grade 4 Drums, Distinction',
    detail: 'Preparing for Grade 5. Performed solos at 2 recitals.',
  },
  {
    title: 'Senior Hindi Editor',
    org: 'School Editorial Board',
    headline: '4 years, multiple roles',
    detail:
      'Edits student submissions, manages and mentors Grade 6–10 editors, coordinates across departments, and writes for the magazine Uncensored and the school IB newsletter.',
  },
  {
    title: 'Volunteer Teacher',
    org: 'Bachpan Shaala',
    headline: '20–25 students per session',
    detail:
      'Teaches mathematics, English and problem-solving to underprivileged students aged 6–15, adapting methods to each age group and level.',
  },
]

export const gallery = [
  { title: 'Suraksha in Pink', caption: 'Workshops · community sessions · screening campaign', src: '/images/gallery-suraksha.jpg' },
  { title: 'Indian Cancer Society', caption: 'Internship · HPV & breast-cancer comics', src: '/images/gallery-ics.jpg' },
  { title: 'Sahara Kit', caption: 'Kit design · components · Prashanti distribution', src: '/images/gallery-sahara.jpg' },
  { title: 'Research', caption: 'Presentation · conference · documentation', src: '/images/gallery-research.jpg' },
  { title: 'HPV Awareness', caption: 'KIITJEE School · Yuva Unstoppable', src: '/images/gallery-hpv.jpg' },
  { title: 'Academic & Extracurricular', caption: 'UChicago · music · editorial board', src: '/images/gallery-academic.jpg' },
]

export const contact = {
  email: '', // add an email address to show a mail link
  links: [
    { label: 'Suraksha in Pink — Instagram', href: suraksha.instagram },
    { label: 'Breast Cancer Classifier', href: tech.link },
    { label: 'ICS Social Media Work', href: ics.link },
  ],
}
