export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to db
    const fireStore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    const authorEmail = getState().firebase.auth.email;

    fireStore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorID: authorId,
        authEmail: authorEmail,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_PROJECT", project });
      })
      .catch(err => {
        dispatch({ type: "CREATE_PROJECT_ERROR", err });
      });
  };
};

export const deleteProject = id => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const authorID = getState().firebase.auth.uid;
    const project = getState().firestore.ordered.projects.filter(
      project => project.id === id
    );
    const projectAuthId = project[0].authorID;
    const fireStore = getFirestore();

    if (projectAuthId === authorID) {
      fireStore
        .collection("projects")
        .doc(id)
        .delete()
        .then(response => {
          console.log("success");
        })
        .catch(err => {
          console.log(err);
        })
        .then(() => {
          dispatch({ type: "DELETE_PROJECT_SUCCESS" });
        })
        .catch(err => {
          dispatch({ type: "DELETE_PROJECT_ERROR", err });
        });
    } else {
      dispatch({ type: "DELETE_NOT_AUTH_ERROR" });
    }
  };
};
