import React, { Component } from 'react';
import axios from "axios"

class Users extends Component
{
    state = {
        // users: [],
        load: null,
        error: null,
        todos: [],
        
    }

    componentDidMount()
    {
        // axios.get(" https://jsonplaceholder.typicode.com/users")

            axios.get(" https://jsonplaceholder.typicode.com/todos")
            .then((res) =>
            {
                this.setState({
                    load: false,
                    // users: res.data,
                    todos: res.data,
                })
            })
            .catch((err) =>
            {
                this.setState({
                    load: false,
                    error: err.message,
                })
            })
    }



    render()
    {
        // const { users, error, load } = this.state;
        const { todos, error, load } = this.state;
        return (
            <div>
                {load ? "loading...." : ""}
                {error ? error : ""}

                {/* {Users.length > 0 ?
                                <ul>
                                    {users.map((user) =>
                                    {
                                        return (
                                            <li key={user.id}>
                                                Name:{user.name} , Email:{user.email} , Phon:{user.phone} , 
                                                Website:{user.website} , Id:{user.id}
                                            </li>
                                        )
                                    })}
                                </ul>
                        : ""} */}
                    
                    {todos.length > 0 ?
                    <ul>
                        {todos.map((todo) =>
                        {
                            return (
                                <li key={todo.id}>
                                    Title : {todo.title} , Completed : {todo.completed} , Id : {todo.id}
                                </li>
                            )
                        })}
                        
                    </ul>
                    : ""}
            </div>
            
            
            
            
            
            
            
            
            
        )
    } 
}
    

export default  Users