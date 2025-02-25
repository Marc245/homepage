import * as React from 'react';
import { Card as MuiCard } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import data from '../../data/cards.json';
import { Box } from '@mui/system';


export default function Card() {
  const [isSmallScreen, setIsSmallScreen] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 400);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: isSmallScreen ? 'column' : 'row',
        gap: 5,
      }}
    >
      {data.map((person, index) => (
        <MuiCard
          key={index}
          sx={{
            maxWidth: 345,
            transition: 'transform 0.3s ease',
            '&:hover': { transform: 'scale(1.1)' },
          }}
        >
          <CardMedia
            sx={{ height: 140, overflow: 'hidden' }}
            component="img"
            alt="person image"
            height="140"
            image="/hirschkaefer.jpg"
          />
          <CardContent sx={{ height: '200px' }}>
            <Typography gutterBottom variant="h5" component="div">
              {person.name}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {person.text}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </MuiCard>
      ))}
    </Box>
  );
}

