import React, { useState, useEffect } from 'react';
import './App.css';
import Post from './Post';
import { db } from './firebase';

function App() {
  const [posts, setPosts] = useState([
    {
      username:"Jagdeep",
       caption:"Nice Job:)",
       imageUrl: "https://mildaintrainings.com/wp-content/uploads/2017/11/react-logo.png"
    },
    {
      username:"Alok",
       caption:"Dope...", 
       imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRoZdSldK-8V7J6YRvGarQcFxCtS611RC5KoQ&usqp=CAU"
    },
    {
      username:"Jasbir", 
      caption:"Good One:=)", 
      imageUrl:"https://seeklogo.com/images/R/react-styleguidst-logo-5C3D736C4B-seeklogo.com.png"
    }

  ]) 

  // UseEffect:- Runs a peice of code based on the specific condition

  useEffect(() => {
    // This is where the code runs
    db.collection('posts').onSnapshot(snapshot => {
      // every single time post is added , it takes snapshot of that
      setPosts(snapshot.docs.map(doc => doc.data()));
    })
  }, []);

  return (
    <div className="App">
      <div className="app_header">
        <img 
            className="app_headerImage"
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt="Instagram Logo"
        />
      </div>

      <h1>We're going to build Instagram Clone!!</h1>

      {
        posts.map((post) => (
          <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
          
        ))
      }

    </div>
  );
}

export default App;
