// Page titles follow the "Suggested Website Sections" in the brief.
// Order follows the storytelling arc and drives the "next page" links.
export const pages = [
  { path: '/', title: 'Home' },
  { path: '/about', title: 'About Sasha' },
  { path: '/research', title: 'Research' },
  { path: '/cancer-public-health', title: 'Cancer & Public Health' },
  { path: '/suraksha-in-pink', title: 'Suraksha in Pink' },
  { path: '/sahara-kit', title: 'The Sahara Kit' },
  { path: '/hpv-cancer-prevention', title: 'HPV & Cancer Prevention' },
  { path: '/technology-innovation', title: 'Technology & Innovation' },
  { path: '/publications', title: 'Publications' },
  { path: '/academic-journey', title: 'Academic Journey' },
  { path: '/arts-leadership', title: 'Arts & Leadership' },
  { path: '/media-recognition', title: 'Media & Recognition' },
  { path: '/gallery', title: 'Gallery' },
  { path: '/contact', title: 'Contact' },
] as const

export type PagePath = (typeof pages)[number]['path']

export const pageByPath = (path: string) => pages.find((p) => p.path === path)

// Top-level navigation. Each parent is a page; children open in a dropdown.
export const navGroups: { path: PagePath; children?: PagePath[] }[] = [
  { path: '/about', children: ['/academic-journey', '/arts-leadership'] },
  { path: '/research', children: ['/technology-innovation', '/publications'] },
  {
    path: '/cancer-public-health',
    children: ['/suraksha-in-pink', '/sahara-kit', '/hpv-cancer-prevention'],
  },
  { path: '/media-recognition', children: ['/gallery'] },
  { path: '/contact' },
]
