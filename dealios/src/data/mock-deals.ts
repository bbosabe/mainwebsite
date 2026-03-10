export interface Deal {
  id: string
  title: string
  category: string
  originalPrice: number
  dealPrice: number
  tagType: 'green' | 'red' | 'purple' | 'blue'
  tagLabel: string
}

export const MOCK_DEALS: Deal[] = [
  {
    id: '1',
    title: 'Dyson V11 Cordless Vacuum',
    category: 'Small Appliances',
    originalPrice: 699,
    dealPrice: 349,
    tagType: 'green',
    tagLabel: '50% OFF',
  },
  {
    id: '2',
    title: 'KitchenAid Stand Mixer',
    category: 'Small Appliances',
    originalPrice: 499,
    dealPrice: 149,
    tagType: 'purple',
    tagLabel: '70% OFF',
  },
  {
    id: '3',
    title: 'Decorative Throw Pillow Set',
    category: 'Home Decor',
    originalPrice: 45,
    dealPrice: 2,
    tagType: 'red',
    tagLabel: '$2 DEAL',
  },
  {
    id: '4',
    title: 'Samsung 65" 4K QLED TV',
    category: 'Electronics',
    originalPrice: 1899,
    dealPrice: 669,
    tagType: 'purple',
    tagLabel: '70% OFF',
  },
  {
    id: '5',
    title: 'Nike Running Shoes (Size 10)',
    category: 'Clothing',
    originalPrice: 130,
    dealPrice: 39,
    tagType: 'blue',
    tagLabel: 'AS MARKED',
  },
  {
    id: '6',
    title: 'Instant Pot 8-Qt Pressure Cooker',
    category: 'Small Appliances',
    originalPrice: 199,
    dealPrice: 2,
    tagType: 'red',
    tagLabel: '$2 DEAL',
  },
]

export const DEAL_OF_THE_DAY: Deal = MOCK_DEALS[3]
