import React from 'react';
import Header from './components/header'
import Router from './router'
function App() {
  return (
    <div className="App">
      <Header title="JmBlog"></Header>
      <Router></Router>
    </div>
  );
}

export default App;
