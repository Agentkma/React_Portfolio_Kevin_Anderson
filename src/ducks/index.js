import { updateObject } from "../shared/utility";

// Actions
const SHOW_WORKS_FILTER = "SHOW_WORKS_FILTER";
const HIDE_WORKS_FILTER = "HIDE_WORKS_FILTER";
// const LOAD   = 'my-app/widgets/LOAD';
// const CREATE = 'my-app/widgets/CREATE';
// const UPDATE = 'my-app/widgets/UPDATE';
// const REMOVE = 'my-app/widgets/REMOVE';

// Reducer

const initialState = {
    showWorksFilter: false
};
export default function reducer(state = initialState, action) {
    switch (action.type) {
        // do reducer stuff
        case SHOW_WORKS_FILTER:
            return updateObject(state, { showWorksFilter: true });
        case HIDE_WORKS_FILTER:
            return updateObject(state, { showWorksFilter: false });
        default:
            return state;
    }
}

// Action Creators
export function loadWidgets() {
    return { type: LOAD };
}

export function createWidget(widget) {
    return { type: CREATE, widget };
}

export function updateWidget(widget) {
    return { type: UPDATE, widget };
}

export function removeWidget(widget) {
    return { type: REMOVE, widget };
}

// side effects, only as applicable
// e.g. thunks, epics, etc
export function getWidget() {
    return dispatch =>
        get("/widget").then(widget => dispatch(updateWidget(widget)));
}
