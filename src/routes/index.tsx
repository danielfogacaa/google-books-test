import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Home, BookDetails } from 'pages';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/book-list' replace />} />
        <Route path='/book-list' element={<Home />} />
        <Route path='/book-details/:id' element={<BookDetails />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  );
};
