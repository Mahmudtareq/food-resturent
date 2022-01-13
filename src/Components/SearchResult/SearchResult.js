import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

const SearchResult = ({ meal }) => {
    // console.log(meal);
    const {idMeal,strMealThumb,strMeal ,strInstructions } = meal;
    return (
        <div>
    <Card sx={{maxWidth: 345,mb:2}}>
      <CardMedia
        component="img"
        height="190"
        image={strMealThumb}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Name : {strMeal}
        </Typography>
        <Typography variant="body2"sx={{ textAlign: 'left', color:'gray',fontWeight: 'regular' }}>
         {strInstructions.slice(0,100)}
        </Typography>
      </CardContent>
      <CardActions>
                    <NavLink style={{textDecoration:'none'}} to={`/details/${idMeal}`}>
                        <Button sx={{ px: 8, mx: 4 }} variant="contained">Show Details</Button>

                    </NavLink>
      </CardActions>
    </Card>
        </div>
    );
};

export default SearchResult;