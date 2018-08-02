export default (state = [], { type, payloard }) => {
  switch (type) {
    case 'SOUND_CREATE':
      return [payloard, ...state];
    case 'TOKEN_REMOVE':
      return [];
    default:
      return state;
  }
};
