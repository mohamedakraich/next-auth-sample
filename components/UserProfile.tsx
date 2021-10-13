import { useSession } from 'next-auth/react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const UserProfile = () => {
  const { status } = useSession();

  if (status === 'loading') {
    return <Box component="p">Loading...</Box>;
  } else if (status === 'unauthenticated') {
    window.location.href = '/auth';
  } else {
    return (
      <Grid container justifyContent="center">
        <Typography variant="h2" component="h2">
          Profile Page
        </Typography>
      </Grid>
    );
  }
};

export default UserProfile;
