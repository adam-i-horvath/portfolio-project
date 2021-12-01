import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Landing from '../landing/landing.component';
import About from '../../pages/about/about.page';
import Projects from '../../pages/projects/projects.page';
import Contact from '../../pages/contact/contact.page';
import NotFound from '../../pages/notfound/notfound.page';

import '../../common/styles';
import './app.component.css';

import Header from '../header/header.component';
import Footer from '../footer/footer.component';

import Loading from '../loading/loading.component';
import Sidebar from '../sidebar/sidebar.component';
import { slide as Menu } from 'react-burger-menu';
import Scroll from '../scroll/scroll.component';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1200);
  }, []);
  return (
    <>
      {loading === false ? (
        <div className="app animate__animated animate__fadeIn">
          <div id="outer-container">
            <Menu
              pageWrapId={'page-wrap'}
              outerContainerId={'outer-container'}
            />
            <main id="page-wrap">
              <Sidebar />
              <Header />
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
              <Scroll />
              <Footer />
            </main>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default App;
