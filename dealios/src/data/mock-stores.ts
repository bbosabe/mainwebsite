export interface Store {
  id: string
  name: string
  address: string
  city: string
  province: 'BC' | 'AB'
  phone: string
  hours: {
    weekdays: string
    saturday: string
    sunday: string
  }
  mapUrl: string
}

export const MOCK_STORES: Store[] = [
  {
    id: 'surrey-bc',
    name: 'Dealios Surrey',
    address: '7250 King George Blvd, Unit 102',
    city: 'Surrey',
    province: 'BC',
    phone: '(604) 555-0194',
    hours: {
      weekdays: 'Mon–Fri: 9:00 AM – 8:00 PM',
      saturday: 'Sat: 9:00 AM – 7:00 PM',
      sunday: 'Sun: 10:00 AM – 6:00 PM',
    },
    mapUrl: 'https://maps.google.com',
  },
  {
    id: 'burnaby-bc',
    name: 'Dealios Burnaby',
    address: '4440 Kingsway, Unit 205',
    city: 'Burnaby',
    province: 'BC',
    phone: '(604) 555-0271',
    hours: {
      weekdays: 'Mon–Fri: 9:00 AM – 8:00 PM',
      saturday: 'Sat: 9:00 AM – 7:00 PM',
      sunday: 'Sun: 10:00 AM – 6:00 PM',
    },
    mapUrl: 'https://maps.google.com',
  },
  {
    id: 'calgary-ab',
    name: 'Dealios Calgary',
    address: '3625 Shaganappi Trail NW',
    city: 'Calgary',
    province: 'AB',
    phone: '(403) 555-0388',
    hours: {
      weekdays: 'Mon–Fri: 9:00 AM – 8:00 PM',
      saturday: 'Sat: 9:00 AM – 7:00 PM',
      sunday: 'Sun: 10:00 AM – 6:00 PM',
    },
    mapUrl: 'https://maps.google.com',
  },
]
