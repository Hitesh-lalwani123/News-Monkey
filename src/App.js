import React, { Component } from 'react'
import './App.css'
import Navbar from './components/Navbar'
// import Ss from './components/Ss'
import News from './components/News'


export default class App extends Component {
  render() {
    return (
      <>
    
      <Navbar title = "News Monkey" About = "About"/>
   
      <News/>
      {/* <Ss/> */}
      </>

    )
  }
}
