import React from "react";



const themes= {
  dark:{
    color:'white',
    background:'#566573 ',
    
  },
  light:{
    color:'black',
    background:'white',
    
  },
  price:{
    color: 'white',
    fontSize: '18pt',
    marginTop: '4px'
  }
  
};
export  const themeContext = React.createContext(themes)

