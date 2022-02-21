const initalState = {
    users : [],
    loading : false,
    error : null
}
const users = (state= initalState, action) => {
    switch (action.type) {
        case "GET_USERS_API":
            return {...state, loading : true}
        case "GET_USERS_SUCCESS":
        
            return {...state, loading : false, users : action.users}
        case "GET_USERS_FAIL":
            return {...state, loading : false, error : action.message}
        default:
            return state;
    }
};

export default users;
