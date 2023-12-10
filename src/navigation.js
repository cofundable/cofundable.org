import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'How it works',
      href: getPermalink('#how-it-works'),
    },
    {
      text: 'Solutions',
      links: [
        {
          text: 'Open source projects',
          href: getPermalink('#open-source'),
        },
        {
          text: 'Community initiatives',
          href: getPermalink('#community-initiative'),
        },
        {
          text: 'Nonprofits',
          href: getPermalink('#nonprofit'),
        },
        {
          text: 'Local philanthropy',
          href: getPermalink('#philanthropy'),
        },
      ],
    },
    {
      text: 'Features',
      href: getPermalink('#features'),
    },
  ],
  actions: [{ text: 'Follow us', href: 'https://github.com/cofundable/cofundable', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'How it works', href: getPermalink('#how-it-works') },
        { text: 'Features', href: getPermalink('#features') },
        { text: 'Roadmap', href: 'https://github.com/orgs/cofundable/projects/1' },
        { text: '' },
      ],
    },
    {
      title: 'Community',
      links: [
        { text: 'Open source', href: 'https://github.com/cofundable/cofundable' },
        { text: 'Discussions', href: 'https://github.com/orgs/cofundable/discussions' },
        { text: 'Report an issue', href: 'https://github.com/cofundable/cofundable/issues/new/choose' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://twitter.com/cofundableorg' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/cofundable/' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/cofundable/cofundable' },
  ],
  footNote: 'Copyright Cofundable 2023',
};
