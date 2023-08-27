const initialState = {
  tasks: []
};

export const ADD = 'ADD';
export const DELETE = 'DELETE';

export const addAction = (payload) => ({ type: ADD, payload });
export const deleteAction = (payload) => ({ type: DELETE, payload });

const accountReducer = (state = initialState, action) => {
  if (action.type === ADD) {
    return {
      ...state,
      tasks: [...state.tasks, action.payload]
    };
  } else if (action.type === DELETE) {
    return {
      ...state,
      tasks: state.tasks.filter(item => item.id !== action.payload)
    };
  }
  return state;
};

export default accountReducer;