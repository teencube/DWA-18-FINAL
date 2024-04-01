


import { Route, Redirect,  } from 'react-router-dom';


const PrivateRoute = ( Component, isLoggedIn, ...rest ) => { 
  return (

    
    <Route {...rest} render={(props) => {
      const isAuthenticated = isLoggedIn; 
      return isAuthenticated ? <Component {...props} isLoggedIn={isAuthenticated} /> : <Redirect to="/login" />;
    }} />
    
    

  );
  
};


export default PrivateRoute;
