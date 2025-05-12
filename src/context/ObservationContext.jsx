import React, { createContext, useContext, useState, useEffect } from 'react';

const ObservationContext = createContext(undefined);

export const ObservationProvider = ({ children }) => {
  const [observations, setObservations] = useState(() => {
    const saved = localStorage.getItem('observations');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('observations', JSON.stringify(observations));
  }, [observations]);

  const addObservation = (observation) => {
    const newObservation = {
      ...observation,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    };
    setObservations(prev => [...prev, newObservation]);
  };

  const updateObservation = (id, updates) => {
    setObservations(prev =>
      prev.map(obs => (obs.id === id ? { ...obs, ...updates } : obs))
    );
  };

  const deleteObservation = (id) => {
    setObservations(prev => prev.filter(obs => obs.id !== id));
  };

  return (
    <ObservationContext.Provider
      value={{ observations, addObservation, updateObservation, deleteObservation }}
    >
      {children}
    </ObservationContext.Provider>
  );
};

export const useObservations = () => {
  const context = useContext(ObservationContext);
  if (context === undefined) {
    throw new Error('useObservations must be used within an ObservationProvider');
  }
  return context;
}; 