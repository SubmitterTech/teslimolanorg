import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import Profile from './pages/Profile';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import AddTextPage from './pages/AddTextPage';
import ArticlesPage from './pages/ArticlesPage';
import SocialMedia from './pages/SocialMedia';
import VideosPage from './pages/VideosPage';
import PerspectivesPage from './pages/PerspectivesPage';
import PostEdit from './components/PostEdit';

const AdminPanel = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-1 flex flex-col">
        <Header toggleSidebar={toggleSidebar} />
        <main className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/makale" element={<AddTextPage/>} />
            <Route path='/makaleler' element={<ArticlesPage/>}/>
            <Route path='/perspektifler' element={<PerspectivesPage/>}/>
            <Route path='/videolar' element={<VideosPage/>}/>
            <Route path='/ayarlar/sosyalmedya' element={<SocialMedia/>}/>
            <Route path='/yazilar/:id' element={<PostEdit/>}/>
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default AdminPanel;
