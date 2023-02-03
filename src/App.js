
import './App.css';

import React, { Component } from 'react'
import ListItem from './ListItem.js';
import {library} from '@fortawesome/fontawesome-svg-core'
import {faTrash} from '@fortawesome/free-regular-svg-icons'
 class App extends Component {
  constructor(props){
    super(props);
    this.state={
      items:[],
      currentItem:{
        text:"",
        key:"",
      },
    }
    this.handleInput=this.handleInput.bind(this);
    this.addItem=this.addItem.bind(this);
  }

  handleInput(e){
    this.setState({
      currentItem:{
        text:e.target.value,
        key:Date.now()
      }
    })
  }

  addItem(e){
    e.preventDefault();
    const newItem=this.state.currentItem;
    console.log(newItem);
    if(newItem.text!==""){
      const newItems = [...this.state.items,newItem];
      this.setState({
        items:newItems,
        currentItems:{
          text:"",
          key:""
        }
      })
    }
  }

  render() {
    return (
      <div className='App'>
        <header>
          <form id="to-do-form" onSubmit={this.addItem} >
           <input type="text" placeholder='Enter the task' value={this.state.currentItem.text} onChange={this.handleInput}/> 
            <button type='submit'>ADD</button>
          </form>
        </header>
        <ListItem items={this.state.items}></ListItem>
      </div>
    )
  }
}


export default App;
