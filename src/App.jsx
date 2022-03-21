import React, { useEffect, useState } from "react";
import { Component } from "react";
import { render } from "react-dom";
import { renderIntoDocument } from "react-dom/test-utils";
import FilmProps from "./component/FilmProps"


const App = () => {

    const [people, setPeople] = useState([]);
    const [peopleLoaded, setPeopleLoaded] = useState(false);
    const [films, setFilms] = useState([]);
    const [filmsLoaded, setFilmsLoaded] = useState(false);
    
    const getFilm = async () => { 
        // .then(response => response.json())
        // .then(json => setFilm(json))
      
       try {const res = await fetch('https://ghibliapi.herokuapp.com/films')
        const Data = await res.json()
        setFilms(Data)
        setFilmsLoaded(true)
           
       } catch (error) {
           console.log(error)
       }
       
        
    }
    

    const getPeople = async () => {
    
        // .then(res => res.json())
        // .then(json => setPeople(json))
        try {
             const res = await fetch('https://ghibliapi.herokuapp.com/people')
        const Data = await res.json()
        setPeople(Data)
        setPeopleLoaded(true)
            
        } catch (error) {
            console.log(error)
        }
        
    }
    

    if (filmsLoaded){
        
    }

    return(
        
       films.map((film) =>
        <FilmProps title ={film.title} />

       
        )
    );
};



export default App;