export const sidebarLinks = [
  {
    title: 'Laptops',
  },
  {
    title: 'Desktop PCs',
    submenu: [
      {
        title: 'Custom PCs',
        href: '/',
      },
      {
        title: 'Servers',
        href: '/',
      },
      {
        title: 'MSI All-In-One PCs',
        href: '/',
      },
      {
        title: 'HP/Compaq PCs',
        href: '/',
      },
      {
        title: 'ASUS PCs',
        href: '/',
      },
      {
        title: 'TECHs PCs',
        href: '/',
      },
    ],
  },
  {
    title: 'Networking Devices',
    href: '/',
  },
  {
    title: 'Printers & Scanners',
    href: '/',
  },
  {
    title: 'PC Parts',
    href: '/',
  },
  {
    title: 'All Other Products',
    href: '/',
  },
  {
    title: 'Repairs',
    href: '/',
  },
]

export interface IHeroImages {
  src: string
}

export const heroSlideImages: Array<IHeroImages> = [
  {
    src: '/assets/images/hero-product.png',
  },
  {
    src: '/assets/images/hero-product.png',
  },
  {
    src: '/assets/images/hero-product.png',
  },
]

export interface IProduct {
  image: string
  name: string
  reviews: number
  before_price: number
  new_price: number
  isStock: boolean
}

export const newProducts: Array<IProduct> = [
  {
    image: '/assets/new-products/product1.svg',
    name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
    reviews: 4,
    before_price: 890.0,
    new_price: 499.0,
    isStock: true,
  },
  {
    image: '/assets/new-products/product2.svg',
    name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
    reviews: 1,
    before_price: 690.0,
    new_price: 599.0,
    isStock: false,
  },
  {
    image: '/assets/new-products/product3.svg',
    name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
    reviews: 3,
    before_price: 490.0,
    new_price: 329.0,
    isStock: true,
  },
  {
    image: '/assets/new-products/product4.svg',
    name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
    reviews: 0,
    before_price: 990.0,
    new_price: 699.0,
    isStock: true,
  },
  {
    image: '/assets/new-products/product1.svg',
    name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
    reviews: 4,
    before_price: 890.0,
    new_price: 499.0,
    isStock: true,
  },
  {
    image: '/assets/new-products/product2.svg',
    name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
    reviews: 4,
    before_price: 690.0,
    new_price: 599.0,
    isStock: false,
  },
  {
    image: '/assets/new-products/product3.svg',
    name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
    reviews: 3,
    before_price: 490.0,
    new_price: 329.0,
    isStock: true,
  },
  {
    image: '/assets/new-products/product4.svg',
    name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
    reviews: 5,
    before_price: 990.0,
    new_price: 699.0,
    isStock: true,
  },
]

export const customBuilds: IProduct[] = [
  {
    image: '/assets/custom-builds/charlie-v6.svg',
    name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
    reviews: 4,
    before_price: 499.0,
    new_price: 499.0,
    isStock: true,
  },
  {
    image: '/assets/custom-builds/bravo-v6.svg',
    name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
    reviews: 4,
    before_price: 499.0,
    new_price: 499.0,
    isStock: true,
  },
  {
    image: '/assets/custom-builds/alpha-v6.svg',
    name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
    reviews: 4,
    before_price: 499.0,
    new_price: 499.0,
    isStock: true,
  },
  {
    image: '/assets/custom-builds/zulu-v6.svg',
    name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
    reviews: 4,
    before_price: 499.0,
    new_price: 499.0,
    isStock: true,
  },
  {
    image: '/assets/custom-builds/delta-v6.svg',
    name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
    reviews: 4,
    before_price: 499.0,
    new_price: 499.0,
    isStock: true,
  },
  {
    image: '/assets/custom-builds/charlie-v6.svg',
    name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
    reviews: 4,
    before_price: 499.0,
    new_price: 499.0,
    isStock: true,
  },
  {
    image: '/assets/custom-builds/bravo-v6.svg',
    name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
    reviews: 4,
    before_price: 499.0,
    new_price: 499.0,
    isStock: true,
  },
  {
    image: '/assets/custom-builds/alpha-v6.svg',
    name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
    reviews: 4,
    before_price: 499.0,
    new_price: 499.0,
    isStock: true,
  },
  {
    image: '/assets/custom-builds/zulu-v6.svg',
    name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
    reviews: 4,
    before_price: 499.0,
    new_price: 499.0,
    isStock: true,
  },
  {
    image: '/assets/custom-builds/delta-v6.svg',
    name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
    reviews: 4,
    before_price: 499.0,
    new_price: 499.0,
    isStock: true,
  },
]

