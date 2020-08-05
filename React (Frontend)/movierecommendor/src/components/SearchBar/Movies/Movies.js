import React, { Component, Fragment } from 'react'
import propType from 'prop-types'
import Movie from './Movie/Movie.js'
import classes from './Movies.module.css'
export class Movies extends Component {

    
    render() {
        let movie=null
        
        // console.log(JSON.parse(this.props.moviesdata)[0].movieId)
        

        movie = JSON.parse(this.props.moviesdata).map(movie=>(
        
        <Movie title={movie.title} id={movie.movieId}  key={movie.movieId}/>
        ))
        let heading=null
        if (movie!==null){
            heading=<p className={classes.heading}>Movies you might like: </p>
        }
        return (
            <Fragment>
                {heading}
            <div className={classes.Movies}>
                
                {movie}
            </div>
            </Fragment>
            
        )
    }
}

Movies.propTypes = {
    movies:propType.array
}

export default Movies
