import { useState, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient';
import DarkModeToggle from '../components/DarkModeToggle';
import TransactionForm from '../components/TransactionForm';
import Dashboard from '../components/Dashboard';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    const { data, error } = await supabase.from('transactions').select('*').order('created_at', { ascending: false });
    if (data) setTransactions(data);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <header className="p-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold">EchoWallet</h1>
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </header>
      <main className="p-4">
        <Dashboard transactions={transactions} />
        <TransactionForm fetchTransactions={fetchTransactions} />
      </main>
    </div>
  );
}