export const msiLaptops: IProduct[] = [
  {
    image: '/assets/msi-laptops/laptop1.svg',
    name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
    reviews: 4,
    before_price: 499.0,
    new_price: 499.0,
    isStock: true,
  },
  {
    image: '/assets/msi-laptops/laptop2.svg',
    name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
    reviews: 4,
    before_price: 499.0,
    new_price: 499.0,
    isStock: true,
  },
  {
    image: '/assets/msi-laptops/laptop3.svg',
    name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
    reviews: 4,
    before_price: 499.0,
    new_price: 499.0,
    isStock: true,
  },
  {
    image: '/assets/msi-laptops/laptop4.svg',
    name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
    reviews: 4,
    before_price: 499.0,
    new_price: 499.0,
    isStock: true,
  },
  {
    image: '/assets/msi-laptops/laptop5.svg',
    name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
    reviews: 4,
    before_price: 499.0,
    new_price: 499.0,
    isStock: true,
  },
  {
    image: '/assets/msi-laptops/laptop1.svg',
    name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
    reviews: 4,
    before_price: 499.0,
    new_price: 499.0,
    isStock: true,
  },
  {
    image: '/assets/msi-laptops/laptop2.svg',
    name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
    reviews: 4,
    before_price: 499.0,
    new_price: 499.0,
    isStock: true,
  },
  {
    image: '/assets/msi-laptops/laptop3.svg',
    name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
    reviews: 4,
    before_price: 499.0,
    new_price: 499.0,
    isStock: true,
  },
  {
    image: '/assets/msi-laptops/laptop4.svg',
    name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
    reviews: 4,
    before_price: 499.0,
    new_price: 499.0,
    isStock: true,
  },
  {
    image: '/assets/msi-laptops/laptop5.svg',
    name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
    reviews: 4,
    before_price: 499.0,
    new_price: 499.0,
    isStock: true,
  },
]

export interface ITab {
  title: string
}

export const msiTabs: ITab[] = [
  {
    title: 'MSI GS Series',
  },
  {
    title: 'MSI GT Series',
  },
  {
    title: 'MSI GL Series',
  },
  {
    title: 'MSI GE Series',
  },
]

export const desktopTabs: ITab[] = [
  {
    title: 'MSI Infinute0',
  },
  {
    title: 'MSI Triden',
  },
  {
    title: 'MSI GL Series',
  },
  {
    title: 'MSI Nightblade',
  },
]

export const desktops: IProduct[] = [
  {
    image: '/assets/desktops/desktop1.svg',
    name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
    reviews: 4,
    before_price: 499.0,
    new_price: 499.0,
    isStock: true,
  },
  {
    image: '/assets/desktops/desktop2.svg',
    name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
    reviews: 4,
    before_price: 499.0,
    new_price: 499.0,
    isStock: true,
  },
  {
    image: '/assets/desktops/desktop2.svg',
    name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
    reviews: 4,
    before_price: 499.0,
    new_price: 499.0,
    isStock: true,
  },
  {
    image: '/assets/desktops/desktop2.svg',
    name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
    reviews: 4,
    before_price: 499.0,
    new_price: 499.0,
    isStock: true,
  },
  {
    image: '/assets/desktops/desktop2.svg',
    name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
    reviews: 4,
    before_price: 499.0,
    new_price: 499.0,
    isStock: true,
  },
  {
    image: '/assets/desktops/desktop2.svg',
    name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
    reviews: 4,
    before_price: 499.0,
    new_price: 499.0,
    isStock: true,
  },
  {
    image: '/assets/desktops/desktop2.svg',
    name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
    reviews: 4,
    before_price: 499.0,
    new_price: 499.0,
    isStock: true,
  },
  {
    image: '/assets/desktops/desktop2.svg',
    name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
    reviews: 4,
    before_price: 499.0,
    new_price: 499.0,
    isStock: true,
  },
  {
    image: '/assets/desktops/desktop2.svg',
    name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
    reviews: 4,
    before_price: 499.0,
    new_price: 499.0,
    isStock: true,
  },
  {
    image: '/assets/desktops/desktop2.svg',
    name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
    reviews: 4,
    before_price: 499.0,
    new_price: 499.0,
    isStock: true,
  },
]

export const monitors: IProduct[] = [
  {
    image: '/assets/gaming-monitors/monitor1.svg',
    name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
    reviews: 4,
    before_price: 499.0,
    new_price: 499.0,
    isStock: true,
  },
  {
    image: '/assets/gaming-monitors/monitor2.svg',
    name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
    reviews: 4,
    before_price: 499.0,
    new_price: 499.0,
    isStock: true,
  },
  {
    image: '/assets/gaming-monitors/monitor3.svg',
    name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
    reviews: 4,
    before_price: 499.0,
    new_price: 499.0,
    isStock: true,
  },
  {
    image: '/assets/gaming-monitors/monitor4.svg',
    name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
    reviews: 4,
    before_price: 499.0,
    new_price: 499.0,
    isStock: true,
  },
  {
    image: '/assets/gaming-monitors/monitor5.svg',
    name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
    reviews: 4,
    before_price: 499.0,
    new_price: 499.0,
    isStock: true,
  },
  {
    image: '/assets/gaming-monitors/monitor1.svg',
    name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
    reviews: 4,
    before_price: 499.0,
    new_price: 499.0,
    isStock: true,
  },
  {
    image: '/assets/gaming-monitors/monitor2.svg',
    name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
    reviews: 4,
    before_price: 499.0,
    new_price: 499.0,
    isStock: true,
  },
  {
    image: '/assets/gaming-monitors/monitor3.svg',
    name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
    reviews: 4,
    before_price: 499.0,
    new_price: 499.0,
    isStock: true,
  },
  {
    image: '/assets/gaming-monitors/monitor4.svg',
    name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
    reviews: 4,
    before_price: 499.0,
    new_price: 499.0,
    isStock: true,
  },
  {
    image: '/assets/gaming-monitors/monitor5.svg',
    name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
    reviews: 4,
    before_price: 499.0,
    new_price: 499.0,
    isStock: true,
  },
]

