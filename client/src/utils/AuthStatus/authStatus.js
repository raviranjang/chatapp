const authStatus = token => {
    if (token) {
      return true;
    } else {
      return false;
    }
  };
  
  export { authStatus };
  