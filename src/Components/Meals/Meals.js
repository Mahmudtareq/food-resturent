import { Button, Card, CardActions, CardContent, CardMedia, Grid, Link, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from "framer-motion";

const Meals = ({ foods }) => {
    // console.log(foods);
    const { idMeal,strMealThumb,strMeal ,strInstructions} = foods;
    return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 1.0 }}
      className="mb-2"
    >
      
        
    <Card sx={{ maxWidth: 345,mb:2 }}>
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
        <Typography  sx={{ textAlign: 'left', color:'gray',fontWeight: 'regular' }} variant="body2">
         {strInstructions.slice(0,100)}
        </Typography>
      </CardContent>
      <CardActions>
                    <NavLink style={{textDecoration:'none'}} to={`/details/${idMeal}`}>
                        <Button sx={{ px: 8,mx:4}} variant="contained">Show Details</Button>

                    </NavLink>
      </CardActions>
          </Card>
    </motion.div>
    );
};

export default Meals;