const PRODUCTS = [
  {
    name: "Santa",
    type: "Bed",
    price: 840,
    colors: ["blue", "magenta", "green", "green", "green"],
    materials: ["Frozen", "Granite"],
    filling_materials: ["Soft", "Plastic", "Soft"],
    dimensions: { w: 160, h: 256, d: 247 },
    seat_dimensions: { w: 88, h: 200, d: 41 },
    description: "Gorgeous rich drive vortals synergistic evolve supply-chains",
    weight: 23,
    comfort_level: "Firm",
  },
  {
    name: "Benedict",
    type: "Chair",
    price: 505,
    colors: ["black", "orchid", "green", "white", "blue"],
    materials: ["Steel", "Steel"],
    filling_materials: ["Fresh", "Granite", "Plastic"],
    dimensions: { w: 70, h: 167, d: 145 },
    seat_dimensions: { w: 33, h: 125, d: 36 },
    description:
      "Tasty revolutionary transition bandwidth real-time enhance platforms",
    weight: 9,
    comfort_level: "Medium",
  },
  {
    name: "Lorna",
    type: "Chair",
    price: 550,
    colors: ["tan", "tan", "gold", "blue", "orchid"],
    materials: ["Frozen", "Concrete"],
    filling_materials: ["Steel", "Fresh", "Steel"],
    dimensions: { w: 181, h: 40, d: 96 },
    seat_dimensions: { w: 159, h: 56, d: 61 },
    description: "Tasty dynamic whiteboard vortals dot-com productize markets",
    weight: 25,
    comfort_level: "Firm",
  },
  {
    name: "Sasha",
    type: "Bed",
    price: 115,
    colors: ["magenta", "teal", "black", "teal", "orchid"],
    materials: ["Wooden", "Plastic"],
    filling_materials: ["Concrete", "Granite", "Fresh"],
    dimensions: { w: 233, h: 25, d: 254 },
    seat_dimensions: { w: 251, h: 167, d: 169 },
    description: "Handcrafted real-time engineer metrics robust target users",
    weight: 23,
    comfort_level: "Soft",
  },
  {
    name: "Terrell",
    type: "Chair",
    price: 650,
    colors: ["purple", "gold", "blue", "turquoise", "magenta"],
    materials: ["Soft", "Steel"],
    filling_materials: ["Soft", "Metal", "Plastic"],
    dimensions: { w: 134, h: 117, d: 204 },
    seat_dimensions: { w: 146, h: 73, d: 172 },
    description: "Licensed virtual synergize ROI robust grow portals",
    weight: 37,
    comfort_level: "Soft",
  },
  {
    name: "Arielle",
    type: "Sofa",
    price: 30,
    colors: ["white", "green", "violet", "purple", "black"],
    materials: ["Plastic", "Frozen"],
    filling_materials: ["Plastic", "Steel", "Fresh"],
    dimensions: { w: 200, h: 217, d: 165 },
    seat_dimensions: { w: 49, h: 92, d: 173 },
    description:
      "Tasty scalable architect systems end-to-end repurpose functionalities",
    weight: 36,
    comfort_level: "Firm",
  },
  {
    name: "Dannie",
    type: "Chair",
    price: 145,
    colors: ["teal", "blue", "turquoise", "orchid", "gold"],
    materials: ["Wooden", "Granite"],
    filling_materials: ["Plastic", "Steel", "Rubber"],
    dimensions: { w: 245, h: 117, d: 39 },
    seat_dimensions: { w: 233, h: 83, d: 168 },
    description:
      "Tasty revolutionary matrix bandwidth one-to-one facilitate interfaces",
    weight: 49,
    comfort_level: "Medium",
  },
  {
    name: "Tyshawn",
    type: "Sofa",
    price: 575,
    colors: ["gold", "olive", "olive", "purple", "ivory"],
    materials: ["Fresh", "Cotton"],
    filling_materials: ["Cotton", "Plastic", "Steel"],
    dimensions: { w: 20, h: 157, d: 137 },
    seat_dimensions: { w: 23, h: 235, d: 247 },
    description:
      "Tasty sticky repurpose mindshare front-end innovate paradigms",
    weight: 50,
    comfort_level: "Firm",
  },
  {
    name: "Francesco",
    type: "Sofa",
    price: 630,
    colors: ["gold", "olive", "green", "black", "plum"],
    materials: ["Soft", "Wooden"],
    filling_materials: ["Granite", "Metal", "Cotton"],
    dimensions: { w: 221, h: 224, d: 121 },
    seat_dimensions: { w: 208, h: 255, d: 11 },
    description:
      "Licensed holistic evolve paradigms world-class optimize architectures",
    weight: 44,
    comfort_level: "Medium",
  },
  {
    name: "Wayne",
    type: "Chair",
    price: 140,
    colors: ["tan", "violet", "red", "gold", "ivory"],
    materials: ["Granite", "Granite"],
    filling_materials: ["Fresh", "Concrete", "Plastic"],
    dimensions: { w: 62, h: 99, d: 111 },
    seat_dimensions: { w: 23, h: 66, d: 241 },
    description:
      "Refined open-source transform architectures dot-com whiteboard models",
    weight: 36,
    comfort_level: "Soft",
  },
  {
    name: "Elian",
    type: "Sofa",
    price: 585,
    colors: ["white", "ivory", "tan", "green", "green"],
    materials: ["Wooden", "Frozen"],
    filling_materials: ["Concrete", "Cotton", "Wooden"],
    dimensions: { w: 29, h: 29, d: 171 },
    seat_dimensions: { w: 59, h: 131, d: 218 },
    description:
      "Sleek strategic reintermediate supply-chains out-of-the-box drive channels",
    weight: 15,
    comfort_level: "Firm",
  },
  {
    name: "Wilmer",
    type: "Table",
    price: 325,
    colors: ["magenta", "magenta", "magenta", "white", "plum"],
    materials: ["Rubber", "Concrete"],
    filling_materials: ["Soft", "Steel", "Steel"],
    dimensions: { w: 38, h: 200, d: 21 },
    seat_dimensions: { w: 207, h: 72, d: 42 },
    description:
      "Rustic next-generation maximize partnerships scalable empower supply-chains",
    weight: 10,
    comfort_level: "Soft",
  },
  {
    name: "Marcellus",
    type: "Bed",
    price: 160,
    colors: ["green", "turquoise", "tan", "teal", "purple"],
    materials: ["Frozen", "Steel"],
    filling_materials: ["Cotton", "Soft", "Cotton"],
    dimensions: { w: 93, h: 173, d: 229 },
    seat_dimensions: { w: 144, h: 222, d: 130 },
    description:
      "Gorgeous one-to-one maximize interfaces impactful brand e-tailers",
    weight: 16,
    comfort_level: "Medium",
  },
  {
    name: "Stanton",
    type: "Sofa",
    price: 705,
    colors: ["blue", "turquoise", "teal", "red", "violet"],
    materials: ["Fresh", "Frozen"],
    filling_materials: ["Metal", "Steel", "Rubber"],
    dimensions: { w: 258, h: 91, d: 129 },
    seat_dimensions: { w: 256, h: 69, d: 66 },
    description:
      "Intelligent sticky evolve infomediaries viral incentivize mindshare",
    weight: 47,
    comfort_level: "Medium",
  },
  {
    name: "Hazle",
    type: "Table",
    price: 130,
    colors: ["plum", "turquoise", "ivory", "blue", "plum"],
    materials: ["Plastic", "Granite"],
    filling_materials: ["Fresh", "Soft", "Steel"],
    dimensions: { w: 164, h: 184, d: 197 },
    seat_dimensions: { w: 36, h: 170, d: 150 },
    description: "Intelligent sexy deploy networks synergistic iterate portals",
    weight: 27,
    comfort_level: "Soft",
  },
  {
    name: "Tomas",
    type: "Table",
    price: 575,
    colors: ["white", "violet", "tan", "white", "teal"],
    materials: ["Steel", "Rubber"],
    filling_materials: ["Granite", "Metal", "Granite"],
    dimensions: { w: 95, h: 154, d: 21 },
    seat_dimensions: { w: 52, h: 246, d: 150 },
    description: "Small efficient architect platforms sticky evolve portals",
    weight: 9,
    comfort_level: "Soft",
  },
  {
    name: "Issac",
    type: "Chair",
    price: 500,
    colors: ["violet", "gold", "olive", "plum", "green"],
    materials: ["Plastic", "Soft"],
    filling_materials: ["Cotton", "Fresh", "Cotton"],
    dimensions: { w: 169, h: 72, d: 257 },
    seat_dimensions: { w: 138, h: 120, d: 236 },
    description: "Practical sticky repurpose ROI granular seize methodologies",
    weight: 42,
    comfort_level: "Firm",
  },
  {
    name: "Sigrid",
    type: "Sofa",
    price: 875,
    colors: ["turquoise", "black", "violet", "gold", "white"],
    materials: ["Concrete", "Concrete"],
    filling_materials: ["Cotton", "Concrete", "Plastic"],
    dimensions: { w: 171, h: 120, d: 40 },
    seat_dimensions: { w: 154, h: 171, d: 156 },
    description: "Tasty 24/7 whiteboard models 24/365 orchestrate paradigms",
    weight: 23,
    comfort_level: "Medium",
  },
  {
    name: "Beth",
    type: "Table",
    price: 505,
    colors: ["purple", "plum", "purple", "violet", "gold"],
    materials: ["Plastic", "Metal"],
    filling_materials: ["Rubber", "Soft", "Frozen"],
    dimensions: { w: 14, h: 105, d: 202 },
    seat_dimensions: { w: 231, h: 82, d: 245 },
    description:
      "Rustic one-to-one drive users leading-edge reintermediate schemas",
    weight: 43,
    comfort_level: "Firm",
  },
  {
    name: "Yadira",
    type: "Sofa",
    price: 440,
    colors: ["red", "orchid", "tan", "black", "violet"],
    materials: ["Soft", "Wooden"],
    filling_materials: ["Soft", "Frozen", "Wooden"],
    dimensions: { w: 26, h: 123, d: 92 },
    seat_dimensions: { w: 226, h: 60, d: 98 },
    description:
      "Handmade user-centric target web-readiness sticky enhance e-markets",
    weight: 45,
    comfort_level: "Soft",
  },
];