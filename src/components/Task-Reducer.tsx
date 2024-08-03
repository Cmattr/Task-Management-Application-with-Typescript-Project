import TaskActions from "./Task-Actions";
import TaskState from "./Task-state";

const taskReducer = (state: TaskState, action: TaskActions): TaskState => {
    switch (action.type) {
        case 'ADD_TASK':
            return { ...state, tasks: [...state.tasks, action.payload] };
        case 'EDIT_TASK':
            return {
                ...state,
                tasks: state.tasks.map(task => task.id === action.payload.id
                    ? { ...task, ...action.payload.updates }
                    : task
                )
            };
        case 'REMOVE_TASK':
            return { ...state, tasks: state.tasks.filter(task => task.id !== action.payload) };
        default:
            return state;
    }
};

export default taskReducer;