import { Box, Typography, Button, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function HeroSection() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        pt: 8,
        pb: 6,
      }}
    >
      <Typography
        variant="h2"
        sx={{
          color: 'text.primary',
          textShadow: `
            0 0 24px ${theme.palette.primary.main}, 
            0 0 48px ${theme.palette.secondary.main}
          `,
          mb: 2,
        }}
      >
        Welcome to My Space
      </Typography>
      <Typography
        variant="h5"
        sx={{
          color: 'text.primary',
          textShadow: `0 0 16px ${theme.palette.primary.main}`,
          mb: 4,
        }}
      >
        Building Intelligent Systems with Vision, AI & Web Technology
      </Typography>
      <Stack direction="row" spacing={3}>
        <Button
          variant="outlined"
          size="large"
          href="#repositories"
          sx={{
            color: theme.palette.text.primary,
            background: theme.palette.background.default,
            borderColor: theme.palette.primary.main,
            boxShadow: `0 0 8px ${theme.palette.primary.main}`,
            '&:hover': {
              color: theme.palette.background.default,
              background: theme.palette.secondary.main,
              borderColor: theme.palette.secondary.main,
              boxShadow: `0 0 24px ${theme.palette.secondary.main}`,
            },
          }}
        >
          Repositories
        </Button>
        <Button
          variant="outlined"
          size="large"
          href="https://github.com/k2-gc"
          target="_blank"
          sx={{
            color: theme.palette.text.primary,
            borderColor: theme.palette.secondary.main,
            boxShadow: `0 0 8px ${theme.palette.secondary.main}`,
            '&:hover': {
              color: theme.palette.background.default,
              background: theme.palette.primary.main,
              borderColor: theme.palette.primary.main,
              boxShadow: `0 0 24px ${theme.palette.primary.main}`,
            },
          }}
        >
          GitHub
        </Button>
      </Stack>
    </Box>
  );
}

export default HeroSection;
