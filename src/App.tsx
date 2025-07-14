// type user = {
//   username : string;
//   age : number;
//   isLoggedIn : boolean
// }

import { useEffect, useState } from "react";

// function App() {
//   const users  : user = {
//     username : "Sugam",
//     age : 22,
//     isLoggedIn : true
//   }
  
//   return (
//     <div>
//       <h1>username :  {users.username}</h1>
//       <p>age : {users.age}</p>
//       <p>status : {users.isLoggedIn ? "online" : "Offline"}</p>
    
//     </div>
//   );
// }
// export default App


//--------------------------USE-STATE----------------------------------------------------

// toggle ussing usestate and tsx

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

//   const handleClick = () => {
//     setIsLoggedIn(!isLoggedIn)
//   }


//   return (
//     <div>
//       <p>status : {isLoggedIn ? "online" : "ka maryo !"}</p>
//       <button onClick={handleClick}>toggle</button>
//     </div>
//   )
// }

// export default App


// ----------------------USE STATE FOR AN OBJECT-----------------------------------
type user = {
  name : string;
  age : number;
  isLoggedIn : boolean
}

function App() {
  const [user, setUser] = useState <user>({
    name : "daka",
    age : 25,
    isLoggedIn : false
  })

  useEffect(()=> {
    document.title = `${user.name} is ${user.isLoggedIn ? "online" : "offline"}`
  },[user.isLoggedIn])

  const toggleLogin = () => {
    setUser(prev => ({
      ...prev,
      isLoggedIn : !prev.isLoggedIn
    }))
  };

  return(
    <div>
    <h1>username : {user.name}</h1>
    <p>age : {user.age}</p>
    <p>status : {user.isLoggedIn ? "online" : "offline"}</p>
    <button onClick={toggleLogin}>toggle login</button>
    </div>
  )
  
}

export default App