

import {  List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Search as SearchIcon, Home as HomeIcon, Favorite as FavoriteIcon, Login as LoginIcon, PersonAdd as SignUpIcon,  } from '@mui/icons-material';
import { Link } from 'react-router-dom';


const SideBarItems = [
 {
  link : "/",
 name : "Home",
 icon : <HomeIcon/>
},
 {
  link : "/Search",
 name : "Search",
 icon : <SearchIcon/>
},

 {link : "/Favorites",
 name : "Favorites",
 icon : <FavoriteIcon/>
},

 {link : "/Login",
 name : "Login",
 icon : <LoginIcon/>
},
 {link : "/Signup",
 name : "Signup",
 icon : <SignUpIcon/>
},
];

function Sidebar() {

  return (
    
    <List >
      { SideBarItems.map((item ) => (
      <Link key={item.name}  to={item.link} >
      <ListItem >
        <ListItemIcon> {item.icon} </ListItemIcon>
        <ListItemText primary={item.name} />
      </ListItem>
      </Link>
      ))}
    </List>
  );
}

    
  
    

    


export default Sidebar;
