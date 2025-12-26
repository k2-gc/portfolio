import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Button,
  Stack,
  IconButton,
  Box,
} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import kawaiiTerrariumDemo from '../assets/kawaii-terrarium-demo.gif';

type Product = {
  title: string;
  description: string;
  publish: string[];
  imageUrl: string;
  links: { label: string; url: string }[];
};

const products: Product[] = [
  {
    title: 'Kawaii Terrarium',
    description:
      'Cute Animal Characters called Mofu will be displayed on your VSCode screen to heal your mind while working.',
    publish: ['VSCode Extension Marketplace'],
    imageUrl: kawaiiTerrariumDemo,
    links: [
      { label: 'GitHub', url: 'https://github.com/k2-gc/kawaii-terrarium' },
      {
        label: 'VSCode Marketplace',
        url: 'https://marketplace.visualstudio.com/items?itemName=k2-gc.kawaii-terrarium',
      },
    ],
  },
];

const ProductSliderSection: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  const next = () => setCurrent((prev) => (prev === products.length - 1 ? 0 : prev + 1));

  const product = products[current];

  return (
    <section style={{ margin: '4rem 0' }}>
      <SectionTitle title="Product Introduction" />
      <Box display="flex" alignItems="center" justifyContent="center">
        <IconButton onClick={prev} sx={{ color: '#00f0ff' }}>
          <ArrowBackIosNewIcon fontSize="large" />
        </IconButton>
        <Card
          sx={{
            minWidth: 320,
            maxWidth: 400,
            mx: 2,
            borderRadius: 3,
            boxShadow: '0 0 16px #00f0ff55',
            bgcolor: '#101522',
            color: '#fff',
            textAlign: 'center',
          }}
        >
          <CardMedia
            component="img"
            image={product.imageUrl}
            alt={product.title}
            sx={{
              width: '90%',
              maxHeight: 200,
              objectFit: 'contain',
              borderRadius: 2,
              bgcolor: '#222',
              mb: 2,
              mt: 2,
              mx: 'auto',
              boxShadow: '0 0 24px 4px #00f0ff88, 0 0 0 4px #00f0ff44',
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
                transform: 'scale(1.04)',
                boxShadow: '0 0 32px 8px #00f0ffcc, 0 0 0 6px #00f0ff88',
              },
            }}
          />
          <CardContent>
            <Typography variant="h5" component="div" sx={{ color: '#00f0ff', mb: 1 }}>
              {product.title}
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              {product.description}
            </Typography>
            <Stack
              direction="row"
              spacing={1}
              justifyContent="center"
              sx={{ mb: 2, flexWrap: 'wrap' }}
            >
              {product.publish.map((tech) => (
                <Chip
                  key={tech}
                  label={tech}
                  sx={{
                    bgcolor: '#00f0ff22',
                    color: '#00f0ff',
                    fontWeight: 'bold',
                  }}
                />
              ))}
            </Stack>
            <Stack direction="row" spacing={2} justifyContent="center">
              {product.links.map((link) => (
                <Button
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  sx={{
                    bgcolor: '#00f0ff',
                    color: '#101522',
                    fontWeight: 'bold',
                    '&:hover': { bgcolor: '#00bcd4' },
                  }}
                >
                  {link.label}
                </Button>
              ))}
            </Stack>
          </CardContent>
        </Card>
        <IconButton onClick={next} sx={{ color: '#00f0ff' }}>
          <ArrowForwardIosIcon fontSize="large" />
        </IconButton>
      </Box>
    </section>
  );
};

export default ProductSliderSection;
