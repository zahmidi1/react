
import React, { Component } from 'react'

export class Us extends Component {
    render() {

        const { login , avatar_url , html_url} =this.props.usrs;
        return (
            <div className="card text-white bg-secondary mb-3">
            <img className="card-img-top" src={avatar_url} alt=""/>
            <div className="card-body">
              <h4 className="card-title">{login}</h4>
              <p className="card-text">
                  <a href={html_url} className="btn btn-success">show more</a>
                  
              </p>
            </div>
            </div>
      
        )
    }
}

export default Us
