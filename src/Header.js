import React from "react";    
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  return (
    <div className="header">
      <h1>This is the header</h1>

      <div className="header_left">
        <img src="https://www.flaticon.com/free-icon/linkedin_174857?term=linkedin%20logo&page=1&position=4&page=1&position=4&related_id=174857&origin=style "
        alt="" />
              <div className="header_search">
                 <SearchIcon/>
                <input type="text" />
                
                </div>        

      </div>
      
      <div className="header_right">

      </div>
    </div>
  );
}

export default Header;
