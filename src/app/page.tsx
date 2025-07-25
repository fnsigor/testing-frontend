import { Container, Typography, Box, Button, Stack } from '@mui/material';
import Link from 'next/link';

export default function Home() {
  return (
    <Container maxWidth="md" sx={{ py: 8, minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontWeight: 800,
            mb: 2,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: 1
          }}
        >
          Laboratório de Testes Automatizados
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: 400, mb: 2 }}>
          Testes unitários e de integração com Jest e Testing Library <br /> Testes e2e com Cypress
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 3 }}>
          <Button
            component={Link}
            href="/todo-list"
            variant="contained"
            size="large"
            sx={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              fontWeight: 600,
              px: 4,
              borderRadius: 3,
              boxShadow: 2,
              textTransform: 'none',
              transition: 'all 0.25s cubic-bezier(.4,2,.6,1)',
              '&:hover': {
                background: 'linear-gradient(135deg, #5a67d8 0%, #6b21a8 100%)',
                color: 'white',
                transform: 'scale(1.07)',
                boxShadow: '0 8px 32px 0 rgba(102,126,234,0.25)',
              },
            }}
          >
            To-Do List
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}
