import { AppBar, Toolbar, Typography, Menu, MenuItem, IconButton, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';

export const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar 
      position="static" 
      sx={{ 
        backgroundColor: '#ffffff',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        py: { xs: 0.2, sm: 0.5 },
        borderBottom: '2px solid #3a4a6b'
      }}
    >
      <Toolbar sx={{ 
        display: 'flex', 
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: { xs: '0 8px', sm: '0 16px', md: '0 24px' },
        minHeight: { xs: '48px', sm: '56px' },
        flexWrap: 'wrap'
      }}>
        {/* Logo and Branding Section */}
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center',
          gap: { xs: '8px', sm: '12px' },
          order: { xs: 1, sm: 1 },
          flex: { xs: 1, sm: 'none' }
        }}>
          {/* Logo would go here */}
          <Box>
            <Typography 
             
              component="div"
              sx={{ 
                fontSize: { xs: '20px', sm: '28px', md: '32px', lg: '40px' },
                fontWeight: 700,
                letterSpacing: '0.5px',
                fontFamily: '"Elephant", sans-serif',
                color: '#2c3e50',
                lineHeight: 1,
                whiteSpace: 'nowrap',fontSize:30
              }}
            >
             AUTOMATED GATE<br></br>PASS SYSTEM
            </Typography>
            <Typography 
              variant="caption"
              sx={{
                display: { xs: 'none', sm: 'block' },
                color: '#3a4a6b',
                fontStyle: 'italic',
                fontWeight: 500,
                letterSpacing: '0.3px',
                fontSize: { sm: '0.6rem', md: '0.7rem', lg: '0.8rem' },
                mt: -0.5,
                ml: 0.5
              }}
            >
              "Your Key to Exit"
            </Typography>
          </Box>
        </Box>

        {/* Tagline - Visible on all screens but adjusts position */}
        <Typography 
          variant="body2"
          sx={{
            display: 'block',
            color: '#5d6d7e',
            fontWeight: 400,
            fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.85rem' },
            mx: { xs: 0, sm: 2 },
            flexGrow: { xs: 0, sm: 1 },
            paddingRight:'160px',
            textAlign: 'center',
            fontStyle: 'italic',
            order: { xs: 3, sm: 2 },
            width: { xs: '100%', sm: 'auto' },
            mt: { xs: 1, sm: 0 },
            mb: { xs: 1, sm: 0 }
          }}
        >
          College Gate Pass Management System
        </Typography>
        
        {/* Action Buttons and Menu */}
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: { xs: 1, sm: 2 },
          order: { xs: 2, sm: 3 },
          flexShrink: 0
        }}>
          <Link to="/r"><Button
            variant="contained"
            size="small"
            sx={{
              backgroundColor: '#3a4a6b',
              color: 'white',
              borderRadius: '4px',
              textTransform: 'none',
              fontWeight: 600,
              fontSize: { xs: '0.7rem', sm: '0.75rem' },
              px: { xs: 1, sm: 2 },
              py: { xs: 0.5, sm: 1 },
              minWidth: 'auto',
              '&:hover': {
                backgroundColor: '#2c3e50',
                boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
              },
              whiteSpace: 'nowrap'
            }}
          >

            Register
          </Button></Link>
          
          <IconButton
            size={window.innerWidth < 600 ? "small" : "medium"}
            edge="end"
            aria-label="menu"
            aria-controls="basic-menu"
            aria-haspopup="true"
            onClick={handleClick}
            sx={{ 
              color: '#2c3e50',
              padding: { xs: '6px', sm: '8px' },
              '&:hover': {
                backgroundColor: 'rgba(58, 74, 107, 0.1)'
              }
            }}
          >
            <MenuIcon sx={{ fontSize: { xs: '24px', sm: '28px' } }} />
          </IconButton>
          
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
            PaperProps={{
              sx: {
                mt: 0.5,
                minWidth: { xs: '160px', sm: '200px' },
                borderRadius: '8px',
                boxShadow: '0 2px 15px rgba(0,0,0,0.15)',
                border: '1px solid rgba(0,0,0,0.05)',
                '&:before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: 'linear-gradient(90deg, #3a4a6b 0%, #2c3e50 100%)'
                }
              }
            }}
          >
            <Typography 
              variant="subtitle2" 
              sx={{
                px: 2,
                py: 1,
                color: '#3a4a6b',
                fontWeight: 600,
                fontSize: { xs: '0.7rem', sm: '0.75rem' },
                borderBottom: '1px solid rgba(0,0,0,0.05)',
                background: 'rgba(58, 74, 107, 0.05)'
              }}
            >
              ACCESS MENU
            </Typography>
            
            <MenuItem 
              onClick={handleClose}
              sx={{
                fontSize: { xs: '0.8rem', sm: '0.9rem' },
                padding: { xs: '8px 12px 8px 20px', sm: '10px 16px 10px 24px' },
                color: '#2c3e50',
                '&:hover': {
                  backgroundColor: 'rgba(58, 74, 107, 0.08)'
                }
              }}
            >
              Student Portal
            </MenuItem>
            <MenuItem 
              onClick={handleClose}
              sx={{
                fontSize: { xs: '0.8rem', sm: '0.9rem' },
                padding: { xs: '8px 12px 8px 20px', sm: '10px 16px 10px 24px' },
                color: '#2c3e50',
                '&:hover': {
                  backgroundColor: 'rgba(58, 74, 107, 0.08)'
                }
              }}
            >
              Faculty Access
            </MenuItem>
            <MenuItem 
              onClick={handleClose}
              sx={{
                fontSize: { xs: '0.8rem', sm: '0.9rem' },
                padding: { xs: '8px 12px 8px 20px', sm: '10px 16px 10px 24px' },
                color: '#2c3e50',
                '&:hover': {
                  backgroundColor: 'rgba(58, 74, 107, 0.08)'
                }
              }}
            >
              Office Admin
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;