import { useState } from 'react';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import { getToken, getUsername, getRole, saveAuth, clearAuth } from './utils/auth';
import './App.css';

function App() {
  const [token, setToken] = useState(getToken());
  const [view, setView] = useState(token ? 'dashboard' : 'login');
  const [username, setUsername] = useState(getUsername() || '');
  const [role, setRole] = useState(getRole() || 'user');

  const handleLogin = ({ token: newToken, username: user, role: userRole }) => {
    saveAuth(newToken, user, userRole);
    setToken(newToken);
    setUsername(user);
    setRole(userRole);
    setView('dashboard');
  };

  const handleLogout = () => {
    clearAuth();
    setToken(null);
    setUsername('');
    setRole('user');
    setView('login');
  };

  const handleSwitchToRegister = () => setView('register');
  const handleSwitchToLogin = () => setView('login');

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold">Quarkus + React MVC App</h1>
          <p className="mt-2 text-gray-600">Backend Quarkus, MySQL + MongoDB, JWT và RBAC.</p>
        </div>

        {view === 'login' && <LoginPage onLogin={handleLogin} onSwitch={handleSwitchToRegister} />}
        {view === 'register' && <RegisterPage onSwitch={handleSwitchToLogin} />}
        {view === 'dashboard' && token && (
          <DashboardPage user={username} role={role} token={token} onLogout={handleLogout} />
        )}
      </div>
    </div>
  );
}

export default App;