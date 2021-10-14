import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import ChangePasswordForm from './ChangePasswordForm';

export type PasswordDataType = {
  oldPassword: string;
  newPassword: string;
};

const UserProfile = () => {
  const changePasswordHandler = async (passwordData: PasswordDataType) => {
    try {
      const response = await axios.patch(
        '/api/user/change-password',
        passwordData
      );
      console.log(response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('isAxiosError');
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        }
      } else {
        console.log('Error', error.message);
      }
    }
  };

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
        <ChangePasswordForm onChangePassword={changePasswordHandler} />
      </Grid>
    </Grid>
  );
};

export default UserProfile;
