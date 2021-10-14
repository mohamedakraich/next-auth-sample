import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ChangePasswordForm from './ChangePasswordForm';

const UserProfile = () => {
  return (
    <Grid
      container
      justifyContent="center"
      direction="column"
      alignItems="center"
    >
      <Grid mt={2}>
        <Typography variant="h2" component="h2">
          Your User Profile
        </Typography>
      </Grid>
      <Grid>
        <ChangePasswordForm />
      </Grid>
    </Grid>
  );
};

export default UserProfile;
