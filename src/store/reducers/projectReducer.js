const initState = {
  projects: []
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      // console.log("created project", action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      // console.log("create project error", action.err);
      return state;
    case "DELETE_PROJECT_SUCCESS":
      // console.log("delete succesful");
      return state;
    case "DELETE_PROJECT_ERROR":
      // console.log("Unable to delete project, Pls try again");
      return state;
    case "DELETE_NOT_AUTH_ERROR":
      // console.log("You are not authorized to remove project thats not yours");
      return state;
    default:
      return state;
  }
};

export default projectReducer;
