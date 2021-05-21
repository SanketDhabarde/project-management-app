export const createProject = (_project) => {
    return (dispatch, getState) => {
        // perform some async actions then dispatch
        dispatch({
            type: 'CREATE_PROJECT',
            project: _project
        });
    }
}