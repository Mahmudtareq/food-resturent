import React, { useEffect, useState } from 'react';
import "./Restaurant.css";
import {TextField ,Container, Grid, Input, Button, AppBar} from '@mui/material';
import Meals from '../Meals/Meals';
import { Link, NavLink } from "react-router-dom";
import SearchResult from '../SearchResult/SearchResult';

const Restaurant = () => {
    const [searchText, setSearchText] = useState('');
    const [meals, setMeals] = useState([]);

      const handleSearchField = e => {
        const searchTextValue = e.target.value;
        setSearchText(searchTextValue);
        e.preventDefault();
        
    }
    
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
            .catch((error) => console.log(error));
    },[searchText])
  
    return (
        <Container>
           
            <div className="search Container">
              
                    <Input
                    sx={{ width: 500, mt:15, mb:10 }}
                    placeholder='Search Meals'
                    onChange={handleSearchField}
                />       
            </div>
            <div className="search-container">
                <div className=''>
                    { searchText ?  (
                        <div className='food-mapping'>
                            {meals ?(
                                meals.map(meal => <SearchResult
                                    meal={meal}
                                    key={meal.idMeal}
                                >    
                                </SearchResult>)
                            ) :
                            (
                                    <Link style={{ textDecoration: 'none', backgroundColor: 'gray', padding: '10px', textAlign: 'center' }} to="/addNewMeal">Add New Meal { searchText}</Link>
     
                            )}

                        </div>
                        )
                        :
                        (
                    
                <div className='food-mapping'>
                                
                     {
                        meals.map(foods=> <Meals
                            foods={foods}
                            key={foods.idMeal}
                        >  
                       </Meals>)
                      }

                   </div>

                        )}

                </div>
            </div>
        </Container>
    );
};

export default Restaurant;