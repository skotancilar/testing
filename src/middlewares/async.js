// eslint-disable-next-line import/no-anonymous-default-export
export default ({ dispatch }) => next => action => {
   if (!action.payload || !action.payload.then) {
      return next(action);
   }
   action.payload.then((res) => {
      const newAction = {
         ...action, payload: res
      }
      dispatch(newAction);
   })
};
