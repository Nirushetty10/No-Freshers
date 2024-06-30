import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';

const items = [
  {
    icon: <SettingsSuggestRoundedIcon />,
    title: 'Practical Experience',
    description:
      'Our program goes beyond traditional classroom learning, providing students with practical, hands-on experience that employers value.',
  },
  {
    icon: <SupportAgentRoundedIcon />,
    title: 'Career Development',
    description:
      'By participating in real time proects and receiving performance ratings, students gain insights into their strengths and areas for improvements, helping them to better position themselves in the job market.',
  },
  {
    icon: <ThumbUpAltRoundedIcon />,
    title: 'Industry-Driven Curriculum',
    description:
      'Our projects are designed in collaboration with industry experts, ensuring relevance to current industry trends and technologies.',
  },
  {
    icon: <AutoFixHighRoundedIcon />,
    title: 'Professional Networking',
    description:
      'Through teamwork and collboration, students have the opportunity to network with peers, mentors, and industry professionals, expanding their professional network.',
  }
];

export default function ChooseUs() {
  return (
    <Box
      id="ChooseUs"
      sx={{
        pt: { xs: 4, sm: 4 },
        // pb: { xs: 8, sm: 16 },
        color: '#06090a',
        // bgcolor: '#06090a',
      }}
    >
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: '100%', md: '100%' },
            textAlign: { sm: 'left', md: 'center' },
          }}
        >
          <Typography component="h2" variant="h4">
            Why Choose Us
          </Typography>
        </Box>
        <Grid container spacing={2.5}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Stack
                direction="column"
                color="inherit"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  p: 3,
                  height:  { sm: '150px', md: '250px' },
                  border: '1px solid',
                  borderColor: 'grey.800',
                  background: 'transparent',
                }}
              >
                <Box sx={{display : "flex", justifyContent : 'center', alignItems : "center", pb : 2}}>{item.icon}</Box>
                <div>
                  <Typography fontWeight="600" gutterBottom sx={{textAlign: { sm: 'left', md: 'center' }, pb : 1}}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2">
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}