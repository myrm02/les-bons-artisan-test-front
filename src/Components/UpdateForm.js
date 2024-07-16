import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { alpha, styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function UpdateForm(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: 'rgb(51 65 85)',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'black',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'black',
        borderWidth: '1.5px'
      },
      '&:hover fieldset': {
        borderColor: 'black',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'black',
      },
    },
  });

  const UpdateButton = styled(Button)(() => ({
    backgroundColor: grey[500],
    borderRadius: '133px',
    '&:hover': {
      backgroundColor: grey[700],
    },
  }));

  const availability = [
    {
      value: 'true',
      label: 'En stock',
    },
    {
      value: 'false',
      label: 'Epuisé',
    },
  ];

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >

          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
                    <Grid item xs={12}>
                <CssTextField
                  required
                  fullWidth
                  id="email"
                  label="Nom"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <CssTextField
                  required
                  fullWidth
                  name="password"
                  label="Type de produit"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
              {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" fullWidth size='small' value={name} onChange={(event) => {setName(event.target.value)}  }/> */}
                <CssTextField id="outlined-adornment-amount"
                    label="Prix" 
                    fullWidth
                    type='number'
                    InputProps={{
                        endAdornment: <InputAdornment position="end">€</InputAdornment>,
                    }}
                />
              </Grid>
              <Grid item xs={12} sm={8}>
                <CssTextField id="outlined-adornment-amount"
                    label="Durée de la garantie" 
                    fullWidth
                    type='number'
                    helperText="En nombre d'années"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <CssTextField
                    select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={age}
                    label="Disponibilité"
                    defaultValue="En stock"
                    // onChange={handleChange}
                    fullWidth
                    SelectProps={{
                        native: true,
                    }}
                    sx={{ mt: -1.6 }}
                >
                    {availability.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </CssTextField>
              </Grid>
              <Grid item xs={12} sm={8}>
                <UpdateButton
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: -1.6 }}
                    style={{color: 'white', fontWeight: "bold"}}
                    onClick={props.update()}
                >
                    Enregistrer les modifications
                </UpdateButton>
               </Grid>
            </Grid>
            {/* <div className="remove-items-button">
                <Button label="Enregistrer les modifications" clickAction={() => {removeAllFromCart()}}/>
            </div> */}
            
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}