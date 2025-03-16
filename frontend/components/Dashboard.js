export default function Dashboard({ transactions }) {
  const totalSpent = transactions.reduce((sum, t) => sum + t.amount, 0);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Your Spending Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold">Past Transactions</h2>
          <ul className="mt-2">
            {transactions.map((t) => (
              <li key={t.id} className="border-b py-2 dark:border-gray-700">
                <span className="font-medium">${t.amount.toFixed(2)}</span> - {t.category} ({t.description})
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold">Total Spent</h2>
          <p className="mt-2 text-2xl font-bold">${totalSpent.toFixed(2)}</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold">Insights</h2>
          <p className="mt-2">Behavioral insights coming soon!</p>
        </div>
      </div>
    </div>
  );
}
