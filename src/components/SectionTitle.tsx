import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

type SectionTitleProps = {
  title: string;
};

function SectionTitle({ title }: SectionTitleProps) {
  const theme = useTheme();

  return (
    <Typography
      variant="h4"
      color="text.primary"
      gutterBottom
      sx={{
        mb: 4,
        textShadow: `
            0 0 4px ${theme.palette.primary.main},
            0 0 4px ${theme.palette.secondary.main}
        `,
        display: 'flex',
        justifyContent: 'center',
        gap: 1,
        position: 'relative',
      }}
    >
      {title}
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          bottom: -20,
          height: 3,
          width: '100%',
          background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
          borderRadius: 2,
          opacity: 1.0,
          filter: 'blur(0.5px)',
        }}
      />
    </Typography>
  );
}

export default SectionTitle;
