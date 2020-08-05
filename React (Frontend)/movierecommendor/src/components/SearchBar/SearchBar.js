import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css'
import axios from 'axios'
import Movies from './Movies/Movies'
import { findAllByDisplayValue } from '@testing-library/react';
export class SearchBar extends Component {
  static propTypes = {
    options: PropTypes.instanceOf(Array).isRequired
  };
  

  state = {
    filteredOptions: [],
    showOptions: false,
    moviename: '',
    moviesdata:null,
    datafetched:false,
    classbtn:true
    
  };

  onsubmithandler = (e) => {
    
    e.preventDefault();
    // get our form data out of state
    const  moviename = this.state.moviename;
    const data = {
      movie:moviename
    }
    axios.post('http://localhost:5000/',data)
      .then((response) => {
        
         this.setState({moviesdata:response.data.movies_data, datafetched:true})
      })
      .catch(err=>{
        console.log(err)
        this.setState({datafetched:findAllByDisplayValue})
      });
  }

  onChange = (e) => {
    
    const userInput = e.currentTarget.value;
    const { options } = this.props;
    // console.log(this.state.moviename)
    const filteredOptions = options.filter(
      (optionName) =>
        optionName.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    ).slice(0,5);

    // console.log(filteredOptions);

    this.setState({
      filteredOptions,
      showOptions: true,
      moviename:userInput,
      classbtn:false
    })
    
    
  };

  onClick = (e) => {
    // console.log(e.currentTarget.innerText)
    const updatedmovie= e.currentTarget.innerText
    this.setState({
      filteredOptions: [],
      showOptions: false,
      moviename: updatedmovie,
      classbtn:true
      
    });
    
    setTimeout(()=>{

      // console.log(this.state.moviename)
    },800)
  };

  

  

  render() {
    const {
      onChange,
      onClick,
      

      state: {  filteredOptions, showOptions, moviename }
    } = this;
    let optionList;
    if (showOptions && moviename) {
      if (filteredOptions.length) {
        optionList = (
          <ul className="options ">
            {filteredOptions.map((optionName, index) => {
              let className;
              
              return (
                <li className={className} key={index} onClick={onClick}>
                  {optionName}
                </li>
              );
            })}
          </ul>
        );
      } else {
        optionList = (
          <div className="no-options">
            <em>No Option!</em>
          </div>
        );
      }
    }
    let searchbtn=null
    
    if(this.state.classbtn){
      searchbtn=(<input type="submit" value="" className="search-btn"/>)
    }
    return (
      <React.Fragment>
        
        <form onSubmit={this.onsubmithandler}>
            <div className="search">
            <input
            type="search"
            className="search-box"
            onChange={onChange}
            value={this.state.moviename}
            name = "moviename"
            placeholder="Enter Movie Name..."
            autoComplete="off"
          />
          {searchbtn}
        {optionList}

        
        
        </div>
        </form>
      { this.state.datafetched ?<Movies moviesdata={this.state.moviesdata}/> : null
  }  
      </React.Fragment>
    );
  }
}

export default SearchBar;
