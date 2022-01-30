import React, { Component } from 'react';
import './App.css';
import Counter from './Counter';
import Users from './Users';


class App extends Component
{
  state = {
    input: "",
    user: "",


    // une: "",
    // eml: "",
    // nbr: "",
    
    // username: "",
    // email: "",
    // number: "",
    // show: false,
  }



  changeName = (e) =>
  {
    this.setState({
      user: e.target.value,
      isTrue: false,
    })
  }

  changeSubmit = (e) =>
  {
    e.preventDefault();
    this.setState({
      input: this.state.user,
      user: "",
      isTrue: true,
    })
  }
  
  changeView = (e) =>
  {
    this.setState({
      input: "",
      isTrue:false,
    })
  }



  // handleInput = (e) =>
  // {
  //   this.setState({
  //     [e.target.id]: e.target.value,
  //     show: false,
  //   })
  // };

  // handleemail = (e) =>
  // {
  //   this.setState({
  //     email: e.target.value,
  //     show: false,
  //   })
  // };

  // handleNumber = (e) =>
  // {
  //   this.setState({
  //     Number: e.target.value,
  //     show: false,
  //   })
  // }

  // handlesubmit = (e) =>
  // {
  //   e.preventDefault();
  //   this.setState({
  //     show: true,

  //     une: this.state.username,
  //     eml: this.state.email,
  //     nbr: this.state.number,

  //     username: "",
  //     email: "",
  //     number: "",
  //   })
  // }

  render()
  {
    return (
      <div >
        {/* <Counter /> */}


        <form onSubmit={this.changeSubmit}>
          <input type="text" value={this.state.user} placeholder='enter your name' onChange={this.changeName} />
          <input type="submit" />
        </form>
        {this.state.isTrue ? (
          <>
            <p>{this.state.input}</p>
            <button onClick={this.changeView}>dellet</button>
          </>  
        ) : ("")}
        

        <Users />
        
        




        {/* {this.state.show ?(
          <>
            <p>{this.state.une}</p>
            <p>{this.state.eml}</p>
            <p>{this.state.nbr}</p>
          </>
        ):( "")}
        <form onSubmit={this.handlesubmit}>
          <input id='username' type="text" value={this.state.username} placeholder="enter username" onChange={this.handleInput}/>
          <input id='email' type="email" value={this.state.email} placeholder="enter email" onChange={this.handleInput} />
          <input id='number' type="number" value={this.state.number} placeholder='enter the number' onChange={this.handleInput}/>
          <input type="submit" />
        </form> */}
      </div>
  );
  }
}

export default App;
