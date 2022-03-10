import React, { Component } from 'react';
import styled from "styled-components";

const Title = styled.h1`
  color : blue;
  display : flex;
  justify-content : center;
`
export default class ToDo extends Component {
    
   state = {
       tasks : '',
       lista : []
   }
   
    handlechange = (event) => {
        this.setState ({
           tasks : event.target.value
        })
    }

     adicionar = (event) => {
        let {lista, tasks} = this.state
        if (tasks != '') {
          this.setState ({
            tasks : '',
            lista : lista.concat({
               tasks : tasks,
               id : Date.now()
            })
         })
        }
        event.preventDefault() 
     }

     delete = (id) => {
       let {lista} = this.state
      this.setState ({
        lista : lista.filter((item)=>{
           return item.id !== id
        })
      })
     }

  render () {
     return (
        <form>
           <Title>React List</Title>
           <input onChange = {this.handlechange} type = "text" value = {this.state.tasks}></input>
           <button onClick = {this.adicionar}>Add</button>
            <div>
               {this.state.lista.map((item)=>(
                 <ul>
                    <li>{item.tasks}
                    <button onClick = {() => {this.delete (item.id)}}>X</button>
                    </li>
                 </ul>
               ))}
            </div>
        </form>
     )
  }
}