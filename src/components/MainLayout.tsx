import { Container } from '@mui/material';

type WholeProps = {
  children: React.ReactNode;
};

function MainLayout({ children }: WholeProps) {
  return (
    <Container
      maxWidth="md"
      sx={{
        px: { xs: 1, sm: 2, md: 4 },
        py: 0,
        gap: 8,
      }}
    >
      {children}
    </Container>
  );
}

export default MainLayout;
