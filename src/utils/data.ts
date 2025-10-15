import biker from "@/assets/home/biker.jpeg";
import gadgets from "@/assets/home/Gadgets.jpeg";
import homeAppliances from "@/assets/home/HomeAppliance.jpeg";
import laptop from "@/assets/home/Laptop.jpeg";
import survailance from "@/assets/home/survailance.jpeg";

const HERO_IMAGE_URL = [biker, gadgets, homeAppliances, laptop, survailance];

const PRODUCTS = [
  // ——— Phones ———
  {
    id: "phone1",
    title: "Samsung Galaxy S25 Ultra",
    price: 2000000, // ₦2,000,000
    rating: { 5: 120, 4: 30, 3: 10, 2: 5, 1: 2 },
    description:
      "Flagship Samsung phone with top-tier specs, stylus support, long software updates.",
    specifications: {
      display: "6.9-inch AMOLED, 120Hz",
      chipset: "Snapdragon 8 Elite",
      ram: "12 GB",
      storage: "256 GB",
      cameras: "200MP main + telephoto + ultrawide",
      battery: "5000 mAh",
      os: "Android 15 / One UI 7",
    },
    customerReviews: [
      { user: "Ada", stars: 5, comment: "Fantastic camera and speed." },
      { user: "Ben", stars: 4, comment: "Great phone but bulky." },
    ],
    image: [
      "https://images.unsplash.com/photo-1738830274216-20f63b8a0c02?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U2Ftc3VuZyUyMEdhbGF4eSUyMFMyNSUyMFVsdHJhfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/55/9457104/1.jpg?6650",
    ],
  },
  {
    id: "phone2",
    title: "Xiaomi 15 Ultra",
    price: 1800000,
    rating: { 5: 90, 4: 40, 3: 15, 2: 5, 1: 3 },
    description:
      "Premium Xiaomi flagship with Leica-tuned cameras and fast charging.",
    specifications: {
      display: "6.73-inch AMOLED, 120Hz",
      chipset: "Snapdragon 8 Gen 3",
      ram: "12 GB",
      storage: "256 GB",
      cameras: "50MP quad setup",
      battery: "5000 mAh, 100W charge",
      os: "MIUI 16",
    },
    customerReviews: [
      { user: "Chioma", stars: 5, comment: "Cameras are superb." },
      { user: "Dan", stars: 3, comment: "Battery could last longer." },
    ],
    image: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/13/1978804/1.jpg?4128",
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/03/8778804/3.jpg?4128",
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/03/8778804/2.jpg?4594",
    ],
  },
  {
    id: "phone3",
    title: "Tecno Spark 20 Pro+",
    price: 350000,
    rating: { 5: 60, 4: 80, 3: 30, 2: 10, 1: 5 },
    description:
      "Budget/mid-range phone from Tecno, good balance of specs for everyday use.",
    specifications: {
      display: "6.7-inch FHD+, 120Hz",
      chipset: "MediaTek Helio G99 Ultimate",
      ram: "8 GB",
      storage: "256 GB",
      cameras: "64MP + 8MP + depth",
      battery: "5000 mAh",
      os: "Android 14 / HiOS 14",
    },
    customerReviews: [
      { user: "Emeka", stars: 4, comment: "Solid for the price." },
      {
        user: "Gloria",
        stars: 3,
        comment: "Cam sometimes struggles in low light.",
      },
    ],
    image: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/34/5352604/1.jpg?5890",
    ],
  },

  // ——— Home Appliances ———
  {
    id: "appliance1",
    title: "LG 6kg Front-Load Washing Machine",
    price: 220000,
    rating: { 5: 45, 4: 20, 3: 8, 2: 3, 1: 1 },
    description:
      "Efficient front-load washer with multiple wash modes and energy-saving features.",
    specifications: {
      capacity: "6 kg",
      spinSpeed: "1200 rpm",
      features: ["Inverter Motor", "Delay Start", "Child Lock"],
      dimensions: "595 × 850 × 450 mm",
      warranty: "2 years",
    },
    customerReviews: [
      {
        user: "Ijeoma",
        stars: 5,
        comment: "Cleans clothes perfectly, super quiet.",
      },
      {
        user: "Kalu",
        stars: 4,
        comment: "Good but the detergent drawer is tight.",
      },
    ],
    image: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/26/8227032/1.jpg?5457",
    ],
  },
  {
    id: "appliance2",
    title: "Samsung 300L Double Door Refrigerator",
    price: 380000,
    rating: { 5: 70, 4: 25, 3: 10, 2: 4, 1: 2 },
    description:
      "Spacious double-door fridge with digital inverter compressor and frost free tech.",
    specifications: {
      capacity: "300 L",
      freezer: "Top-freezer",
      features: ["Digital Inverter", "Frost Free", "LED Lighting"],
      dimensions: "600 × 1790 × 670 mm",
      warranty: "3 years",
    },
    customerReviews: [
      {
        user: "Mojisola",
        stars: 5,
        comment: "Very quiet and holds temperature well.",
      },
      { user: "Nkechi", stars: 3, comment: "Door handle feels a bit flimsy." },
    ],
    image: [
      "https://images.samsung.com/is/image/samsung/p6pim/africa_en/rs57dg4000b4gh/gallery/africa-en-rs4000dc-side-by-side-with-large-capacity-rs57dg4000b4gh-544449726?$684_547_PNG$",
      "https://images.samsung.com/is/image/samsung/p6pim/africa_en/rs57dg4000b4gh/gallery/africa-en-rs4000dc-side-by-side-with-large-capacity-rs57dg4000b4gh-544449714?$Q90_684_547_JPG$",
      "https://images.samsung.com/is/image/samsung/p6pim/africa_en/rs57dg4000b4gh/gallery/africa-en-rs4000dc-side-by-side-with-large-capacity-rs57dg4000b4gh-544449715?$Q90_684_547_JPG$",
      "https://images.samsung.com/is/image/samsung/p6pim/africa_en/rs57dg4000b4gh/gallery/africa-en-rs4000dc-side-by-side-with-large-capacity-rs57dg4000b4gh-544449717?$Q90_684_547_JPG$",
      "https://images.samsung.com/is/image/samsung/p6pim/africa_en/rs57dg4000b4gh/gallery/africa-en-rs4000dc-side-by-side-with-large-capacity-rs57dg4000b4gh-544449711?$Q90_684_547_JPG$",
    ],
  },
  {
    id: "appliance3",
    title: "Philips 1.5HP Split Air Conditioner",
    price: 185000,
    rating: { 5: 55, 4: 18, 3: 5, 2: 2, 1: 1 },
    description:
      "Energy efficient split AC with quiet operation and turbo cooling mode.",
    specifications: {
      capacity: "1.5 HP",
      coolingArea: "12–18 m²",
      features: ["Sleep Mode", "Turbo", "Auto Restart"],
      powerConsumption: "≈ 1.1 kW",
      warranty: "2 years",
    },
    customerReviews: [
      {
        user: "Ola",
        stars: 5,
        comment: "Cools fast and uses less electricity.",
      },
      { user: "Chi", stars: 4, comment: "Outdoor unit is a bit loud." },
    ],
    image: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/47/5562092/1.jpg?5839",
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/47/5562092/3.jpg?6169",
    ],
  },

  // ——— Surveillance ———
  {
    id: "surv1",
    title: "Hikvision DS-2CD2143G0-I 4MP Bullet Camera",
    price: 45000,
    rating: { 5: 80, 4: 15, 3: 5, 2: 0, 1: 0 },
    description:
      "Outdoor 4MP bullet security camera with IR night vision and weatherproof casing.",
    specifications: {
      resolution: "4MP (2560×1440)",
      lens: "2.8 mm",
      nightVision: "30 m IR",
      features: ["IP67", "Motion Detection", "ONVIF"],
      power: "12V DC / PoE",
    },
    customerReviews: [
      { user: "Samuel", stars: 5, comment: "Clear video even at night." },
      {
        user: "Titi",
        stars: 4,
        comment: "Good but angle adjustment is stiff.",
      },
    ],
    image: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/93/7073604/1.jpg?4008",
    ],
  },
  {
    id: "surv2",
    title: "Reolink Argus 3 Pro Wire-free Camera",
    price: 55000,
    rating: { 5: 60, 4: 25, 3: 8, 2: 2, 1: 0 },
    description:
      "Battery-powered wireless security camera with solar option and color night vision.",
    specifications: {
      resolution: "2K (2560×1440)",
      lens: "3.6 mm",
      features: ["Battery / Solar", "Color Night Vision", "Smart Motion"],
      connectivity: "WiFi",
      weatherproof: "IP65",
    },
    customerReviews: [
      { user: "Bola", stars: 5, comment: "Easy install, good quality video." },
      {
        user: "Chidi",
        stars: 3,
        comment: "Battery drains faster in rainy season.",
      },
    ],
    image: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/93/7073604/1.jpg?4008",
    ],
  },

  // ——— Bicycles ———
  {
    id: "bike1",
    title: "Giant Escape 3 City Bike",
    price: 220000,
    rating: { 5: 35, 4: 12, 3: 5, 2: 1, 1: 0 },
    description:
      "Versatile hybrid city bike great for commuting and light trails.",
    specifications: {
      frame: "ALUXX aluminium",
      gears: "Shimano 3×8",
      brakes: "V-brake",
      tires: "700×38C",
      weight: "12.5 kg",
    },
    customerReviews: [
      { user: "Femi", stars: 5, comment: "Smooth ride, great value." },
      { user: "Grace", stars: 4, comment: "Seat could be more comfortable." },
    ],
    image: [
      "https://images2.giant-bicycles.com/b_white%2Cc_pad%2Ch_850%2Cq_80/xvdx0npmp6gvbhzbbq4p/MY25Escape3Disc_ColorAUltraNavy.jpg",
    ],
  },
  {
    id: "bike2",
    title: "Trek Marlin 7 Mountain Bike",
    price: 480000,
    rating: { 5: 65, 4: 20, 3: 7, 2: 2, 1: 1 },
    description:
      "Trail-ready mountain bike with front suspension and reliable components.",
    specifications: {
      frame: "Alpha Silver Aluminum",
      suspension: "100 mm fork",
      gears: "Shimano Deore 1×12",
      brakes: "Hydraulic disc",
      tires: "29 × 2.25",
    },
    customerReviews: [
      { user: "Henry", stars: 5, comment: "Handles rough tracks well." },
      {
        user: "Ibrahim",
        stars: 3,
        comment: "Would prefer better tyres stock.",
      },
    ],
    image: [
      "https://images2.giant-bicycles.com/b_white%2Cc_pad%2Ch_850%2Cq_80/xvdx0npmp6gvbhzbbq4p/MY25Escape3Disc_ColorAUltraNavy.jpg",
    ],
  },

  // ——— Laptops & Tablets ———
  {
    id: "laptop1",
    title: 'Apple MacBook Air M2 13"',
    price: 1200000,
    rating: { 5: 150, 4: 20, 3: 5, 2: 2, 1: 1 },
    description:
      "Ultra-slim Apple laptop with M2 chip, excellent battery life and performance.",
    specifications: {
      display: "13.6-inch Retina",
      chipset: "Apple M2",
      ram: "8 GB (unified)",
      storage: "512 GB SSD",
      ports: ["2× Thunderbolt / USB4"],
      battery: "18 hours",
    },
    customerReviews: [
      { user: "Joy", stars: 5, comment: "Silent, fast, love the battery." },
      { user: "Kelvin", stars: 4, comment: "Would like more USB ports." },
    ],
    image: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/46/2679312/1.jpg?4011",
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/46/2679312/2.jpg?4011",
    ],
  },
  {
    id: "laptop2",
    title: "Dell XPS 15 (2025)",
    price: 1500000,
    rating: { 5: 80, 4: 25, 3: 10, 2: 2, 1: 1 },
    description:
      "High-end Windows laptop with premium display, performance and build.",
    specifications: {
      display: "15.6-inch 3.5K OLED",
      cpu: "Intel Core i7-1480P",
      ram: "16 GB",
      storage: "1 TB SSD",
      gpu: "NVIDIA RTX 4050",
      battery: "86 Wh",
    },
    customerReviews: [
      { user: "Leah", stars: 5, comment: "Stunning screen and power." },
      { user: "Mike", stars: 3, comment: "Runs warm under load." },
    ],
    image: [
      "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-15-9530/media-gallery/touch-black/notebook-xps-15-9530-t-black-gallery-1.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=654&qlt=100,1&resMode=sharp2&size=654,402&chrss=full",
      "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-15-9530/media-gallery/touch-black/notebook-xps-15-9530-t-black-gallery-4.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=677&qlt=100,1&resMode=sharp2&size=677,402&chrss=full",
    ],
  },
  {
    id: "tablet1",
    title: "Apple iPad Air (6th Gen)",
    price: 850000,
    rating: { 5: 110, 4: 30, 3: 7, 2: 2, 1: 1 },
    description:
      "Lightweight tablet with M2 chip — perfect for productivity and media use.",
    specifications: {
      display: "11-inch Liquid Retina",
      chipset: "Apple M2",
      ram: "8 GB",
      storage: "256 GB",
      connectivity: ["WiFi 6E", "USB-C"],
      battery: "10 hours",
    },
    customerReviews: [
      {
        user: "Nneka",
        stars: 5,
        comment: "Perfect for sketching and reading.",
      },
      { user: "Obinna", stars: 4, comment: "Wish it had more ports." },
    ],
    image: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/64/8485814/1.jpg?6219",
    ],
  },

  // ——— Smart Watches ———
  {
    id: "watch1",
    title: "Apple Watch Series 10",
    price: 780000,
    rating: { 5: 140, 4: 25, 3: 6, 2: 3, 1: 2 },
    description:
      "Next-gen Apple smartwatch with health sensors, longer battery, and deeper system integration.",
    specifications: {
      display: "1.9-inch always-on LTPO OLED",
      sensors: ["ECG", "SpO2", "Temperature", "Fall Detection"],
      battery: "18 hours",
      connectivity: ["GPS", "Cellular optional", "WiFi", "Bluetooth"],
      waterResistance: "50 m",
    },
    customerReviews: [
      { user: "Pat", stars: 5, comment: "Great watch for fitness & calls." },
      { user: "Queen", stars: 4, comment: "Battery lasts a day, not more." },
    ],
    image: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/32/9434883/1.jpg?6357",
    ],
  },
  {
    id: "watch2",
    title: "Samsung Galaxy Watch 7",
    price: 650000,
    rating: { 5: 90, 4: 35, 3: 12, 2: 5, 1: 1 },
    description:
      "Samsung’s latest smartwatch with strong battery life, health tracking, and solid app support.",
    specifications: {
      display: "1.6-inch Super AMOLED",
      sensors: ["ECG", "Blood Pressure", "Sleep Tracking"],
      battery: "2 days",
      connectivity: ["GPS", "LTE optional", "WiFi", "Bluetooth"],
      waterResistance: "50 m",
    },
    customerReviews: [
      { user: "Sammy", stars: 5, comment: "Very accurate and good battery." },
      {
        user: "Tunde",
        stars: 3,
        comment: "App support is still behind Apple.",
      },
    ],
    image: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/67/4600173/1.jpg?0247",
    ],
  },
];

export { HERO_IMAGE_URL, PRODUCTS };
