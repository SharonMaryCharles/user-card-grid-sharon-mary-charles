//Sharon Mary Charles

//import react library and .css file for styling
import React, { useState, useEffect } from 'react';
import './App.css';

function App() 
{

  //set up states : users, isLoading
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true); //false

  //useEffect hook
  useEffect(() => {
    setIsLoading(false); //load bar inactive
    fetch('https://reqres.in/api/users?page=1') //fetch data from the external source
      .then(response => response.json()) //parse the JSON response 
      .then(data => {
        setUsers(data.data); //set the user state with the returned data
        setIsLoading(true); //false
      })
      .catch(error => console.error(error));
  }, []);

  return (

    //display all the html tags to render it on the website
    <div className="App">
      <header className="navbar">
        <span className="navbar-brand">Sharon Mary Charles</span>
        <button className="navbar-btn" onClick={() => 
        {
          <span className="navbar-user">User</span>

          setIsLoading(false);
          fetch('https://reqres.in/api/users?page=1')
            .then(response => response.json())
            .then(data => {
              setUsers(data.data);
              setIsLoading(false);
            })
            .catch(error => console.error(error));
        }}>Get Users</button>
      </header>
      
      <main>
        { 
          isLoading ? <div className="loader"></div> : 
        
          <section className="user-cards">   
            {users.map(user => (  // map method is used to iterate over the array of users and display the users
              <div className="user-card" key={user.id}> 
                <img src={user.avatar} alt="User Profile Picture" />
                <h2>{user.first_name} {user.last_name}</h2>
                <p>{user.email}</p>
              </div>
            ))}
            <br></br>
            <section>
                <br></br><br></br><br></br><br></br><br></br><br></br>
                <button className="navbar-ty" onClick = {() => window.alert("Thank You for using the website! BYE")}>Done</button>
            </section>
          </section>
        }
      </main>
    </div>
  );
}

export default App;
