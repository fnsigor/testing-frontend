"use client";
import { TextField, Button, Box, Paper } from '@mui/material';
import { useState } from 'react';
import { useTodoList } from './contex';

export const InputItem = () => {
  const [newItem, setNewItem] = useState('');
  const { addItem } = useTodoList();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newItem.trim()) {
      addItem(newItem.trim());
      setNewItem('');
    }
  };

  return (
    <Paper 
      elevation={2} 
      sx={{ 
        p: 3, 
        mb: 3, 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderRadius: 3
      }}
    >
      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
        <TextField
          slotProps={{
            htmlInput: {
              'data-testid': 'input-item',
            },
          }}
          fullWidth
          label="Nova tarefa"
          variant="outlined"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Digite uma nova tarefa..."
          size="medium"
          sx={{
            '& .MuiOutlinedInput-root': {
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              borderRadius: 2,
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 1)',
              },
              '&.Mui-focused': {
                backgroundColor: 'white',
              }
            },
            '& .MuiInputLabel-root': {
              color: 'rgba(255, 255, 255, 0.8)',
              '&.Mui-focused': {
                color: 'white',
              }
            }
          }}
        />
        <Button 
          data-testid="button-add"
          type="submit" 
          variant="contained" 
          disabled={!newItem.trim()}
          sx={{ 
            minWidth: 140,
            height: 56,
            borderRadius: 2,
            background: 'rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            color: 'white',
            fontWeight: 600,
            textTransform: 'none',
            fontSize: '1rem',
            '&:hover': {
              background: 'rgba(255, 255, 255, 0.3)',
              transform: 'translateY(-2px)',
              boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
            },
            '&:disabled': {
              background: 'rgba(255, 255, 255, 0.1)',
              color: 'rgba(255, 255, 255, 0.5)',
            },
            transition: 'all 0.3s ease'
          }}
        >
          Adicionar
        </Button>
      </Box>
    </Paper>
  );
};
