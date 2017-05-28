export default function (state = true, action) {
  switch (action.type) {
    case 'FLIP_BOOLEAN':
      return action.payload;
    default:
      return state;
  }
}
