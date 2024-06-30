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
import { Helmet } from 'react-helmet-async';
import AddHutbePage from './pages/AddHutbePage';
import HutbeList from './components/HutbeList';
import HutbeEditPage from './pages/HutbeEditPage';

const AdminPanel = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      <Helmet>
        <title>Yönetici Paneli</title>
      </Helmet>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-1 flex flex-col">
        <Header toggleSidebar={toggleSidebar} />
        <main className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/makale" element={<AddTextPage/>} />
            <Route path='/hutbeler' element={<HutbeList/>}/>
            <Route path="/hutbe/ekle" element={<AddHutbePage/>} />
            <Route path="/hutbe/getir/:slug" element={<HutbeEditPage/>} />
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
