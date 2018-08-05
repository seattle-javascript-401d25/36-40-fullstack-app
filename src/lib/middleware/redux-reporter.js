export default store => next => (action) => {
  try {
    console.log('ACTION IN MIDDLEWARE: ', action);
    const result = next(action);
    console.log('CURRENT REDUX STORE STATE: ', store.getState());

    return result;
  } catch (err) {
    console.error(err);
    return next(action);
  }
};
