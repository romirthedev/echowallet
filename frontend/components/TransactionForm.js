import { useState } from 'react';
import { supabase } from '../utils/supabaseClient';

export default function TransactionForm({ fetchTransactions }) {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from('transactions')
      .insert([{ amount: parseFloat(amount), category, description }]);
    if (!error) {
      fetchTransactions();
      setAmount('');
      setCategory('');
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6">
      <div className="grid grid-cols-1 gap-4">
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="p-2 border rounded dark:bg-gray-800 dark:border-gray-700"
          required
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 border rounded dark:bg-gray-800 dark:border-gray-700"
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="p-2 border rounded dark:bg-gray-800 dark:border-gray-700"
        />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Add Transaction
        </button>
      </div>
    </form>
  );
}
