import * as Yup from 'yup';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import RHFTextField from './RHFTextfield';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import Alert from '@mui/material/Alert';
import FormProvider from './hook-form/form-provider.jsx';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const tiers = [
  {
    title: 'Basic',
    price: '499',
    description: [
      'Ed Tech',
      'Finance',
    ],
    buttonText: 'Enroll Now',
    buttonVariant: 'outlined',
  },
  {
    title: 'Professional',
    subheader: 'Recommended',
    price: '999',
    description: [
      'Ecommerce',
      'Telecom',
    ],
    buttonText: 'Enroll Now',
    buttonVariant: 'contained',
  },
  {
    title: 'Enterprise',
    price: '1499',
    description: [
      'Social Platform',
      'Banking',
      'Health Care',
    ],
    buttonText: 'Enroll Now',
    buttonVariant: 'outlined',
  },
];

export default function Plans() {
  const [currentUser, setCurrentUser] = React.useState([
    {
      title : "name", value : ''
    },
    {
      title : "email", value : ''
    },
    {
      title : "phoneNumber", value : ''
    }
  ])
  const [modalOpen, setModalOpen] = React.useState(false)
  const [plan, setPlan] = React.useState('')

  const NewUserSchema = Yup.object().shape({
    name: Yup.string().when('$headerFormFields', (headerFormFields, headerSchema) => {
      if (!currentUser[0].value) {
        return headerSchema.required("Please provide the Full Name");
      }
      return headerSchema;
    }),
    email: Yup.string().when('$headerFormFields', (headerFormFields, headerSchema) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!currentUser[1].value) {
        return headerSchema.required("Please provide the Email Address");
      }
      if(!emailRegex.test(currentUser[1].value)) {
        return headerSchema.required("Email must be a valid email address");
      }
      return headerSchema;
    }).email('Email must be a valid email address'),
    // email: Yup.string().email('Email must be a valid email address'),
    phoneNumber: Yup.string().when('$headerFormFields', (headerFormFields, headerSchema) => {
      if (!currentUser[2].value) {
        return headerSchema.required("Please provide the Phone number");
      }
      return headerSchema;
    })
  });

  const defaultValues = React.useMemo(
    () => ({
      name: currentUser[0].value || '',
      email: currentUser[1].value || '',
      phoneNumber: currentUser[2].value || '',
    }),
    [currentUser]
  );

  const methods = useForm({
    resolver: yupResolver(NewUserSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      const payLoad = {
        name : currentUser[0].value,
        email : currentUser[1].value,
        phoneNumber : currentUser[2].value,
        plan
      };
      toast.info("Please wait", {
        position: "top-center",
        autoClose: 1500
      });
      const response = await axios.post('http://localhost:4000/api/user', payLoad);
      toast.dismiss();
      debugger
      toast.success(response.data, 
        {
          position: "top-center",
          autoClose: 1500
        });
        reset();
        setCurrentUser((prvs)=> {
          let temp = [...prvs];
          temp[0].value = ''
          temp[1].value = ''
          temp[2].value = ''
          return temp;
        })
        setModalOpen(false);
    } catch (error) {
      toast.dismiss();
      toast.error(error?.response?.data, 
        {
          position: "top-center",
          autoClose: 1500
        });
    }
  });

  return (
    <>
        <Container
      id="plans"
      sx={{
        width : "100%",
        pt: { xs: 4, sm: 12 },
        // pb: { xs: 4, sm: 16 },
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
          textAlign: { sm: 'center', md: 'center' },
        }}
      >
        <Typography component="h2" variant="h4" color="text.primary">
          Plans
        </Typography>
      </Box>
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        {tiers.map((tier) => (
          <Grid
            item
            key={tier.title}
            xs={12}
            sm={tier.title === 'Enterprise' ? 12 : 6}
            md={4}
          >
            <Card
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
                border: tier.title === 'Professional' ? '1px solid' : undefined,
                borderColor:
                  tier.title === 'Professional' ? 'primary.main' : undefined,
                background:
                  tier.title === 'Professional'
                    ? 'linear-gradient(#033363, #021F3B)'
                    : undefined,
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    mb: 1,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    color: tier.title === 'Professional' ? 'grey.100' : '',
                  }}
                >
                  <Typography component="h3" variant="h6">
                    {tier.title}
                  </Typography>
                  {tier.title === 'Professional' && (
                    <Chip
                      icon={<AutoAwesomeIcon />}
                      label={tier.subheader}
                      size="small"
                      sx={{
                        background: (theme) =>
                          theme.palette.mode === 'light' ? '' : 'none',
                        backgroundColor: 'primary.contrastText',
                        '& .MuiChip-label': {
                          color: 'primary.dark',
                        },
                        '& .MuiChip-icon': {
                          color: 'primary.dark',
                        },
                      }}
                    />
                  )}
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'baseline',
                    color: tier.title === 'Professional' ? 'grey.50' : undefined,
                  }}
                >
                  <Typography component="h3" variant="h2">
                    ₹{tier.price}
                  </Typography>
                  <Typography component="h3" variant="h6">
                    &nbsp; per project
                  </Typography>
                </Box>
                <Divider
                  sx={{
                    my: 2,
                    opacity: 0.2,
                    borderColor: 'grey.500',
                  }}
                />
                {tier.description.map((line) => (
                  <Box
                    key={line}
                    sx={{
                      py: 1,
                      display: 'flex',
                      gap: 1.5,
                      alignItems: 'center',
                    }}
                  >
                    <CheckCircleRoundedIcon
                      sx={{
                        width: 20,
                        color:
                          tier.title === 'Professional'
                            ? 'primary.light'
                            : 'primary.main',
                      }}
                    />
                    <Typography
                      component="text"
                      variant="subtitle2"
                      sx={{
                        color:
                          tier.title === 'Professional' ? 'grey.200' : undefined,
                      }}
                    >
                      {line}
                    </Typography>
                  </Box>
                ))}
              </CardContent>
              <CardActions>
                <Button
                  fullWidth
                  variant={tier.buttonVariant}
                  onClick={() => {
                    setPlan(tier.title);
                    setModalOpen(true)
                  }}
                >
                  {tier.buttonText}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Dialog
      fullWidth
      maxWidth={false}
      open={modalOpen}
      // onClose={onClose}
      PaperProps={{
        sx: { maxWidth: 720},
      }}
    >
      <FormProvider methods={methods} onSubmit={onSubmit}>
        <DialogTitle>{plan}</DialogTitle>

        <DialogContent>
          <Alert variant="outlined" severity="info" sx={{ mb: 3 }}>
            Please complete all the necessary information, and we will contact you shortly.
          </Alert>

          <Box
            rowGap={3}
            columnGap={2}
            display="grid"
            gridTemplateColumns={{
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(3, 1fr)',
            }}
          >
            <RHFTextField name="name" label="Full Name" value={currentUser[0].value} onChange={(e)=> {
              setCurrentUser((prvs)=> {
                let temp = [...prvs];
                debugger
                temp[0].value = e.target.value;
                return temp;
              })
            }}/>
            <RHFTextField name="email" label="Email Address" value={currentUser[1].value} onChange={(e)=> {
              setCurrentUser((prvs)=> {
                let temp = [...prvs];
                debugger
                temp[1].value = e.target.value;
                return temp;
              })
            }}/>
            <RHFTextField name="phoneNumber" label="Phone Number" type='number' value={currentUser[2].value} onChange={(e)=> {
              setCurrentUser((prvs)=> {
                let temp = [...prvs];
                debugger
                temp[2].value = e.target.value.substring(0, 10);;
                return temp;
              })
            }}/>
          </Box>
        </DialogContent>

        <DialogActions>
          <Button variant="outlined" onClick={()=> {
            setCurrentUser((prvs)=> {
              let temp = [...prvs];
              temp[0].value = ''
              temp[1].value = ''
              temp[2].value = ''
              return temp;
            })
            reset();
            setModalOpen(false)
            }}>
            Cancel
          </Button>

          <Button type="submit" variant="contained" loading={isSubmitting}>
            Submit
          </Button>
        </DialogActions>
      </FormProvider>
    </Dialog>
    </Container>
    <ToastContainer />
    </>
  );
}