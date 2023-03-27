import './App.css';
import { SnackbarProvider, useSnackbar } from 'notistack'
import { AppRouter } from './router/AppRouter';

function App() {
  return (
    <SnackbarProvider autoHideDuration={5000} maxSnack={10} >

    <div className='App'>
      <AppRouter />
    </div>

    </SnackbarProvider>
  );
}

export default App;
