import axios from 'axios';

function handleError(error) {
    return {
      type: 'ERROR',
      error
    };
  }

function getinfo(data) {
  return {
    type: 'DATA',
    data
  };
}


export function FromAPI() {
    return async function thunk(dispatch) {
      try {
        let res = await axios.get(`https://amplifye-travel-api.herokuapp.com/api/gen`)
        dispatch(getinfo(res.data));
      } catch (error) {
        dispatch(handleError(error.response));
      }
    };
  }

