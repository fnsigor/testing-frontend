'use client'
import Link from "next/link";
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { usePathname } from 'next/navigation';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'To-Do List', href: '/todo-list' },
];

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <AppBar position="static" elevation={2} sx={{
      background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
      mb: 4,
      borderRadius: 0,
    }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'center', gap: 4, minHeight: 64 }}>
        {navLinks.map((link) => (
          <Button
            key={link.href}
            component={Link}
            href={link.href}
            disableRipple
            sx={{
              color: pathname === link.href ? 'white' : 'rgba(255,255,255,0.7)',
              fontWeight: pathname === link.href ? 700 : 500,
              fontSize: '1.1rem',
              borderBottom: pathname === link.href ? '3px solid #fff' : '3px solid transparent',
              borderRadius: 0,
              px: 2,
              py: 1.5,
              transition: 'all 0.2s',
              background: pathname === link.href ? 'rgba(255,255,255,0.08)' : 'transparent',
              '&:hover': {
                color: '#fff',
                background: 'rgba(255,255,255,0.12)',
                borderBottom: '3px solid #fff',
              },
            }}
          >
            {link.label}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
};