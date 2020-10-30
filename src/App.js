import React from 'react'

const App = () => {
  const fetchPosts = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error)
    }
  }

  fetchPosts();

  return (
    <div>
      app setup
    </div>
  )
}

export default App

