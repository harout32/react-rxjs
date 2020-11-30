import React from 'react';
import './App.scss';
import { DarkModeProvider } from './hooks/useDarkTheme';
import { MainPage } from './layout/MainPage';

function App() {
  return (
    <DarkModeProvider>
      <MainPage />
    </DarkModeProvider>
  );
}

export default App;
