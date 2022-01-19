import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from '../components/Layout';
import Dashboard from '../pages/Dashboard';
import List from '../pages/List';

const App: React.FC = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/list/:movimentType" element={<List />} />
    </Routes>
  </Layout>
);

export default App;
