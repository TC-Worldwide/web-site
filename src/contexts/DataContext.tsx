import React, { createContext, useContext, useState, useEffect } from 'react';

interface DataContextType {
  data: any;
  fetchData: () => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export function DataProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<any>(null);

  const fetchData = async () => {
    // Implement data fetching logic
    const fetchedData = await fetch('/api/data').then(res => res.json());
    setData(fetchedData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ data, fetchData }}>
      {children}
    </DataContext.Provider>
  );
}

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error('useData must be used within DataProvider');
  return context;
};

export { DataProvider, useData };