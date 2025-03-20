import React, { Suspense } from 'react';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './App.css';
import AppRoutes from './routes/routes';

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AppRoutes />
    </Suspense>
  );
}

export default App;
