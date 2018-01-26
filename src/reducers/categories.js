const initialState = [
  {
    name: "Fruits",
    emodzi: "🍎",
    id: Math.ceil(Math.random() * 10000)
  },
  {
    name: "Drinks",
    emodzi: "☕️",
    id: Math.ceil(Math.random() * 10000)
  },
  {
    name: "Kebab",
    emodzi: "🌯",
    id: Math.ceil(Math.random() * 10000)
  },
  {
    name: "Fastfood",
    emodzi: "🍔",
    id: Math.ceil(Math.random() * 10000)
  },
  {
    name: "Vegetables",
    emodzi: "🍆",
    id: Math.ceil(Math.random() * 10000)
  },
  {
    name: "Candy",
    emodzi: "🍭",
    id: Math.ceil(Math.random() * 10000)
  },
  {
    name: "Drugs",
    emodzi: "💊",
    id: Math.ceil(Math.random() * 10000)
  },
  {
    name: "Electronics",
    emodzi: "📱",
    id: Math.ceil(Math.random() * 10000)
  },
];

const categories = (state = initialState, action = null) => {
  return state;
};

export default categories;
