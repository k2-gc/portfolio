import { ThemeProvider, CssBaseline } from '@mui/material';
import NeonBlueTheme from './theme/NeonBlue';
import MainLayout from './components/MainLayout';
import HeroSection from './components/HeroSection';
import RepositorySection from './components/RepositorySection';
import SkillsSection from './components/SkillsSection';
import AboutSection from './components/AboutSection';
import ProductSliderSection from './components/ProductSliderSection';

function App() {
  return (
    <>
      <ThemeProvider theme={NeonBlueTheme}>
        <CssBaseline />
        <MainLayout>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <RepositorySection />
          <ProductSliderSection />
        </MainLayout>
      </ThemeProvider>
    </>
  );
}

export default App;
