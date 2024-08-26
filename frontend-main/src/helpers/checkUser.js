export const getTokenFromLocalStorage = () => {
  const user = JSON.parse(
    localStorage.getItem("persist:_user")
  );
  return user.token.split('"')[1];
};
