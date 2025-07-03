"use client";
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Typography, Paper, Box } from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material';
import { useTodoList } from './contex';

export const ItemList = () => {
  const { items, removeItem } = useTodoList();

  if (items.length === 0) {
    return (
      <Paper 
        elevation={1} 
        sx={{ 
          p: 4, 
          textAlign: 'center',
          background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
          borderRadius: 3,
          border: '1px solid rgba(255, 255, 255, 0.3)'
        }}
      >
        <Typography 
          variant="h6" 
          color="text.secondary"
          sx={{ 
            fontWeight: 500,
            mb: 1
          }}
        >
          📝 Lista Vazia
        </Typography>
        <Typography variant="body1" color="text.secondary" data-testid="no-items-alert">
          Nenhuma tarefa adicionada ainda. Adicione sua primeira tarefa acima!
        </Typography>
      </Paper>
    );
  }

  return (
    <Paper 
      elevation={2} 
      sx={{ 
        borderRadius: 3,
        overflow: 'hidden',
        border: '1px solid rgba(0, 0, 0, 0.08)'
      }}
    >
      <Box sx={{ 
        p: 2, 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white'
      }}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          📋 Suas Tarefas ({items.length})
        </Typography>
      </Box>
      <List sx={{ p: 0 }}>
        {items.map((item, index) => (
          <ListItem
            data-testid="list-item"
            key={index}
            sx={{
              borderBottom: index < items.length - 1 ? '1px solid rgba(0, 0, 0, 0.06)' : 'none',
              transition: 'all 0.2s ease',
              '&:hover': {
                backgroundColor: 'rgba(102, 126, 234, 0.04)',
                transform: 'translateX(4px)',
              },
              '&:last-child': {
                borderBottom: 'none'
              }
            }}
          >
            <ListItemText
              primary={item}
              primaryTypographyProps={{
                variant: 'body1',
                sx: { 
                  wordBreak: 'break-word',
                  fontWeight: 500,
                  color: 'text.primary'
                }
              }}
            />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="deletar"
                onClick={() => {
                  removeItem(index);
                }}
                sx={{ 
                  color: '#ff6b6b',
                  backgroundColor: 'rgba(255, 107, 107, 0.1)',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 107, 107, 0.2)',
                    transform: 'scale(1.1)',
                    color: '#ff5252'
                  },
                  transition: 'all 0.2s ease'
                }}
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};