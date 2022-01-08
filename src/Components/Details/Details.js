import { Card, CardContent, CardMedia, Container, Divider, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Details = () => {
    const { id } = useParams();
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
        fetch(url)
            .then(res => res.json())
            // .then(data => setMeals(data.meals))
            // .then(data => console.log(data.meals[0]));
            .then(data => setMeals(data.meals[0]));
        
    },[id])
    return (
        <>
        <Container sx={{my:5}}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Card >
                        <CardMedia
                            component="img"
                            image={meals.strMealThumb}
                            alt="green iguana"
                        />
                    </Card>
                  
                    </Grid>
                <Grid item xs={12} md={6}>
                        <Card sx={{p:2}}>
                                <Typography sx={{ textAlign: 'start',color:"info.main" }} gutterBottom variant="h4" component="div">
                                    {meals.strMeal}
                                </Typography>
                                
                                <Typography sx={{textAlign:'start',color:'success.main'}} gutterBottom variant="h6" component="div">
                                     {meals.strArea}
                                </Typography>
                                <Divider />
                                <Typography sx={{ textAlign: 'start', py: 3, lineHeight:2}} variant="body1" color="text.secondary">
                                   {meals.strInstructions}
                                </Typography>
                                <Divider />
                        
                        </Card>
                    
                </Grid>
            </Grid>
            </Container>
            
        </>
    );
};

export default Details;