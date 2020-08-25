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
        let res = await axios.get(`https://api.yelp.com/v3/events?&sort_on=popularity&start_date<=${+ new Date}e&limit=10`,{
          headers:{
          Authorization: `Bearer gA1R_SqY6iK8kZDILXE3SXXYQRyd_AIUgMSGESRz5ViDBx5fNJbiDAt96NinaQTuD0qviy0QObpRb2pE15YKANydaI3IPvm7c2DbT1dnlouU_cMinrI-DZVa8IpBX3Yx`
          }
      })
        dispatch(getinfo(res.data));
      } catch (error) {
        dispatch(handleError(error.response));
      }
    };
  }

