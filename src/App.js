import './App.css';
import React, { Component } from 'react'
export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      items: [],
      currentItem: {
        text: "",
        key:''
      }
    }
  }
  render() {
    return (
      <div className='App'>
      <header>
        <form id="to-do-form">
          <input type="text" placeholder='Enter Message !!' />
            <button type='submit'>
              Add
          </button>
        </form>
      </header>
      </div>
      )
  }
}
export default App