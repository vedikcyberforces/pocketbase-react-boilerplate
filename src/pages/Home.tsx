import GearIcon from '@mui/icons-material/Settings';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useInjection } from 'inversify-react';
import { useEffect } from 'react';
import { ServiceIdentifiers } from '../constants';
import { CollegeService } from '../services/college.service';

export const HomePage = () => {
  const collegeService: CollegeService = useInjection(ServiceIdentifiers.CollegeService);

  useEffect(() => {
    (async () => {
      const list = await collegeService.getFullList();
      console.log(list);
    })();
  }, []);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <GearIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
