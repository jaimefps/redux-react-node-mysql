export default function (state = 'no data yet', action) {
  switch(action.type) {
    case 'GET_DATA':
      return action.payload;     
    default: 
      return state;
  }
}