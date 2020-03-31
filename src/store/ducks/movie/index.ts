import {Reducer} from 'redux';
import {MovieState, MovieTypes} from './types';
import {IMovie} from 'src/types/IMovie';

const INITIAL_STATE: MovieState = {
  pageNumber: 1,
  data: [],
  loading: false,
  error: false,
};

/**
 * Reducer
 */
const movie: Reducer<MovieState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MovieTypes.SET_MOVIES_REQUEST:
      return {...state, loading: true};
    case MovieTypes.SET_MOVIES_SUCCESS:
      return {
        ...state,
        data: [...state.data, ...action.payload],
        loading: false,
      };
    case MovieTypes.SET_MOVIE_REQUEST:
      return {...state, loading: true};
    case MovieTypes.SET_MOVIE_SUCCESS:
      return {...state, loading: false, selected: action.payload};
    case MovieTypes.LIKE_MOVIE_REQUEST:
      return {...state, loading: true};
    case MovieTypes.LIKE_MOVIE_SUCCESS:
      return {...state, loading: false, selected: { ...state?.selected, users: action.payload.users }};
    case MovieTypes.CLEAR_MOVIES:
      return {...state, loading: false, data: []};
    case MovieTypes.SET_PAGE_NUMBER_REQUEST:
      return {...state, loading: true};
    case MovieTypes.SET_PAGE_NUMBER_SUCCESS:
      return {...state, loading: false, pageNumber: action.payload};
    default:
      return state;
  }
};

export default movie;
