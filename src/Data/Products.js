const products = [

  {
    code: 'IT-3103',
    name: 'Lithium Complex Grease',
    category: 'greases',
    application: 'Heavy-duty bearings and industrial equipment',
    prices: [
      { pack: '1 Kg', price: '₹1,230' },
      { pack: '5 Kg', price: '₹5,300' }
    ]
  },

  {
    code: 'IT-3105',
    name: 'High Performance Moly Grease',
    category: 'greases',
    application: 'Heavy-duty industrial lubrication',
    prices: [
      { pack: '1 Kg', price: '₹1,350' },
      { pack: '5 Kg', price: '₹5,450' }
    ]
  },

  {
    code: 'IT-3309',
    name: 'Synthetic Grease for Plastic Components',
    category: 'greases',
    application: 'High-speed bearings, precision equipment, continuous-duty machinery',
    prices: [
      { pack: '1 Kg', price: '₹1,915' },
      { pack: '5 Kg', price: '₹8,650' }
    ]
  },

  {
    code: 'IT-4305',
    name: 'White Multipurpose Grease',
    category: 'greases',
    application: 'General industrial maintenance',
    prices: [
      { pack: '1 Kg', price: '₹1,960' },
      { pack: '5 Kg', price: '₹8,660' }
    ]
  },

  {
    code: 'IT-4337',
    name: 'High Performance Polyurea Grease',
    category: 'greases',
    application: 'Electric motor bearings and long-life lubrication',
    prices: [
      { pack: '1 Kg', price: '₹2,075' },
      { pack: '20 Kg', price: '₹26,850' }
    ]
  },

  {
    code: 'IT-4312',
    name: 'Synthetic High Temperature Grease',
    category: 'greases',
    application: 'Ovens, furnaces, high-temperature bearings',
    prices: [
      { pack: '1 Kg', price: '₹2,150' },
      { pack: '5 Kg', price: '₹8,320' },
      { pack: '20 Kg', price: '₹27,850' }
    ]
  },

  {
    code: 'IT-3108',
    name: 'Graphite Grease & Wire Rope Lubricant',
    category: 'greases',
    application: 'Wire ropes, cranes, hoists',
    prices: [
      { pack: 'Bucket', price: '₹8,285' },
      { pack: '20 Kg', price: '₹28,300' }
    ]
  },

  {
    code: 'IT-4308',
    name: 'Synthetic High-Speed Grease',
    category: 'greases',
    application: 'High-speed bearings and precision machinery',
    prices: [
      { pack: '1 Kg', price: '₹3,030' }
    ]
  },


  // INDUSTRIAL OILS

  {
    code: 'IT-5000',
    name: 'Mineral Hydraulic Fluids',
    category: 'oils',
    application: 'Hydraulic systems',
    prices: [
      { pack: '5 Ltr', price: '₹5,350' },
      { pack: '20 Ltr', price: '₹16,950' }
    ]
  },

  {
    code: 'IT-6000',
    name: 'Synthetic PAO Gear Oils',
    category: 'oils',
    application: 'Industrial gear systems',
    prices: [
      { pack: '5 Ltr', price: '₹12,600' }
    ]
  },

  {
    code: 'IT-3406',
    name: 'Vacuum Pump Fluid',
    category: 'oils',
    application: 'Vacuum pumps',
    prices: [
      { pack: '1 Ltr', price: '₹2,140' }
    ]
  },

  {
    code: 'IT-3407',
    name: 'Vacuum Pump Fluid',
    category: 'oils',
    application: 'Vacuum pumps',
    prices: [
      { pack: '5 Ltr', price: '₹5,900' },
      { pack: '20 Ltr', price: '₹18,300' }
    ]
  },

  {
    code: 'IT-7400',
    name: 'High Temperature Chain Oil',
    category: 'oils',
    application: 'Industrial chain lubrication',
    prices: [
      { pack: '5 Ltr', price: '₹9,350' }
    ]
  },

  {
    code: 'IT-7483',
    name: 'High Temperature Chain Oil',
    category: 'oils',
    application: 'Industrial chain lubrication',
    prices: [
      { pack: '1 Ltr', price: '₹2,600' },
      { pack: '5 Ltr', price: '₹9,850' }
    ]
  },

  {
    code: 'IT-7488',
    name: 'High Temperature Chain Oil',
    category: 'oils',
    application: 'Industrial chain lubrication',
    prices: [
      { pack: '1 Ltr', price: '₹5,220' },
      { pack: '5 Ltr', price: '₹18,350' }
    ]
  },

  {
    code: 'IT-2507',
    name: 'Vanishing Stamping Oil',
    category: 'oils',
    application: 'Metal forming and sheet metal operations',
    prices: [
      { pack: '5 Ltr', price: '₹7,590' },
      { pack: '20 Ltr', price: '₹19,040' }
    ]
  },

  {
    code: 'IT-7497',
    name: 'High Temperature Adhesive Chain Lubricant',
    category: 'oils',
    application: 'High-temperature chain applications',
    prices: [
      { pack: '5 Ltr', price: '₹6,640' }
    ]
  },


  // INDUSTRIAL SPRAYS

  {
    code: 'IT-1094',
    name: 'Multifunctional Fluid Spray',
    category: 'sprays',
    application: 'Industrial maintenance applications',
    prices: [
      { pack: '500 Ml', price: '₹460' }
    ]
  },

  {
    code: 'IT-1089',
    name: 'Cleaner & Degreaser Spray',
    category: 'sprays',
    application: 'Industrial cleaning and degreasing',
    prices: [
      { pack: '450 Ml', price: '₹620' }
    ]
  },

  {
    code: 'IT-1085',
    name: 'Dry Moly Bonded Lubricant Coating Spray',
    category: 'sprays',
    application: 'Lubrication and protective coating applications',
    prices: [
      { pack: '500 Ml', price: '₹1,580' }
    ]
  },

  {
    code: 'IT-1097',
    name: 'High Temperature Adhesive Chain Lubricant Spray',
    category: 'sprays',
    application: 'High-temperature chain lubrication',
    prices: [
      { pack: '500 Ml', price: '₹660' }
    ]
  },

  {
    code: 'IT-1099',
    name: 'Offline Electrical Contact Cleaner Spray',
    category: 'sprays',
    application: 'Electrical contact cleaning',
    prices: [
      { pack: '500 Ml', price: '₹640' }
    ]
  },

  {
    code: 'IT-1103',
    name: 'Silicone Mold Release Spray',
    category: 'sprays',
    application: 'Mold release applications',
    prices: [
      { pack: '500 Ml', price: '₹420' }
    ]
  },

  {
    code: 'IT-1105',
    name: 'Bright Cold Galvanising Zinc Spray',
    category: 'sprays',
    application: 'Galvanising and protective coating applications',
    prices: [
      { pack: '500 Ml', price: '₹680' }
    ]
  }

]

export default products