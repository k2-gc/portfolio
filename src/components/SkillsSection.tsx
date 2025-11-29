import { Box, Typography, Stack, LinearProgress } from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';
import SectionTitle from './SectionTitle';

type Skill = {
  name: string;
  level: number; // 0 to 100
};

const skills: Skill[] = [
  { name: 'Python', level: 80 },
  { name: 'TypeScript', level: 30 },
  { name: 'JavaScript', level: 30 },
  { name: 'C/C++', level: 50 },
  { name: 'React', level: 70 },
  { name: 'ML/AI', level: 70 },
  { name: 'Computer Vision', level: 70 },
  { name: 'Docker', level: 80 },
];

function SkillsSection() {
  const theme = useTheme();

  return (
    <Box sx={{ py: 4 }}>
      <SectionTitle title="Skills" />
      <Stack spacing={3} maxWidth={500} mx="auto" sx={{ pt: 2 }}>
        {skills.map((skill) => (
          <Box key={skill.name}>
            <Typography color="secondary" sx={{ mb: 1 }}>
              {skill.name}
            </Typography>
            <LinearProgress
              variant="determinate"
              value={skill.level}
              sx={{
                height: 12,
                borderRadius: 6,
                backgroundColor: alpha(theme.palette.primary.main, 0.1),
                boxShadow: `inset 0 0 12px ${theme.palette.primary.dark}`,
                '& .MuiLinearProgress-bar': {
                  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  boxShadow: `0 0 12px ${theme.palette.secondary.main}`,
                  zIndex: 1,
                },
              }}
            />
          </Box>
        ))}
      </Stack>
    </Box>
  );
}

export default SkillsSection;
