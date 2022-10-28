import React from 'react';
import bell from './images/bell.png'; 
import push from './images/push.png'; 
import user from './images/user.png'; 

let picture

const Icon = ({pictureName}) => {
  if (pictureName === "bell"){
    picture = bell
  }
  else if (pictureName === "push"){
    picture = push
  }
  else if (pictureName === "user"){
    picture = user
  }
  else
  picture = null
  // Import result is the URL of your image
  return <img src={picture} width="24px" height={'24px'} alt="Logo" />;
}

export default Icon;