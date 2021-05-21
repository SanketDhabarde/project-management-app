const initialState = {
    projects: [
        {id: 1, title: 'project 1', content: 'blah blah'},
        {id: 2, title: 'project 2', content: 'blah blah'},
        {id: 3, title: 'project 3', content: 'blah blah'},
        {id: 4, title: 'project 4', content: 'blah blah'},
        {id: 5, title: 'project 5', content: 'blah blah'},
        {id: 6, title: 'project 6', content: 'blah blah'},
        {id: 7, title: 'project 7', content: 'blah blah'},
    ]
};

const projectReducer = (state= initialState, action) => {
    switch(action.type){
        case 'CREATE_PROJECT':
                console.log("project created", action.project);
    }
    return state;
}

export default projectReducer;