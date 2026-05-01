import { useState } from 'react';
import { checkAdmin, fetchProfiles } from '../services/api';

export default function DashboardPage({ user, role, token, onLogout }) {
  const [profiles, setProfiles] = useState([]);
  const [adminMessage, setAdminMessage] = useState('');
  const [error, setError] = useState('');

  const handleFetchProfiles = async () => {
    setError('');
    try {
      const result = await fetchProfiles(token);
      setProfiles(result);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to load profiles.');
    }
  };

  const handleAdminCheck = async () => {
    setError('');
    try {
      const result = await checkAdmin(token);
      setAdminMessage(result.message || 'Admin access granted.');
    } catch (err) {
      setError(err.response?.data?.error || 'Admin access denied.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-12 p-6 bg-white rounded-xl shadow-md">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">Dashboard</h2>
          <p className="text-sm text-gray-600">Xin chào, {user}. Vai trò của bạn là <strong>{role}</strong>.</p>
        </div>
        <button onClick={onLogout} className="mt-4 sm:mt-0 rounded-md bg-red-600 text-white py-2 px-4 hover:bg-red-700">
          Logout
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <button onClick={handleFetchProfiles} className="rounded-md bg-indigo-600 text-white py-3 hover:bg-indigo-700">
          Load Mongo Profiles
        </button>
        <button onClick={handleAdminCheck} className="rounded-md bg-emerald-600 text-white py-3 hover:bg-emerald-700">
          Check Admin Endpoint
        </button>
      </div>

      {error && <div className="mt-6 text-red-600">{error}</div>}
      {adminMessage && <div className="mt-6 text-green-600">{adminMessage}</div>}

      {profiles.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-900">Profiles</h3>
          <ul className="mt-3 space-y-2">
            {profiles.map((profile) => (
              <li key={profile.id} className="rounded-lg border border-gray-200 p-4">
                <p className="font-medium">{profile.username}</p>
                <p className="text-sm text-gray-600">{profile.bio}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
