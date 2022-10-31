import React, { Component } from 'react'

export default class Profile extends Component {
    constructor(){
        super(),
        this.state={   
            timer:0,
            intervall:null


           }
    }
    add=()=>{
        this.setState({
            counter:this.state.counter +1
        })
    }

    componentDidMount(){
     this.setState({
        intervall:setInterval(
            ()=>this.setState({timer:this.state.timer + 1}),1000
        )
     })
    }
   
  render() {
    return (
      <div>
         <div>
     <h1>name:hamdi </h1>
     <h2>full Name: ayadi</h2>
     <img src="https://media.gettyimages.com/vectors/human-face-avatar-icon-profile-for-social-network-man-vector-vector-id1227618807?s=612x612" alt="just a tof"/>
     <h2>bio:nothing to say</h2>
     <h2>profession:vendeur electro</h2>
    </div>
    {this.state.timer}
      </div>
    )
  }
}