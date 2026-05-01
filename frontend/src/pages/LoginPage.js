import { useState } from 'react';
import { login } from '../services/api';

export default function LoginPage({ onLogin, onSwitch }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    try {
      const { token, username: user, role } = await login({ username, password });
      onLogin({ token, username: user, role });
    } catch (err) {
      setError(err.response?.data?.error || 'Login failed.');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-6 mt-12">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Đăng nhập</h2>
      {error && <div className="mb-4 text-red-600">{error}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Username</label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="username"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="password"
          />
        </div>
        <button type="submit" className="w-full rounded-md bg-indigo-600 text-white py-2 hover:bg-indigo-700">
          Login
        </button>
      </form>
      <div className="mt-4 text-sm text-gray-600">
        Chưa có tài khoản?{' '}
        <button onClick={onSwitch} className="text-indigo-600 hover:text-indigo-700">
          Đăng ký ngay
        </button>
      </div>
    </div>
  );
}
