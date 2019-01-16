const initState = {
  projects: [
    { id: "1", title: "help me with redux", content: "i need a mentor" },
    {
      id: "2",
      title: "getting better",
      content: "i am bgetting better everyday"
    },
    {
      id: "3",
      title: "Keep learning",
      content: "GEt your hands dirty at all ti,e"
    },
    {
      id: "4",
      title: "Will finally get there",
      content: "a billion dollar dream"
    }
  ]
};

const projectReducer = (state = initState, action) => {
  return state;
};

export default projectReducer;
