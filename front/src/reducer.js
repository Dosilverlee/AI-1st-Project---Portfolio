export function loginReducer(userState, action) {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...userState,
        user: action.payload,
      };
    case "LOGOUT":
      return {
        ...userState,
        user: null,
        currentUserProfile: null, // 07.21 || 현재 접속한 유저의 정보를 초기화합니다.
      };
    case "INIT_USER_PROFILE":
      return {
        ...userState,
        currentUserProfile: action.payload,
      }; // 07.21 || 현재 접속한 유저의 정보를 관리합니다.
    default:
      return userState;
  }
}
