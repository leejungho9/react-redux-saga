import { call, put, takeEvery } from "redux-saga/effects";
//호출, 넣기
import fetchGetUsers from "../request/fetchUsers";


function* handleGetUser() {
    try {
        const users = yield call(fetchGetUsers)
        yield put ({type: "GET_USERS_SUCCESS", users : users})
    }catch(error) {
        yield put({type: "GET_USERS_FAIL", message: error.message})
    }
}

function* watcherUserSaga() {
    yield takeEvery("GET_USERS_API", handleGetUser)
}

export default watcherUserSaga;