import React, { Component } from 'react'
import classes from './Movie.module.css'

   

class Movie extends Component{


    
    render(){

    
        let img =
            <img  src={require("../../../../posters/"+this.props.id+".jpg")} alt={this.props.title} />
            
        
    
    
        
    
        return(
            <div className={classes.Movie}>
                    {img}
            <p >{this.props.title}</p>

            </div>
        )
    }
}



export default Movie
