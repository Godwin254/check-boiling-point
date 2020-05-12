import React, { Component } from 'react'

const TodoItem = ({text}) => {
     return <li className = "todo-list">{text}</li>
}

class TodoApp extends Component {
     constructor(props){
          super(props)
          this.state = {
               todos: [],
               newTodo: ''
          };
     }

     //property method to handle submit
     handleSubmit = (e) => {
          e.preventDefault();
          const todos = [...this.state.todos,this.state.newTodo]

          this.setState({
               todos,
               newTodo: ''
          })
     }
     render() {
          const {newTodo} = this.state;
          const todos = this.state.todos.map((t,i) => (<TodoItem key = {i} text = {t} />));

          return (
               <div className = "todo-app">
                    <h1>Simple to-do list</h1>
                    <form onSubmit = {this.handleSubmit}>
                         <input className = "todo-input" autoComplete = "off" type = "text" 
                         name = "newTodo" placeholder ="Enter an activity" value = {newTodo} onChange = {(e) => this.setState({[e.target.name]:e.target.value})} />
                         <button type = "submit" className = "save-button">Save activity</button>
                    </form>
                    <div className = "todo-content">
                         <ol>
                              {todos}
                         </ol>
                    </div>
               </div>
          )
     }
}

export default TodoApp
