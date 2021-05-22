export const createProject = (project) => {
    return (dispatch, getState, getFirebase) => {
        // perform some async actions then dispatch
        const db= getFirebase().firestore();

        db.collection('projects').add({
            ...project,
            firstName: "Don",
            lastName: 'joe',
            createdAt: new Date()
        }).then(() => {
            dispatch({
                type: 'CREATE_PROJECT',
                project: project
            });
        }).catch(err => {
            dispatch({
                type: 'CREATE_PROJECT_ERROR',
                error: err
            });
        });
       
    }
}