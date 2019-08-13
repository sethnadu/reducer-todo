



export const initialState= {
    item: [{
        task: 'Learn about reducers',
        completed: false,
        id: 3892987589
      }]
};

export const formReducer = (state, action) => {
    switch(action.type) {
        case "ADD_TASK":
            // const newState = [...state.item]
            // newState.push(action.payload)
            return {
                ...state,
                item: [...state.item, action.payload ]
                // item: newState
            };
        case "CLEAR_TASKS":
            return {
                ...state,
                item: state.item.filter(task => {
                    return (!task.completed)
                })
                
            }
        case "TOGGLE_TASKS":
                console.log(action.payload)
            return {
                ...state.item,
                
                item: state.item.map(task => {
                    if(task.id === action.payload) {
                      return {
                        ...task,
                        completed: !state.item.completed
                      }
                    } else {
                      return task
                    }
                  })
                }

        default:
            return state
    }
};