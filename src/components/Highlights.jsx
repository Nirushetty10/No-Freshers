import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';

const items = [
  {
    icon: <SettingsSuggestRoundedIcon />,
    title: 'Real-world Projects',
    description:
      'Students who have completed courses in programing, Devops, and other related fields are offered the oportunity to work on real projects, gaining valuable experience and enhancing their skills',
  },
  {
    icon: <SupportAgentRoundedIcon />,
    title: 'Team Collaboration',
    description:
      'We create teams of students, asigning them tasks and tickets(Jira/Click-up) to work on together. This colaborative environment encourages teamwork and communication skills development.',
  },
  {
    icon: <ThumbUpAltRoundedIcon />,
    title: 'Daily stand-up calls',
    description:
      'Each team participates in daily stand-up calls to discuss progress,share updates, and address any challenges they may encounter. This fosters accountability and ensures project momentum.',
  },
  {
    icon: <AutoFixHighRoundedIcon />,
    title: 'Deadline-Oriented',
    description:
      'Proects are conducted with strict deadlines, simulating real-world work environments and preparing students for the demands of professional settings.',
  },
  {
    icon: <QueryStatsRoundedIcon />,
    title: 'Performance Ratings',
    description:
      'Upon completion of projects, students receive performance ratings based on their contributions, problem-solving abilities, teamwork, and overall performance. These ratings serve as valuable endorsements and can be showcased on their LinkedIn profiles.',
  },
];

export default function Highlights() {
  return (
    <Box
      id="Our-services"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: 8,
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
            Our Services
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.400' }}>
            Explore why our product stands out: adaptability, durability,
            user-friendly design, and innovation. Enjoy reliable customer support and
            precision in every detail.
          </Typography>
        </Box>
        <Grid container spacing={2.5}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Stack
                direction="column"
                color="inherit"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  p: 3,
                  height: '200px',
                  border: '1px solid',
                  borderColor: 'grey.800',
                  background: 'transparent',
                  backgroundColor: '#1976d2',
                }}
              >
                <Box sx={{ opacity: '50%', color : "#fff"}}>{item.icon}</Box>
                <div>
                  <Typography fontWeight="medium" gutterBottom sx={{ color: '#fff' }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#fff' }}>
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