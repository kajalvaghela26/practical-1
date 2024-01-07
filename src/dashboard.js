
import { Box, CssBaseline, Divider, Drawer, List,ListItem, ListItemButton, ListItemIcon, ListItemText,  Typography, MenuItem,  Collapse, InputAdornment, InputLabel, Select, Button } from '@mui/material';
import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { LocalizationProvider } from '@mui/x-date-pickers';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import Checkbox from '@mui/material/Checkbox';
const Dashborad=()=>{
    const [open, setOpen] = useState(true);
    const drawerWidth = 240;

    const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
      ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
          transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
          marginLeft: 0,
        }),
      }),
    );
    
    const handleToggle = (index) => {
      console.log('data',open === index ? null : index )
      setOpen(open === index ? true : index);
    };
    console.log('open', open)
  
  const handleSubMenu = (title) => {
    let array;
    if (title === 'Library') {
      array = ['Syncs', 'Uploads'];
    } else if (title === 'Collection') {
      array = ['Tracks', 'Playlist', 'Artists', 'Albums', 'Genres', 'Decades', 'Geos'];
    } else if (title === 'Studio') {
      array = ['Inspiration', 'Mood Recolonization'];
    }

    return (
      <>
        {array && array.length > 0 && (
          <Collapse in={open === title} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {array.map((el) => (
                <MenuItem key={el} onClick={() => handleSubItemClick(title, el)}>
                  {el}
                </MenuItem>
              ))}
            </List>
          </Collapse>
        )}
      </>
    );
  };
  const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
  const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ];
  const handleSubItemClick = (title, subItem) => {
   
    console.log(`Clicked on ${subItem} in ${title} sub-menu`);
  };
    return (
        <div className='bg-color'>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
      
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <Divider />
          <List>
          {['Home', 'Library', 'Collection', 'Studio'].map((text, index) => (
            <>{index===0?(<><ListItem key={text} disablePadding>
              <ListItemButton >
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton></ListItem></>):(<>    <React.Fragment key={text}>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleToggle(text)}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
              {open === text ? <ExpandMoreIcon /> : null}
            </ListItemButton>
          </ListItem>
          {handleSubMenu(text)}
        </React.Fragment></>)}</>
     
      ))}
          </List>
        </Drawer>
        <Main open={open}>
                <div className='main'>
                  <div className='child_lable' > 
                    <TextField
                            id="outlined-basic"
                            placeholder="Search"
                            variant="outlined"
                            sx={{
                              height: '40px', // Set the desired height
                              '& input': {
                                height: '100%', // Make the input take up the full height
                              },
                            }}
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start" >
                                  <SearchIcon />
                                </InputAdornment>
                              ),
                            }}
                      />
    </div>
    <div className='child_drop'>
      <div className='lble_1'><InputLabel htmlFor="my-input">Premium</InputLabel></div>
    
    <div className='lble_1'><InputLabel htmlFor="my-input">Pro</InputLabel></div>
    <div className='lble_1'> <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    placeholder='User Name'
    label="Age"
    className='drop-down'
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select></div>
    </div>
                </div>
                <div className='sub-child'>
                  <div className='title'>Calendar</div>
                  <Divider />
                  <div className='main_sub'>
                    <div className='btn_date'><div className='btn_sheduled'><Button className='btn_color' disableElevation>
  Scheduled Music
</Button></div> </div>
                    <div className='calaendar'>
                      
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateCalendar />
                    </LocalizationProvider>
                    <span>Scheduled</span>
                    <div className='sub_main_child'>
                          
                      <div> <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    placeholder='User Name'
    label="Age"
    className='drop-down'
  >
    <MenuItem value={10}>
      Work Out
    </MenuItem>
    <MenuItem value={20}>Study</MenuItem>
    <MenuItem value={30}>Other</MenuItem>
  </Select>
 </div>
 <div style={{marginLeft:'10px'}}> <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    placeholder='User Name'
    label="Age"
    className='drop-down'
  >
    <MenuItem value={10}>
      Listen
    </MenuItem>
    <MenuItem value={20}>Practice</MenuItem>
    <MenuItem value={30}>Other</MenuItem>
  </Select>
 </div>
                    </div>
                  </div>
                  </div>
                </div>
         
        </Main>
      </Box>
      </div>
      
    );
}
export default Dashborad