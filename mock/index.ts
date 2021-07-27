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
