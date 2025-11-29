import { Box, Typography, Paper, Stack } from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';
import SectionTitle from './SectionTitle';

function AboutSection() {
  const theme = useTheme();
  return (
    <Box sx={{ py: 4 }}>
      <SectionTitle title="About Me" />
      <Stack alignItems="center" sx={{ pt: 2 }}>
        <Paper
          elevation={6}
          sx={{
            p: 4,
            maxWidth: 600,
            background: alpha(theme.palette.background.paper, 0.7),
            backdropFilter: 'blur(8px)',
            border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
            boxShadow: `0 4px 32px ${alpha(theme.palette.primary.main, 0.14)}`,
          }}
        >
          <Typography variant="h6" color="secondary" gutterBottom>
            Behind the Code
          </Typography>

          <Typography color="text.primary" sx={{ mb: 2 }}>
            👋 Hi there! I’m a software engineer based in Japan. I specialize in deep learning for
            computer vision, including:
          </Typography>

          <ul style={{ marginTop: 0, marginBottom: '1.2rem', paddingLeft: '1.3rem' }}>
            <li>Image classification</li>
            <li>Object detection</li>
            <li>Anomaly detection</li>
            <li>GANs</li>
            <li>Point clouds</li>
            <li>ViT and other transformer-based models</li>
          </ul>

          <Typography color="text.primary" sx={{ mb: 2 }}>
            I enjoy reading research papers and have hands-on experience implementing a wide range
            of image-based deep learning models such as VGG, ResNet, GAN variants, anomaly detection
            pipelines, point cloud networks, and ViT architectures.
          </Typography>

          <Typography color="text.primary" sx={{ mb: 2 }}>
            I also have solid experience in data science and I’m proficient with Python, C/C++,
            Docker, Git/GitHub, Linux, Jetson edge devices, PyTorch, ONNX, and TensorRT — including
            building full ML workflows from preprocessing to deployment.
          </Typography>

          <Typography color="text.primary" sx={{ mb: 1 }}>
            Recently, I’ve been expanding my skills into{' '}
            <Box component="strong" sx={{ color: 'secondary.main' }}>
              TypeScript / React
            </Box>{' '}
            development and the{' '}
            <Box component="strong" sx={{ color: 'secondary.main' }}>
              LLM domain
            </Box>{' '}
            as well. I’ve built:
          </Typography>

          <ul style={{ marginTop: 0, marginBottom: '1.2rem', paddingLeft: '1.3rem' }}>
            <li>a browser-based ONNX inference app</li>
            <li>a web app that streams RTSP from MP4</li>
            <li>a simple RAG + local LLM chatbot running fully offline</li>
          </ul>

          <Typography color="text.primary">
            I’m always excited to create tools that combine AI, web technology, and user experience
            into something meaningful{' '}
            <Box component="strong" sx={{ color: 'secondary.main' }}>
              (and sometimes meaningless)
            </Box>
            .
          </Typography>

          <Typography variant="subtitle1" color="secondary" sx={{ mt: 3, mb: 1 }}>
            Experience
          </Typography>

          <ul
            style={{
              marginTop: 0,
              paddingLeft: '1.3rem',
              color: 'secondary',
            }}
          >
            <li>Languages: Python, C/C++, TypeScript</li>
            <li>Frameworks: PyTorch, React, FastAPI, ONNX, TensorRT</li>
            <li>Infrastructures: Docker, Kubernetes</li>
            <li>Hobbies: Programming, Reading, LeetCode, Kaggle</li>
          </ul>
        </Paper>
      </Stack>
    </Box>
  );
}

export default AboutSection;
