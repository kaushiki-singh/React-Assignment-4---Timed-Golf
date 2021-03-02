import React, { Component, useState } from "react";
import "../styles/App.css";
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: 0, x: 0, y: 0 , completed:false};
    this.updateTime = this.updateTime.bind(this);
    this.timer = this.timer.bind(this);
  }
  getSeconds(time){
    return `0${time%60}`.slice(-2);
  }

  getMinutes(time){
    return Math.floor(time/60);
  }
  componentDidMount() {
    const keyListener = document.addEventListener("keydown",(event)=>{
      // console.log(event.keyCode);
      if(!this.state.completed){
      switch(event.keyCode){
        case 37:
          this.setState(state=>{
            return {
              x: state.x-5,
              y: state.y
            }
      });
      break;
      case 38:
        this.setState(state=>{
          return {
            x: state.x,
            y: state.y-5
          }
        });
        break;
        case 39:
          this.setState(state=>{
           return{
            x: state.x+5,
            y: state.y
          }
          });
          break;
          case 40:
            this.setState(state=>{
              return{
                x: state.x,
                y: state.y+5
              }
            });
            break;
      }
    
      // console.log("yes");
      if(this.state.x===250 && this.state.y===250){
        this.setState({
          completed: true
        })
      }
    }
    })
    }

  componentWillUnmount() {
    return () => document.removeEventListener("keydown",keyListener)
  }
  
  updateTime(){
    if(this.state.completed)
  {
    console.log("reached");
    clearInterval(this.myInterval);
  } 
    this.setState(state=>({
      time: state.time + 1
    }));
    
  }

timer(){ 
    this.myInterval = setInterval(this.updateTime, 1000);
  
}

  render() {
    return (
 <>
 <div className="fullPage">
   <button className="start" onClick={this.timer}>Start</button>
   <div className="heading-timer">Time Passed : {this.getMinutes(this.state.time)}:{this.getSeconds(this.state.time)}</div>
   <div className="ball" style={{
     left: this.state.x+"px",
     top: this.state.y+"px",
     position: "absolute"
   }}></div>
   <div className="hole"></div>
 </div>
</>
    );
  }
}

export default Timer;
