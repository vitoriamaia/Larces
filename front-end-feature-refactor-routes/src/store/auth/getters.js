export function getMe (state) {
  return state.me
}

export function getToken (state) {
  return state.token
}

export function isAuthenticated (state) {
  console.log(state.isAuthenticated)
  return state.isAuthenticated
}

export function apiData (state) {
  return state.api
}
