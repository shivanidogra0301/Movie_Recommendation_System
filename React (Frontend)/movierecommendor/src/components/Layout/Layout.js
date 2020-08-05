import React, { Component, Fragment } from 'react'

import Navbar from '../Navigation/Navbar'
import SearchBar from '../../components/SearchBar/SearchBar'
import moviename from '../../assets/movie_name.json'

class Layout extends Component {
    render() {
        return (
            <Fragment>
                <Navbar/>
                <main >
                    <SearchBar options={moviename}/>
                    
                </main>
            </Fragment>
        )
    }
}

export default Layout
