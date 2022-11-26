import React from "react";    
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  return (
    <div className="header">
      <h1>This is the header</h1>

      <div className="header_left">
        <img 
        src="https://pixabay.com/images/id-7409502/"
        alt="gjhgghjg" 
        />
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
