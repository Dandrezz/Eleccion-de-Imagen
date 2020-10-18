import React from 'react';
import './App.css';
import Card from './components/Card';

const App = () => {

  const handleClick = ( url ) => {
    console.log( url );
    console.log( url.match( /[0-9]+/ )[0] )
  }

  return (
    <div className="all">
      <div className="top-header">
        <div className="div-hiddin" />
        <div className="ui sizer vertical segment fontSize">
          <div className="ui huge header header-custom">¿Qué prefieres?</div>
        </div>
        <div className="div-hiddin" />
      </div>
      <div className="ui middle aligned two column centered grid centered custom-animation">
        <Card url="https://picsum.photos/450/400" handleClick={ handleClick }/>
        <Card url="https://picsum.photos/450/400" handleClick={ handleClick }/>
      </div>
    </div>
  )
}

export default App;
