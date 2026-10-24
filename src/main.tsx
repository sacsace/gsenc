import React from 'react';
import ReactDOM from 'react-dom/client';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import './i18n';
import App from './App';

const theme = createTheme({
  palette: {
    primary: { main: '#0F2744' },
    background: { default: '#F7F9FC' },
  },
  typography: {
    fontFamily:
      '"Pretendard", "Noto Sans KR", "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
