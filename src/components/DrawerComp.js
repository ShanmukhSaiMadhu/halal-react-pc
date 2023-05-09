import * as React from 'react';
import {Box, Drawer, Stack, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Avatar, Typography, Divider} from '@mui/material';
import logo from '../assets/logo.png'
import SearchIcon from '@mui/icons-material/Search';
import CandlestickChartOutlinedIcon from '@mui/icons-material/CandlestickChartOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import ChangeHistoryOutlinedIcon from '@mui/icons-material/ChangeHistoryOutlined';
import HourglassEmptyOutlinedIcon from '@mui/icons-material/HourglassEmptyOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import InsightsOutlinedIcon from '@mui/icons-material/InsightsOutlined';

const drawerWidth = 220;

function DrawerComp() {

    const data1 = [
        {
            icon: <SearchIcon />,
            text: 'Search'
        },
        {
            icon: <CandlestickChartOutlinedIcon />,
            text: 'Customizations'
        },
        {
            icon: <WidgetsOutlinedIcon />,
            text: 'Templates'
        },
    ]

    const data2 = [
        {
            icon: <HomeOutlinedIcon />,
            text: 'Dashboard'
        },
        {
            icon: <WatchLaterOutlinedIcon />,
            text: 'Time Tracking'
        },
        {
            icon: <FormatListBulletedOutlinedIcon />,
            text: 'Task List'
        },
        {
            icon: <ChangeHistoryOutlinedIcon />,
            text: 'Lead Pipeline'
        },
        {
            icon: <HourglassEmptyOutlinedIcon />,
            text: 'Estimates'
        },
        {
            icon: <ReceiptOutlinedIcon />,
            text: 'Invoices'
        },
        {
            icon: <BusinessCenterOutlinedIcon />,
            text: 'Projects'
        },
        {
            icon: <CalendarMonthOutlinedIcon />,
            text: 'Schedule'
        },
        {
            icon: <InsertPhotoOutlinedIcon />,
            text: 'Photos & Files'
        },
        {
            icon: <Groups2OutlinedIcon />,
            text: 'Customers'
        },
        {
            icon: <LocationOnOutlinedIcon />,
            text: 'Map'
        },
        {
            icon: <InsightsOutlinedIcon />,
            text: 'Reports'
        },
    ]
  return (
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Stack direction='row' alignItems='center' sx={{p: '0.5rem 1rem'}}>
            <Box 
                component='img'
                src={logo}
                sx={{width: '3rem', height: '3rem'}}
            />
            <Typography variant='h6' sx={{fontWeight: '600'}}>Halal</Typography>
        </Stack>
        <List>
          {data1.map((e,i) => (
            <ListItem key={i} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{minWidth: '2rem'}}>
                  {e.icon}
                </ListItemIcon>
                <ListItemText primary={e.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <List>
            <ListSubheader sx={{textTransform: 'uppercase'}}>
                Main Menu
            </ListSubheader>
          {data2.map((e, i) => (
            e.text === 'Lead Pipeline' ? 
            <ListItem key={i} disablePadding sx={{bgcolor: '#ebebed'}}>
              <ListItemButton>
                <ListItemIcon sx={{minWidth: '2rem'}}>
                   {e.icon}
                </ListItemIcon>
                <ListItemText primary={e.text} />
              </ListItemButton>
            </ListItem> :
            <ListItem key={i} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{minWidth: '2rem'}}>
                   {e.icon}
                </ListItemIcon>
                <ListItemText primary={e.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Divider sx={{mt: '1rem'}} />
        <Stack direction='row' sx={{alignItems: 'center', p: '1rem'}} gap={1}>
            <Avatar src="https://mui.com/static/images/avatar/1.jpg" />
            <Typography sx={{fontWeight: '600'}}>Jacob Jones</Typography>
        </Stack>
      </Drawer>
  );
}

export default DrawerComp