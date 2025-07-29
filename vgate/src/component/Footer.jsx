import { Box, Typography, Grid, Link, Container, Divider, IconButton, useTheme, useMediaQuery } from '@mui/material';
import { LocationOn, Phone, Email, Facebook, Twitter, YouTube, Instagram } from '@mui/icons-material';

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  return (
    <Box 
      bgcolor="#2c3e50" 
      color="white" 
      mt={8}
      py={isMobile ? 4 : 6}
      sx={{
        width: '100%',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={isMobile ? 3 : 4}>
          {/* College Information */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography 
              variant={isMobile ? "h6" : "h5"}
              fontWeight={700} 
              mb={isMobile ? 2 : 3}
              sx={{
                fontFamily: '"Playfair Display", serif',
                color: '#f8f9fa',
                fontSize: isMobile ? '1.25rem' : '1.5rem'
              }}
            >
              Vimala College
            </Typography>
            <Typography 
              mb={isMobile ? 1.5 : 2} 
              sx={{ 
                lineHeight: 1.6,
                fontSize: isMobile ? '0.875rem' : '1rem'
              }}
            >
              Premier institution in Thrissur since 1937, committed to academic excellence and holistic development.
            </Typography>
            
            {!isMobile && (
              <Box mt={3}>
                <Typography 
                  variant="subtitle1" 
                  mb={2} 
                  fontWeight={600}
                >
                  Follow Us
                </Typography>
                <Box display="flex" gap={2}>
                  <IconButton 
                    href="https://www.facebook.com/vimalacollegethrissurofficial/" 
                    target="_blank"
                    sx={{ 
                      color: 'white',
                      backgroundColor: '#3b5998',
                      '&:hover': { backgroundColor: '#344e86' }
                    }}
                  >
                    <Facebook />
                  </IconButton>
                  <IconButton 
                    href="https://twitter.com/vimalacollege" 
                    target="_blank"
                    sx={{ 
                      color: 'white',
                      backgroundColor: '#1DA1F2',
                      '&:hover': { backgroundColor: '#1a8cd8' }
                    }}
                  >
                    <Twitter />
                  </IconButton>
                  <IconButton 
                    href="https://www.youtube.com/@vimalacollegeofficial" 
                    target="_blank"
                    sx={{ 
                      color: 'white',
                      backgroundColor: '#FF0000',
                      '&:hover': { backgroundColor: '#e60000' }
                    }}
                  >
                    <YouTube />
                  </IconButton>
                  <IconButton 
                    href="https://www.instagram.com/vimalacollegethrissurofficial/" 
                    target="_blank"
                    sx={{ 
                      color: 'white',
                      backgroundColor: '#E1306C',
                      '&:hover': { backgroundColor: '#c91d56' }
                    }}
                  >
                    <Instagram />
                  </IconButton>
                </Box>
              </Box>
            )}
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography 
              variant={isMobile ? "h6" : "h5"}
              fontWeight={700} 
              mb={isMobile ? 2 : 3}
              sx={{
                fontFamily: '"Playfair Display", serif',
                color: '#f8f9fa',
                fontSize: isMobile ? '1.25rem' : '1.5rem'
              }}
            >
              Contact Us
            </Typography>
            <Box display="flex" alignItems="flex-start" mb={isMobile ? 1.5 : 2}>
              <LocationOn sx={{ 
                mr: isMobile ? 1 : 2, 
                mt: isMobile ? 0 : 0.5, 
                color: '#e74c3c',
                fontSize: isMobile ? '1rem' : '1.25rem'
              }} />
              <Typography sx={{ fontSize: isMobile ? '0.875rem' : '1rem' }}>
                Thrissur - 680009,<br />
                Kerala, India
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" mb={isMobile ? 1.5 : 2}>
              <Phone sx={{ 
                mr: isMobile ? 1 : 2, 
                color: '#e74c3c',
                fontSize: isMobile ? '1rem' : '1.25rem'
              }} />
              <Typography sx={{ fontSize: isMobile ? '0.875rem' : '1rem' }}>+91 487 236 1234</Typography>
            </Box>
            <Box display="flex" alignItems="center" mb={isMobile ? 1.5 : 2}>
              <Email sx={{ 
                mr: isMobile ? 1 : 2, 
                color: '#e74c3c',
                fontSize: isMobile ? '1rem' : '1.25rem'
              }} />
              <Typography sx={{ fontSize: isMobile ? '0.875rem' : '1rem' }}>info@vimalacollege.edu</Typography>
            </Box>
          </Grid>
          {/* Social Icons - Only show on mobile */}
          {isMobile && (
            <Grid item xs={12}>
              <Typography 
                variant="subtitle1" 
                mb={2} 
                fontWeight={600}
                sx={{ textAlign: 'center' }}
              >
                Follow Us
              </Typography>
              <Box display="flex" justifyContent="center" gap={2}>
                <IconButton 
                  href="https://www.facebook.com/vimalacollegethrissurofficial/" 
                  target="_blank"
                  size="medium"
                  sx={{ 
                    color: 'white',
                    backgroundColor: '#3b5998',
                    '&:hover': { backgroundColor: '#344e86' }
                  }}
                >
                  <Facebook />
                </IconButton>
                <IconButton 
                  href="https://twitter.com/vimalacollege" 
                  target="_blank"
                  size="medium"
                  sx={{ 
                    color: 'white',
                    backgroundColor: '#1DA1F2',
                    '&:hover': { backgroundColor: '#1a8cd8' }
                  }}
                >
                  <Twitter />
                </IconButton>
                <IconButton 
                  href="https://www.youtube.com/@vimalacollegeofficial" 
                  target="_blank"
                  size="medium"
                  sx={{ 
                    color: 'white',
                    backgroundColor: '#FF0000',
                    '&:hover': { backgroundColor: '#e60000' }
                  }}
                >
                  <YouTube />
                </IconButton>
                <IconButton 
                  href="https://www.instagram.com/vimalacollegethrissurofficial/" 
                  target="_blank"
                  size="medium"
                  sx={{ 
                    color: 'white',
                    backgroundColor: '#E1306C',
                    '&:hover': { backgroundColor: '#c91d56' }
                  }}
                >
                  <Instagram />
                </IconButton>
              </Box>
            </Grid>
          )}
        </Grid>

        {/* Copyright - Moved inside Container and centered */}
        <Box mt={isMobile ? 3 : 4}>
          <Divider sx={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', mb: 2 }} />
          <Typography 
            variant="body2" 
            textAlign="center"
            sx={{ 
              fontSize: isMobile ? '0.75rem' : '0.875rem',
              opacity: 0.8
            }}
          >
            © {new Date().getFullYear()} Vimala College, Thrissur. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;