import axios from 'axios';

// dummy action that changes the Store state
export const flipBoolean = (boolean) => {
  return { 
    type: 'FLIP_BOOLEAN', 
    payload: !boolean, 
  }
};

// test POST to sql action
export const testPost = () => (dispatch) => {
  const dummyData = {
    name: `${Math.random()}`.slice(0,6),
    email: `${Math.random()}`.slice(0,6),
    description: 'test description',
    url: 'test url',
  }
  axios.post('/sql', dummyData)
  .then(() => dispatch({ type: 'POST_DATA' }))
};

// test GET from sql action
export const testGet = () => (dispatch) => {
  axios.get('/sql')
  .then((res) => {
    dispatch({ type: 'GET_DATA', payload: res.data })
  });
};

// test POST to no-sql action
export const testNoSQLPost = () => (dispatch) => {
  const dummyData = {
    name: `${Math.random()}`.slice(0,6),
    owner: `${Math.random()}`.slice(0,6),
    image: 'test image',
    description: 'test description',
  }
  axios.post('/nosql', dummyData)
  .then(() => dispatch({ type: 'POST_DATA' }))
};

// test GET from no-sql action
export const testNoSQLGet = () => (dispatch) => {
  axios.get('/nosql')
  .then((res) => {
    dispatch({ type: 'GET_DATA', payload: res.data })
  });
};