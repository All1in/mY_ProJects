import { take, takeEvery, takeLatest, takeLeading } from "redux-saga/effects"


export function* workerSaga() {
    console.log("Click from Saga");
}


export function* watchClickSaga() {
    yield takeEvery("Click", workerSaga)
}

export default function* rootSaga() {
    yield watchClickSaga();
    console.log("Saga ready!");
}