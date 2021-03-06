import React, { Component } from 'react';
import './App.css';
//import Cookie from '../cookie/Cookie'
import img from './img/fortune-cookies2.jpg'
import axios from 'axios';
import Quote from './Quote'
import firebase from 'firebase';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {//this.state es un objeto
      quote: [],
      showImage : true
    }

    //lamando a firebase
    var config = {
      apiKey: "AIzaSyBpzBxT20DqsFPYSD3bXkTTm3nJl1rp9ME",
      authDomain: "fortunecookie-c8ce5.firebaseapp.com",
      databaseURL: "https://fortunecookie-c8ce5.firebaseio.com",
      projectId: "fortunecookie-c8ce5",
      storageBucket: "fortunecookie-c8ce5.appspot.com",
      messagingSenderId: "727893750062"
    };
    firebase.initializeApp(config);

   //aqui van los bind
   this.crack = this.crack.bind(this)
    
  }

  crack(){
   
    console.log('pressed')
    this.setState({quote: []});
    axios.get('https://talaikis.com/api/quotes/random/', {
      params: {
      }
    })
    .then(res => {
      const quote = res.data;
      this.setState({ quote });
      console.log(quote.quote);
      this.state.showImage = false;
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      // always executed
    });  
  
    
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Fortune cookie</h1>
        </header>
        <p className="App-intro">
          Click the cookie to get your fortune!!
        </p>
        <button className="button" onClick={this.crack}>Crack the cookie!!</button>
        
       
          <img className='cookie-full' src={img} />
          
        <Quote 
          quote={this.state.quote.quote}
          author={this.state.quote.author} 
        /> 
        

      </div>
      //return <Cookie /> 
    );
  }
}

export default App;
