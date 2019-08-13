



export const initialState= {
    additem: [{
    item: "test",
    completed: false,
    id: Date.now()
    }]
};

export const formReducer = (state, action) => {
    switch(action.type) {
        case "ADD_TASK":
            return {
                ...state, 
                item: action.payload
            };
        case "CLEAR_TASKS":
            return {
                ...state,
                additem: state.additem.filter(item => {
                    return (!item.completed)
                })
            }
        default:
            return state
    }
};