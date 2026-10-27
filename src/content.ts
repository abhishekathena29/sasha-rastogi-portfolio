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

export const narrative = [
  'Understanding cancer through research.',
  'Translating evidence into accessible interventions.',
  'Taking those interventions into communities.',
]

export const arc = [
  { step: 'Research', text: 'Primary research with 77 Indian cancer patients.' },
  { step: 'Understand', text: 'Distress, disclosure, coping and barriers to care.' },
  { step: 'Design', text: 'The Sahara Kit, comics and myth-busting content.' },
  { step: 'Implement', text: 'Workshops, kit distribution and screening camps.' },
  { step: 'Impact', text: '320+ women reached, 100+ screened, 4 linked to care.' },
]

export const impactStats = [
  { value: '77', label: 'cancer patients in primary research' },
  { value: '320+', label: 'women reached through cancer workshops' },
  { value: '100+', label: 'men & women screened for cancer' },
  { value: '1,000+', label: 'Sahara Kits shipped' },
  { value: '400+', label: 'students & staff reached on HPV' },
  { value: '98%', label: 'CNN accuracy, benign vs malignant' },
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
    'Proposed culturally sensitive psycho-oncology support for Indian patients.',
  ],
  recognition: [
    'Received the CREST Gold Award — British Science Association',
    'Accepted for publication in IJHSS',
    'Presented at the Oxford Global Psychology Conference',
  ],
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
  finding:
    'Men reported a higher risk appetite (M = 3.21) than women (M = 2.53) — a significant gender association (p = .033).',
  recognition: [
    'Presented at the Eurasia Business and Economics Society Conference',
    'Published in the Oxford Journal of Student Scholarship',
  ],
}

export const sahara = {
  role: 'Designer of the Sahara Mindfulness Intervention Kit',
  partner: 'Prashanti — Indian Cancer Society Healing Centre · Partnered with Yuva Unstoppable',
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
  // Kit figures follow the Athena activity list.
  distributed: 14,
  reducedStress: 9,
  shipped: '1,000',
  implementation: [
    {
      title: 'Prashanti pilot',
      text: '14 kits distributed at Prashanti, the Indian Cancer Society’s healing centre; 9 recipients reported reduced stress.',
    },
    {
      title: 'Adopted by the Indian Cancer Society',
      text: 'The Indian Cancer Society adopted the Sahara Kit as part of its patient-support work.',
    },
    {
      title: 'Scaled with Yuva Unstoppable',
      text: 'Partnered with the youth NGO Yuva Unstoppable — 1,000 more kits shipped.',
    },
    {
      title: 'Adapting for student anxiety',
      text: 'The kit is now being adapted to help students manage anxiety.',
    },
  ],
  images: ['/images/sahara-1.jpg', '/images/sahara-2.jpg', '/images/sahara-3.jpg'],
}

export const suraksha = {
  role: 'Founder & Program Lead',
  partners: 'Partnered with the Indian Cancer Society · In collaboration with Yuva Unstoppable',
  summary:
    'A student-led community cancer-awareness platform focused on breast-cancer awareness and early detection — run in partnership with the Indian Cancer Society and in collaboration with Yuva Unstoppable.',
  venues: ['Ivy Apartments', 'Palm Springs', 'Vidya School', 'Vikasa Stitching School'],
  topics: [
    'Early signs and symptoms of breast cancer',
    'Risk factors',
    'Screening and early detection',
    'Busting common cancer myths',
    'Improving health awareness within communities',
  ],
  stats: [
    { value: '320+', label: 'women reached through workshops' },
    { value: '100+', label: 'men & women screened' },
    { value: '4', label: 'diagnosed and linked to care' },
    { value: '1,200', label: 'more screenings booked with ICS' },
  ],
  crowdfund:
    'Crowdfunded ₹2,00,000 to fund cancer screenings for 100+ underprivileged men and women — 4 people diagnosed were linked to care.',
  screeningAgreement:
    'Under a screening agreement with the Indian Cancer Society, 1,200 more screenings have been booked.',
  features: [
    'Featured in The Hindu — Teen Digest: “Confronting Cancer’s Fear Factor”.',
    'Featured in Samvada, the RWA newsletter of Sushant Lok-1 A&B Blocks.',
  ],
  instagram: 'https://www.instagram.com/suraksha_in_pink',
  images: ['/images/suraksha-1.jpg', '/images/suraksha-2.jpg'],
}

export const ics = {
  role: 'Public Health Intern — HPV & Breast Cancer Outreach',
  org: 'Indian Cancer Society',
  groups: [
    {
      title: 'Social Media & Public Health Communication',
      items: [
        'Created a series of HPV and breast-cancer educational comics for ICS social media.',
        'Developed cancer myth-busting content.',
        'Translated accurate health information into accessible, engaging formats.',
        'Extended the reach of awareness information beyond in-person sessions — 1.5K+ views.',
      ],
    },
    {
      title: 'Data & Operations',
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
  assemblies: 3,
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
    'Built a web app that makes a pre-trained Convolutional Neural Network (CNN) publicly accessible.',
    'Enables real-time classification of breast-biopsy images.',
  ],
  metrics: [
    { value: 98, label: 'Benign / malignant accuracy' },
    { value: 94, label: 'Subtype classification accuracy' },
  ],
  skills: ['Machine Learning', 'CNN', 'Medical Imaging', 'Data Analysis', 'Web Development'],
  // Add the live link once the site is ready (the current build only shows placeholders).
  link: '',
}

export const articles = {
  outlet: 'Pangea Society',
  focus: 'AI, Psychology & Neuroscience',
  reach: '100+ Medium readers · featured in Samvada, an RWA newsletter distributing 1 lakh copies monthly',
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
    points: [
      'Completed 6 years of graded Hindustani classical vocal training.',
      'Training includes raags, taals, aalap improvisation and musical theory.',
    ],
  },
  {
    title: 'Western Percussion',
    org: 'Rockschool',
    headline: 'Grade 4 Drums with Distinction',
    points: ['Currently preparing for Grade 5.', 'Performed solos at 2 recitals.'],
  },
]

