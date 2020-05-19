const ALL = [
  {
    name: "Parker Green",
  },
  {
    name: "Jordan Richards",
  },
  {
    name: "Alex Stevens",
  },
  {
    name: "Avery Scott",
  },
  {
    name: "Riley Miller",
  },
  {
    name: "Charlie Green",
  },
];

export default (state = { all: ALL, filtered: ALL }, action) => {
  switch (action.type) {
    case 'SET_EMPLOYEES':
      return { all: action.payload || ALL, filtered: action.payload || ALL };
    case 'FILTER_EMPLOYEES':
      const value = action.payload;
      const filtered = state.all.filter(e => e.name.toLowerCase().indexOf(value.toLowerCase()) > -1);
      return { ...state, filtered };
    default:
      return state;
  }
};