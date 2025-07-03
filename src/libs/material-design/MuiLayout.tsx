import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';

export const MuiLayout = ({children,}: Readonly<{ children: React.ReactNode}>) => {
return (

  <AppRouterCacheProvider>
     {children}
  </AppRouterCacheProvider>
)
}