export const leadership = {
  title: 'Senior Hindi Editor',
  org: 'School Editorial Board',
  summary: 'Sasha progressed through multiple editorial roles over four years.',
  points: [
    'Editing and reviewing student submissions',
    'Managing younger editors',
    'Mentoring Grade 6–10 students',
    'Coordinating with other editorial departments',
    'Contributing to the school magazine Uncensored',
    'Writing for the school IB newsletter',
  ],
}

export const community = {
  title: 'Bachpan Shaala',
  role: 'Volunteer Teacher',
  summary:
    'Sasha teaches 20–25 underprivileged students per session, working with students aged 6–15, and adapts her teaching methods to different age groups and learning levels.',
  stats: [
    { value: '20–25', label: 'students per session' },
    { value: '6–15', label: 'age range' },
  ],
  subjects: ['Mathematics', 'English', 'Problem-solving'],
}

export const featuredPress = {
  outlet: 'The Hindu',
  section: 'Teen Digest · Self Care',
  date: 'October 2026',
  pages: 'pp. 14–15',
  author: 'Sweta Gupta',
  kicker: 'Finding Courage',
  title: 'Confronting Cancer’s Fear Factor',
  standfirst:
    'At 17, Sasha Rastogi has researched the psychological impact of cancer and has run health workshops. Her work asks one question: what makes it easier for people to take the first step?',
  covers: [
    'Her research with AIIMS surveying 77 cancer patients on distress, stigma and disclosure',
    'The Sahara mindfulness kit at the Indian Cancer Society’s Prashanti healing centre',
    'Suraksha in Pink and its screening camp with the Indian Cancer Society',
    'HPV awareness sessions and the breast cancer classification app',
  ],
  quote:
    'If even one person feels less afraid to ask a question, get screened, talk about a health concern, or seek psychological support because of something I have done, that is what I would consider the real impact of my work.',
  // Add a link (or put the PDF in /public and use its path) to show a "Read the article" button.
  link: '',
}

export const awards = [
  { title: 'CREST Gold Award', detail: 'British Science Association — research on the Psychosocial Experience of Cancer Diagnosis', level: 'International' },
  { title: 'AP Scholar', detail: 'Scored 5/5 on 3 APs: Computer Science A, Calculus BC and Psychology', level: 'International' },
  { title: 'Higher Distinction — International Psychology Olympiad', detail: 'Scored 219/300', level: 'International' },
  { title: 'Very High Commendation — John Locke Essay Competition', detail: 'Psychology category · top 17.5%', level: 'International' },
  { title: 'Academic Excellence Awards', detail: 'English Literature, Biology, Chemistry, Physics and Business Studies', level: 'School' },
]

export const media = [
  { type: 'Press', title: 'The Hindu — Teen Digest', detail: 'Featured: “Confronting Cancer’s Fear Factor” · October 2026' },
  { type: 'Publication', title: 'IJHSS', detail: 'Accepted for publication: Psychosocial Experience of Cancer Diagnosis in India' },
  { type: 'Conference', title: 'Oxford Global Psychology Conference', detail: 'Presented: Psychosocial Experience of Cancer Diagnosis in India' },
  { type: 'Publication', title: 'Oxford Journal of Student Scholarship', detail: 'Published: Gender & Investment Risk Appetite' },
  { type: 'Conference', title: 'Eurasia Business and Economics Society Conference', detail: 'Presented: Gender & Investment Risk Appetite' },
  { type: 'Press', title: 'Samvada — RWA newsletter, Sushant Lok-1 A&B Blocks', detail: 'Featured: Suraksha in Pink and a Pangea Society article · 1 lakh copies monthly' },
  { type: 'Collaboration', title: 'Indian Cancer Society', detail: 'Partner for Suraksha in Pink screenings; adopted the Sahara Kit' },
  { type: 'Collaboration', title: 'Yuva Unstoppable', detail: 'HPV awareness campaign, Suraksha in Pink and the Sahara Kit' },
]

export const gallery = [
  { title: 'Suraksha in Pink', items: ['Awareness workshops', 'Community sessions', 'Screening campaign', 'Crowdfunding initiative'], slug: 'suraksha' },
  { title: 'Indian Cancer Society', items: ['Internship', 'Social-media content', 'HPV / breast-cancer comics', 'Campaign material'], slug: 'ics' },
  { title: 'Sahara Kit', items: ['Kit design', 'Individual components', 'Packaging', 'Prashanti distribution', 'Patient-support environment'], slug: 'sahara' },
  { title: 'Research', items: ['Research presentation', 'Conference', 'Research documentation'], slug: 'research' },
  { title: 'HPV Awareness', items: ['KIITJEE School', 'Yuva Unstoppable', 'Awareness presentation'], slug: 'hpv' },
  { title: 'Academic & Extracurricular', items: ['University of Chicago', 'Music performances', 'School editorial board', 'Other academic achievements'], slug: 'academic' },
]

export const contact = {
  email: 'rastogisasha11@gmail.com',
  links: [
    { label: 'Suraksha in Pink — Instagram', href: suraksha.instagram },
    { label: 'ICS Social Media Work', href: ics.link },
    ...(tech.link ? [{ label: 'Breast Cancer Classifier', href: tech.link }] : []),
  ],
}
