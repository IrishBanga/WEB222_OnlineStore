/**
 * products.js
 *
 * The store's products are defined as an Array of product Objects.
 * Each product Object includes the following properties:
 *
 *  - id: String, a unique product identifier (e.g., "P1", "P2")
 *  - title: String, a short name for the product (e.g., "Gingerbread Cookie")
 *  - description: String, a description of the product
 *  - price: Number, the unit price of the item in whole cents (e.g., 100 = $1.00, 5379 = $53.79)
 *  - discontinued: Boolean, whether or not the product has been discontinued
 *  - categories: Array, the category id or ids to which this product belongs (e.g., ["c1"] or ["c1", "c2"])
 */

window.products = [
  {
    id: "P001",
    title: "Sports Steering Wheel",
    description: "A premium sports steering wheel for enhanced grip and control.",
    price: 15999,
    discontinued: false,
    categories: ["interior"],
    imageUrl:
      "https://p1.pxfuel.com/preview/329/761/280/ford-mustang-steering-wheel-tachometer-oldtimer-dashboard-armature.jpg"
  },
  {
    id: "P002",
    title: "Carbon Fiber Spoiler",
    description: "A lightweight and stylish carbon fiber spoiler for improved aerodynamics.",
    price: 24999,
    discontinued: false,
    categories: ["exterior"],
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/BMW_M8_GTE_endurance_race_car_in_front_of_Tyrolian_mountains_-_photomontage.jpg/640px-BMW_M8_GTE_endurance_race_car_in_front_of_Tyrolian_mountains_-_photomontage.jpg"
  },
  {
    id: "P003",
    title: "Performance Exhaust System",
    description: "A high-performance exhaust system for increased power and aggressive sound.",
    price: 36999,
    discontinued: false,
    categories: ["exhaust", "performance"],
    imageUrl: "https://p1.pxfuel.com/preview/95/755/615/porsche-exhaust-auto-environment.jpg"
  },
  {
    id: "P004",
    title: "LED Headlights",
    description: "Upgrade your headlights with bright and efficient LED bulbs.",
    price: 7999,
    discontinued: false,
    categories: ["lighting"],
    imageUrl: "https://cdn.pixabay.com/photo/2017/06/30/18/09/headlight-2459090_1280.jpg"
  },
  {
    id: "P005",
    title: "Alloy Wheels Set",
    description:
      "Set of four lightweight and stylish alloy wheels to enhance your car's appearance.",
    price: 189999,
    discontinued: false,
    categories: ["exterior"],
    imageUrl: "https://cdn.pixabay.com/photo/2016/06/15/11/15/car-1458721_1280.jpg"
  },
  {
    id: "P006",
    title: "Lowering Springs Kit",
    description: "Improve handling and appearance with a set of performance lowering springs.",
    price: 17999,
    discontinued: false,
    categories: ["suspension", "performance"],
    imageUrl: "https://cdn.pixabay.com/photo/2018/03/04/17/18/technology-3198585_1280.jpg"
  },
  {
    id: "P007",
    title: "Cold Air Intake System",
    description: "Increase engine performance with a cold air intake system.",
    price: 12999,
    discontinued: false,
    categories: ["intake", "performance"],
    imageUrl: "https://cdn.pixabay.com/photo/2018/03/21/23/23/engine-3248750_1280.jpg"
  },
  {
    id: "P008",
    title: "Carbon Fiber Interior Trim",
    description: "Upgrade your interior with stylish carbon fiber trim pieces.",
    price: 8999,
    discontinued: false,
    categories: ["interior"],
    imageUrl: "https://cdn.pixabay.com/photo/2017/09/28/22/00/carbon-2797211_1280.jpg"
  },
  {
    id: "P009",
    title: "Performance Brake Kit",
    description: "Upgrade your brakes for improved stopping power and fade resistance.",
    price: 29999,
    discontinued: false,
    categories: ["brakes", "performance"],
    imageUrl: "https://cdn.pixabay.com/photo/2017/06/18/19/54/alloy-wheel-2417026_1280.jpg"
  },
  {
    id: "P010",
    title: "Racing Bucket Seats",
    description: "Replace your seats with comfortable and supportive racing bucket seats.",
    price: 259999,
    discontinued: true,
    categories: ["interior", "performance"],
    imageUrl:
      "https://p1.pxfuel.com/preview/329/761/280/ford-mustang-steering-wheel-tachometer-oldtimer-dashboard-armature.jpg"
  },
  {
    id: "P011",
    title: "Body Kit Package",
    description: "Transform your car's appearance with a complete body kit package.",
    price: 419999,
    discontinued: false,
    categories: ["exterior"],
    imageUrl:
      "https://p1.pxfuel.com/preview/329/761/280/ford-mustang-steering-wheel-tachometer-oldtimer-dashboard-armature.jpg"
  },
  {
    id: "P012",
    title: "Tuned ECU Chip",
    description: "Optimize engine performance with a custom-tuned ECU chip.",
    price: 16999,
    discontinued: false,
    categories: ["performance"],
    imageUrl:
      "https://p1.pxfuel.com/preview/329/761/280/ford-mustang-steering-wheel-tachometer-oldtimer-dashboard-armature.jpg"
  },
  {
    id: "P013",
    title: "Carbon Fiber Mirror Caps",
    description: "Upgrade your side mirrors with lightweight and stylish carbon fiber.",
    price: 7999,
    discontinued: false,
    categories: ["exterior"],
    imageUrl: "https://cdn.pixabay.com/photo/2021/12/29/10/16/carbon-6901341_1280.jpg"
  },
  {
    id: "P014",
    title: "High-Flow Catalytic Converter",
    description: "Improve exhaust flow and performance with a high-flow catalytic converter.",
    price: 13999,
    discontinued: false,
    categories: ["performance"],
    imageUrl:
      "https://p1.pxfuel.com/preview/329/761/280/ford-mustang-steering-wheel-tachometer-oldtimer-dashboard-armature.jpg"
  },
  {
    id: "P015",
    title: "Turbocharger Kit",
    description: "Add a turbocharger for significant power gains and thrilling performance.",
    price: 439999,
    discontinued: false,
    categories: ["turbocharger", "performance"],
    imageUrl:
      "https://p1.pxfuel.com/preview/329/761/280/ford-mustang-steering-wheel-tachometer-oldtimer-dashboard-armature.jpg"
  },
  {
    id: "P016",
    title: "Sports Suspension Kit",
    description: "Fully adjustable suspension for precise handling.",
    price: 32999,
    discontinued: false,
    categories: ["suspension", "performance"],
    imageUrl: "https://cdn.pixabay.com/photo/2017/08/03/23/44/monster-truck-2578685_1280.jpg"
  },
  {
    id: "P017",
    title: "Performance Air Filter",
    description: "Upgrade your air filter for improved airflow and power gains.",
    price: 5999,
    discontinued: false,
    categories: ["intake", "performance"],
    imageUrl: "https://cdn.pixabay.com/photo/2016/12/14/21/20/filter-1907521_1280.jpg"
  },
  {
    id: "P018",
    title: "Aluminum Shift Knob",
    description: "Replace your shift knob with a lightweight and stylish aluminum knob.",
    price: 3999,
    discontinued: false,
    categories: ["interior"],
    imageUrl: "https://cdn.pixabay.com/photo/2020/02/05/17/48/gear-switch-4821870_1280.jpg"
  },
  {
    id: "P019",
    title: "Brake Pads",
    description: "Hybrid brake pads for reliable performance and stopping power.",
    price: 7999,
    discontinued: false,
    categories: ["brakes", "performance"],
    imageUrl: "https://cdn.pixabay.com/photo/2017/10/08/08/35/auto-mechanic-2829141_1280.jpg"
  },
  {
    id: "P020",
    title: "Stainless Steel Exhaust Headers",
    description: "Improve exhaust flow and engine response with stainless steel headers.",
    price: 18999,
    discontinued: true,
    categories: ["performance"],
    imageUrl: "https://cdn.pixabay.com/photo/2019/10/08/20/03/corvette-4535949_1280.jpg"
  },
  {
    id: "P021",
    title: "Custom Shift Boot",
    description: "Personalize your interior with a custom-designed shift boot.",
    price: 6999,
    discontinued: false,
    categories: ["interior"],
    imageUrl: "https://cdn.pixabay.com/photo/2017/07/12/20/21/mercedes-benz-2498264_1280.jpg"
  },
  {
    id: "P022",
    title: "Suspension Kit",
    description: "Adjustable suspensions for fine-tuning your car's ride height and handling.",
    price: 27999,
    discontinued: false,
    categories: ["suspension", "performance"],
    imageUrl: "https://cdn.pixabay.com/photo/2017/08/03/23/44/monster-truck-2578685_1280.jpg"
  },
  {
    id: "P023",
    title: "High-Performance Radiator",
    description: "Improve engine cooling with a high-performance radiator.",
    price: 15999,
    discontinued: false,
    categories: ["performance"],
    imageUrl: "https://cdn.pixabay.com/photo/2017/06/09/17/51/radiator-2387815_1280.jpg"
  },
  {
    id: "P024",
    title: "Off-Road LED Light Bar",
    description:
      "Equip your vehicle with a powerful off-road LED light bar for enhanced visibility.",
    price: 12999,
    discontinued: false,
    categories: ["lighting"],
    imageUrl:
      "https://images.pexels.com/photos/9256572/pexels-photo-9256572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];
