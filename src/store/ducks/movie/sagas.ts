import {call, put} from 'redux-saga/effects';
import {discoverMovies, likeMovie, getMovie, rateMovie} from '../../../services/movie';
import {
  setMoviesRequest,
  setMoviesSuccess,
  likeMovieSuccess,
  setPageSuccess,
  clearMovies,
  setMovieSuccess,
  ratingMovieSuccess,
  removeMovieSuccess,
  cancelLoading,
  setRatinguccess,
  closeModal,
} from './actions';

import {getStorage} from '../../../util';
import { Rating } from '../../../types/Rating';

import {showMessage} from 'react-native-flash-message';

export function* setMovies(payload: any) {
  const {genre, pageNumber} = payload.payload;
  try {
    yield call(setMoviesRequest, genre, pageNumber);
    const data = yield call(discoverMovies, {genre, pageNumber});
    yield put(setMoviesSuccess(data.results));
  } catch (error) {
    console.log(error);
  }
}

export function* getLikeMovie(payload: any) {
  try {
    const token = yield call(getStorage, '@token');
    const data = yield call(getMovie, {
      token,
      movieId: payload.payload,
    });
    const {users, ratings} = data;
    yield put(likeMovieSuccess({users}));
    yield put(ratingMovieSuccess({ratings}));
  } catch (error) {
    console.log('Filme não encontrado na base');
    const users: string[] = []
    const ratings: Rating[] = []
    yield put(likeMovieSuccess({users}));
    yield put(ratingMovieSuccess({ratings}));
  }
}

export function* setLikeMovie(payload: any) {
  try {
    const token = yield call(getStorage, '@token');
    const data = yield call(likeMovie, {token, movieId: payload.payload});
    const {users} = data;
    yield put(likeMovieSuccess({users}));
  } catch (error) {
    console.log(error);
  }
}

export function* setPageNumber(payload: any) {
  try {
    if (payload.payload === 1) {
      yield put(clearMovies());
    }
    yield put(setPageSuccess(payload.payload));
  } catch (error) {
    console.log(error);
  }
}

export function* setMovie(payload: any) {
  yield put(setMovieSuccess(payload.payload))
}

export function* removeMovie() {
  yield put(removeMovieSuccess());
}

export function* setRating(payload: any) {
  const { movieId, user, message, rating } = payload.payload;
  const token = yield call(getStorage, '@token');
  try {
    const data = yield call(rateMovie, {
      token,
      movieId,
      message,
      rating
    });
    yield put(setRatinguccess(data));
    yield put(closeModal());
  } catch (err) {
    showMessage({
      message: '🙃 Eita!',
      description: 'Tenta de novo, acho que agora vai ',
      type: 'danger',
      duration: 3000,
    });
    yield put(cancelLoading());
  }
  
}