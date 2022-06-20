import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './item.css'

export default function MediaCard({character}) {
  return (
    <div className='cardcss'>
        
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={character.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <div>{character.name}</div> 
         <div>{character.species}</div>
        </Typography>
       
      </CardContent>
      <CardActions>
        
        <Button size="small">Leer Mas</Button>
      </CardActions>
    </Card>
    </div>
  );
}
