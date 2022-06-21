import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './item.css'

export default function Item({data}) {
  return (
    <div className='cardcss'>
        
    <Card sx={{ maxWidth: 345 }}>
    
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <div>Nombre: {data.name}</div> 
         <div>Apellido: {data.username}</div>
         <div>Email: {data.email}</div>
        </Typography>
       
      </CardContent>
      <CardActions>
        
        <Button size="small">Leer Mas</Button>
      </CardActions>
    </Card>
    </div>
  );
}
