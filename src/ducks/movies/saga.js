import { call, put, takeLatest } from 'redux-saga/effects'
import api from '../../utils/api'
import { fetchMovies, setMovies } from './reducer'

export function* fetchMoviesSaga({ payload: { path, params } }) {
  try {
    //prettier-ignore
    const res = yield call(api, path, params)
    const movies = res.data.results

    yield put(setMovies(movies))
  } catch (error) {
    console.log(error)
  }
}

export default function*() {
  yield takeLatest(fetchMovies, fetchMoviesSaga)
}
