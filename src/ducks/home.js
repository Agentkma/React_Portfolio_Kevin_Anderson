// import { updateObject } from "../shared/utility";

// ! Actions
const TOGGLE_SHOW_WORKS_FILTER = "app/Ducks/TOGGLE_SHOW_WORKS_FILTER";
// const LOAD   = 'my-app/widgets/LOAD';
// const CREATE = 'my-app/widgets/CREATE';
// const UPDATE = 'my-app/widgets/UPDATE';
// const REMOVE = 'my-app/widgets/REMOVE';

// ! Reducer

const initialState = {
    worksFilterShown: false
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        // do reducer stuff
        case TOGGLE_SHOW_WORKS_FILTER:
            return {
                ...state,
                worksFilterShown:
                    state.worksFilterShown === false ? true : false
            };

        default:
            return state;
    }
}

// ! Action Creators
export function toggleShowWorksFilter() {
    return {
        type: TOGGLE_SHOW_WORKS_FILTER
    };
}

// export function updateWidget(widget) {
//     return { type: UPDATE, widget };
// }

// export function removeWidget(widget) {
//     return { type: REMOVE, widget };
// }

// side effects, only as applicable
// e.g. thunks, epics, etc
// export function getWidget() {
//     return dispatch =>
//         get("/widget").then(widget => dispatch(updateWidget(widget)));
// }
