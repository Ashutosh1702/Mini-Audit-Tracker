import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ObservationProvider } from './context/ObservationContext';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import Breadcrumb from './components/layout/Breadcrumb';
import Dashboard from './components/dashboard/Dashboard';
import ObservationList from './components/ObservationList';
import StatusChart from './components/StatusChart';
import ObservationForm from './components/ObservationForm';

function App() {
  return (
    <Router>
      <ObservationProvider>
        <div className="min-h-screen bg-gray-100 w-full">
          <Sidebar />
          <div className="lg:pl-64">
            <Header />
            <Breadcrumb />
            <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/observations" element={<ObservationList />} />
                <Route path="/observations/new" element={<ObservationForm />} />
                <Route path="/observations/:id" element={<ObservationForm />} />
                <Route path="/reports/status" element={<StatusChart />} />
                <Route path="/reports/analytics" element={<div>Analytics Page</div>} />
              </Routes>
            </main>
          </div>
        </div>
      </ObservationProvider>
    </Router>
  );
}

export default App;