export const companies: Array<{ src: string }> = [
  {
    src: '/assets/companies/roccat.svg',
  },
  {
    src: '/assets/companies/msi.svg',
  },
  {
    src: '/assets/companies/razer.svg',
  },
  {
    src: '/assets/companies/thermaltake.svg',
  },
  {
    src: '/assets/companies/adata.svg',
  },
  {
    src: '/assets/companies/hewlett.svg',
  },
  {
    src: '/assets/companies/gigabyte.svg',
  },
]

export interface IFooter {
  title: string
  links?: Array<{
    title: string
    href: string
  }>
  address?: Object
}

export const footerLinks: IFooter[] = [
  {
    title: 'Information',
    links: [
      {
        title: 'About Us',
        href: '/',
      },
      {
        title: 'About Zip',
        href: '/',
      },
      {
        title: 'Privacy Policy',
        href: '/',
      },
      {
        title: 'Search',
        href: '/',
      },
      {
        title: 'Terms',
        href: '/',
      },
      {
        title: 'Orders and Returns',
        href: '/',
      },
      {
        title: 'Contact Us',
        href: '/',
      },
      {
        title: 'Advanced Search',
        href: '/',
      },
      {
        title: 'Newsletter Subscription',
        href: '/',
      },
    ],
  },
  {
    title: 'PC Parts',
    links: [
      {
        title: 'CPUS',
        href: '/',
      },
      {
        title: 'Add On Cards',
        href: '/',
      },
      {
        title: 'Hard Drives (Internal)',
        href: '/',
      },
      {
        title: 'Graphics Cards',
        href: '/',
      },
      {
        title: 'Keyboards / Mice',
        href: '/',
      },
      {
        title: 'Cases / Power Supplies / Cooling',
        href: '/',
      },
      {
        title: 'RAM (Memory)',
        href: '/',
      },
      {
        title: 'Software',
        href: '/',
      },
      {
        title: 'Speaker / Headsets',
        href: '/',
      },
      {
        title: 'Motherboards',
        href: '/',
      },
    ],
  },
  {
    title: 'Desktop PCs',
    links: [
      {
        title: 'Custom PCs',
        href: '/',
      },
      {
        title: 'Servers',
        href: '/',
      },
      {
        title: 'MSI All-in-One PCs',
        href: '/',
      },
      {
        title: 'HP/Compaq PCs',
        href: '/',
      },
      {
        title: 'ASUS PCs',
        href: '/',
      },
      {
        title: 'Tecs PCs',
        href: '/',
      },
    ],
  },
  {
    title: 'Laptops',
    links: [
      {
        title: 'Evryday Use Notebooks',
        href: '/',
      },
      {
        title: 'MSI Workstation Series',
        href: '/',
      },
      {
        title: 'MSI Prestige Series',
        href: '/',
      },
      {
        title: 'Tablets and Pads',
        href: '/',
      },
      {
        title: 'Netbooks',
        href: '/',
      },
      {
        title: 'Infinity Gaming Notebooks',
        href: '/',
      },
    ],
  },
  {
    title: 'Address',
    address: {
      location: '1234 Street Address City',
      phones: '(00) 1234 5678',
      dailySchedule: 'We are open: Monday-Thursday: 9:00 AM - 5:30 PM',
      fridaySchedule: '9:00 AM - 6:00 PM',
      saturdaySchedule: '11:00 AM - 5:00 PM',
      email: 'shop@gmail.com',
    },
  },
]

export const paymentLogos = [
  '/assets/payment-method/paypal.svg',
  '/assets/payment-method/visa.svg',
  '/assets/payment-method/maestro.svg',
  '/assets/payment-method/discover.svg',
  '/assets/payment-method/american-express.svg',
]

export interface IService {
  title: string
  description: string
  image: string
}

export const services: IService[] = [
  {
    title: 'Product Support',
    description:
      'Up to 3 years on-site warranty available for your peace of mind.',
    image: '/assets/services/audio.svg',
  },
  {
    title: 'Personal Account',
    description:
      'With big discounts, free delivery and a dedicated support specialist.',
    image: '/assets/services/user.svg',
  },
  {
    title: 'Amazing Savings',
    description:
      'Up to 70% off new Products, you can be sure of the best price.',
    image: '/assets/services/price-tag.svg',
  },
]