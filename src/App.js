import React, { createContext, Suspense, useLayoutEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PageLoading from './components/molecules/pageLoading/pageLoading';
import ScrollToTop from './components/molecules/scrollToTop/scrollToTop';
import Sidebar from './components/organisms/sidebar/sidebar';
import AppRoutes from "./routes/routes";

export const panelStateContext = createContext();

const App = () => {
  const location = useLocation();
  const [selectModuleItem, setSelectModuleItem] = useState(null);
  const [open, setOpen] = useState(false);
  const [linkName, setLinkName] = React.useState('');
  const [path, setPath] = React.useState('');
  const [editId, setEditId] = React.useState('');
  const [editLinks, setEditLinks] = useState('');
  const [modalFor, setModalFor] = useState('');
  const [navigationLinks, setNavigationLinks] = useState([
    {
      id: 1,
      name: 'Home',
      path: '/'
    },
    {
      id: 2,
      name: 'About',
      path: '/about'
    },
    {
      id: 3,
      name: 'Contact',
      path: '/contact'
    },
  ]);
  const [quickLinks, setQuickLinks] = useState([
    {
      id: 1,
      name: 'Home',
      path: '/'
    },
    {
      id: 2,
      name: 'About',
      path: '/about'
    },
    {
      id: 3,
      name: 'Contact',
      path: '/contact'
    },
  ]);

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return width;
  }

  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);


  return (
    <panelStateContext.Provider
      value={{
        getWindowDimensions,
        selectModuleItem,
        setSelectModuleItem,
        open,
        setOpen,
        navigationLinks,
        setNavigationLinks,
        linkName,
        setLinkName,
        path,
        setPath,
        editId,
        setEditId,
        quickLinks,
        setQuickLinks,
        modalFor,
        setModalFor,
        editLinks,
        setEditLinks,
      }}>

      <Sidebar />
      <main className='md:ml-64 mt-18'>
        <Suspense fallback={<PageLoading />} >
          <AppRoutes />
          <ScrollToTop />
        </Suspense>
      </main>
    </panelStateContext.Provider>
  );
}

export default App;