import { InputItem } from "./components/InputItem";
import { ItemList } from "./components/ItemList";
import { TodoListProvider } from "./components/contex";
import { Container, Typography, Box } from '@mui/material';

export default function TodoList() {
  return (
    <TodoListProvider>
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography 
            variant="h3" 
            component="h1" 
            sx={{ 
              fontWeight: 700,
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 1
            }}
          >
            ✨ To-Do List
          </Typography>
          <Typography 
            variant="h6" 
            color="text.secondary"
            sx={{ fontWeight: 400 }}
          >
            Organize suas tarefas de forma simples e eficiente
          </Typography>
        </Box>
        
      <InputItem />
      <ItemList />
      </Container>
    </TodoListProvider>
  );
}