import React, { Component } from 'react'

import axios from 'axios'
import Us from './Us'


export class User extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             usrs:[]
        }
    }
    getUsers =() => {
        axios.get('https://api.github.com/users')
        .then(respense => {
            this.setState({
                usrs : respense.data
            })
        })
    }
    componentDidMount(){
        this.getUsers();
    }
   
    render() {
        return (
            <div>
              
                <div className="row">
                {this.state.usrs.map(usrs => (  //map  un poucle comme  for
            
                <div className="col-md-4">
                    <Us usrs={usrs}/>
                 </div>
                
                ))}
                
            </div>
            </div>
        )
    }
}

export default User;
