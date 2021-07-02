import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://trenderswap-front-end.vercel.app/',
  },
   {
        label: 'Exchange',
        icon: 'TradeIcon',
        href: 'https://pancake-swap-interface-v1-trenderswap.vercel.app/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://pancake-swap-interface-v1-trenderswap.vercel.app/#/pool',
      },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://trenderswap-front-end.vercel.app/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://trenderswap-front-end.vercel.app/pools',
  },
  {
    label: 'Collectibles',
    icon: 'NftIcon',
    href: 'https://trenderswap-front-end.vercel.app/nft',
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://trenderswap.info',
      },
      {
        label: 'Tokens',
        href: 'https://trenderswap.info/tokens',
      },
      {
        label: 'Pairs',
        href: 'https://pancakeswap.info/pairs',
      },
      {
        label: 'Accounts',
        href: 'https://pancakeswap.info/accounts',
      },
    ],
  },
  {
    label: 'IFO',
    icon: 'IfoIcon',
    href: 'https://pancakeswap.finance/ifo',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Contact',
        href: 'https://docs.pancakeswap.finance/contact-us',
      },
      {
        label: 'Voting',
        href: 'https://voting.pancakeswap.finance',
      },
      {
        label: 'Github',
        href: 'https://github.com/pancakeswap',
      },
      {
        label: 'Docs',
        href: 'https://docs.pancakeswap.finance',
      },
      {
        label: 'Blog',
        href: 'https://pancakeswap.medium.com',
      },
      {
        label: 'Merch',
        href: 'https://pancakeswap.creator-spring.com/',
      },
    ],
  },
]

export default config
