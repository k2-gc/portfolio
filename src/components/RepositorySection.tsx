import { Box, Typography, Grid, Paper, Link, Chip } from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';
import SectionTitle from './SectionTitle';

type Repository = {
  title: string;
  techList: string[];
  description: string;
  url: string;
};

const repositoryList: Repository[] = [
  {
    title: 'Video File RTSP Streamer',
    techList: ['Python', 'TypeScript', 'FastAPI', 'React'],
    description:
      'Web-based RTSP video streaming server with React frontend and FastAPI backend. Upload MP4 files and stream via RTSP protocol using Docker Compose.',
    url: 'https://github.com/k2-gc/video-file-rtsp-streamer',
  },
  {
    title: 'RAG Sample Practice',
    techList: ['Python', 'LLM', 'RAG', 'VectorDB'],
    description: 'Just for practicing Retrieval-Augmented Generation (RAG) with local LLMs.',
    url: 'https://github.com/k2-gc/rag-sample-practice',
  },
  {
    title: 'Object Detection Format Converter',
    techList: ['Python', 'Deep Learning', 'Object Detection'],
    description:
      'A tool to convert between various object detection annotation formats (COCO, Pascal VOC, YOLO, etc.) for training deep learning models.',
    url: 'https://github.com/k2-gc/object-detection-format-converter',
  },
  {
    title: 'Video Save Clip',
    techList: ['Python', 'TKinter'],
    description: 'A simple GUI app to save video clips from a video file using Python and TKinter.',
    url: 'https://github.com/k2-gc/video-save-clip',
  },
  {
    title: 'Kawaii Terrarium for VSCode Extension',
    techList: ['TypeScript', 'VSCode Extension API'],
    description:
      'A VSCode extension that adds a cute terrarium animation to your editor, providing a relaxing visual while you take breaks.',
    url: 'https://github.com/k2-gc/kawaii-terrarium',
  },
];

function RepositorySection() {
  const theme = useTheme();

  function Card(repo: Repository, index: number) {
    return (
      <Grid key={index} size={{ xs: 12, md: 6, lg: 4 }}>
        <Link href={repo.url} target="_blank" underline="none" color="secondary">
          <Paper
            elevation={8}
            sx={{
              p: 3,
              height: '100%',
              background: `${alpha(theme.palette.background.paper, 0.6)}`,
              border: `1px solid ${theme.palette.primary.main}`,
              boxShadow: `0 0 10px ${theme.palette.primary.main}`,
              backdropFilter: 'blur(8px)',
              transition: 'box-shadow 0.2s border 0.2s',
              '&:hover': {
                border: `1.0px solid ${theme.palette.primary.light}`,
                boxShadow: `
                  0 0 24px ${theme.palette.primary.light}, 
                  0 0 40px ${theme.palette.primary.main}`,
                transform: 'translateY(-2px)',
              },
            }}
          >
            <Typography variant="h6" color="secondary" gutterBottom>
              {repo.title}
            </Typography>
            {repo.techList.map((tech, techIndex) => (
              <Chip
                label={tech}
                key={techIndex}
                size="small"
                sx={{
                  mr: 1,
                  mb: 1,
                  backgroundColor: alpha(theme.palette.primary.light, 0.15),
                  border: `1px solid ${theme.palette.primary.light}`,
                  color: `${theme.palette.primary.light}`,
                  fontWeight: 500,
                  backdropFilter: 'blur(4px)',
                }}
              />
            ))}

            <Box
              sx={{
                height: '2px',
                my: 2,
                background: `linear-gradient(90deg, ${alpha('#FFFFFF', 0.1)}, ${
                  theme.palette.primary.light
                }, ${alpha('#FFFFFF', 0.1)})`,
              }}
            />

            <Typography color="text.primary" sx={{ opacity: 0.9 }}>
              {repo.description}
            </Typography>
          </Paper>
        </Link>
      </Grid>
    );
  }
  return (
    <Box id="repositories" sx={{ py: 4 }}>
      {/* <Typography variant="h4" color="text.primary" gutterBottom sx={{ mb: 4 }}>
        Repositories
      </Typography> */}
      <SectionTitle title="Repositories" />
      <Grid container spacing={4} justifyContent="left" sx={{ pt: 2 }}>
        {repositoryList.map((repo, index) => Card(repo, index))}
      </Grid>
    </Box>
  );
}

export default RepositorySection;
