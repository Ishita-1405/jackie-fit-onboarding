const quizData = [
  {
    id: 1,
    key: "height",
    question: "What is your height?",
    type: "select",
    options: Array.from({ length: 17 }, (_, i) => {
      const feet = 4 + Math.floor((10 + i) / 12);
      const inches = (10 + i) % 12;
      return `${feet}'${inches}"`;
    }),
  },

  {
    id: 2,
    key: "weight",
    question: "What is your weight? (Optional)",
    type: "number",
    optional: true,
  },

  {
    id: 3,
    key: "waist",
    question: "Waist measurement (inches)",
    type: "select",
    options: Array.from({ length: 29 }, (_, i) => `${24 + i}"`),
  },

  {
    id: 4,
    key: "hip",
    question: "Hip measurement (inches)",
    type: "select",
    options: Array.from({ length: 29 }, (_, i) => `${32 + i}"`),
  },

  {
    id: 5,
    key: "waistFit",
    question: "How do you like jeans to fit at the waist?",
    type: "radio",
    options: [
      "Snug",
      "Slightly Relaxed",
      "Relaxed",
    ],
  },

  {
    id: 6,
    key: "rise",
    question: "Where should the waistband sit?",
    type: "radio",
    options: [
      "High Rise",
      "Mid Rise",
      "Low Rise",
    ],
  },

  {
    id: 7,
    key: "thigh",
    question: "How should jeans fit through the thighs?",
    type: "radio",
    options: [
      "Fitted",
      "Relaxed",
      "Loose",
    ],
  },

  {
    id: 8,
    key: "brands",
    question: "Which brands have you worn before?",
    type: "multi",
    options: [
      "Levi's",
      "Lee",
      "Wrangler",
      "Pepe Jeans",
      "Spykar",
      "Flying Machine",
      "H&M",
      "Zara",
      "Uniqlo",
      "American Eagle",
      "Calvin Klein",
      "Diesel",
      "Gap",
      "Jack & Jones",
      "Roadster",
      "Only",
      "Madame",
      "Others"
    ],
  },

  {
  id: 9,
  key: "size",
  question: "What size do you usually wear?",
  type: "select",
  options: [
    "24",
    "26",
    "28",
    "30",
    "32",
    "34",
    "36",
    "38",
    "40",
    "42",
    "44",
    "46",
    "48",
    "50",
    "52"
  ],
},

  {
    id: 10,
    key: "frustration",
    question: "Biggest fit frustration?",
    type: "radio",
    options: [
      "Waist Gap",
      "Hip Tightness",
      "Wrong Length",
      "Thigh Fit",
      "Rise",
      "Other",
    ],
  },
];

export default quizData;