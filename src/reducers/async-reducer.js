export default function (state = 'data shown here', action) {
  switch (action.type) {
    case 'GET_DATA':
      return action.payload;
    default:
      return state;
  }
}
