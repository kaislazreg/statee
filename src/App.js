import React, { Component } from 'react'
import Profile from './Profile'
export default class App extends Component {
  constructor(props){
    super(props),
    this.state={
      show:false
    }
  }

  toggel=()=>{
    this.setState({
      show: !this.state.show
    })
  }
  render() {
    console.log(this.state.show)
    return (
      <div>
        <button onClick={()=>this.toggel()} > { this.state.show ? "Hide":"show"}   </button>
        {            
        this.state.show ? (<Profile/>) : "nothing to show" 
                
        }
        
      </div>
    )
  }
}