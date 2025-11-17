import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/pages/HomePage';
import SubjectsPage from './components/pages/SubjectsPage';
import SectionsPage from './components/pages/SectionsPage';
import LessonsListPage from './components/pages/LessonsListPage';
import LessonPage from './components/pages/LessonPage';
import QuestionPage from './components/pages/QuestionPage';
import PricingPage from './components/pages/PricingPage';
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';
import ProfilePage from './components/pages/ProfilePage';
import ForgotPasswordPage from './components/pages/ForgotPasswordPage';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    // Check for existing user session
    const storedUser = localStorage.getItem('studysouq_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    return () => clearTimeout(timer);
  }, []);

  const handleLogin = (userData: any) => {
    setUser(userData);
    localStorage.setItem('studysouq_user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('studysouq_user');
  };

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-[#0A0E14] text-white flex flex-col">
        <Navbar user={user} onLogout={handleLogout} />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/subjects" element={<SubjectsPage />} />
            <Route path="/subjects/:subjectId" element={<SectionsPage />} />
            <Route path="/subjects/:subjectId/:sectionId" element={<LessonsListPage />} />
            <Route path="/lesson/:lessonId" element={<LessonPage user={user} />} />
            <Route path="/lesson/:lessonId/questions" element={<QuestionPage user={user} />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
            <Route path="/signup" element={<SignupPage onLogin={handleLogin} />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/profile" element={user ? <ProfilePage user={user} onLogout={handleLogout} /> : <Navigate to="/login" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
