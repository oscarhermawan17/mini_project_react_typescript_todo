import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import OutlinedCard from './components/Card'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {
  return (
    <Box sx={{ 
      backgroundColor: 'black',
      padding: '10px 100px'
    }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Item>BACKLOG</Item>
            Test
          <OutlinedCard />
        </Grid>
        <Grid item xs={3}>
          <Item>TODO</Item>
        </Grid>
        <Grid item xs={3}>
          <Item>INP ROGRESS</Item>
        </Grid>
        <Grid item xs={3}>
          <Item>DONE</Item>
        </Grid>
      </Grid>
    </Box>
  )
}

export default App
