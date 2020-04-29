export const ADD_CONNECT = 'ADD_CONNECT'

function addConnect (connectData) {
  return {
    type: ADD_CONNECT,
    connectData,
  }
}

export function handleAddConnect (name, cb) {
    //action handlers
  return (dispatch) => {
        dispatch(addConnect())
  }
}

// export function handleAddGoal (name, cb) {
//     //action handlers
//   return (dispatch) => {
//     return API.saveGoal(name)
//       .then((goal) => {
//         dispatch(addGoal(goal))
//         cb()
//       })
//       .catch(() => alert('There was an error. Try again.'))
//   }
// }
