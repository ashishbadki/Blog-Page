


import React, { createContext, useState } from 'react';
import { baseUrl } from '../baseUrl';
import Pagination from '../components/Pagination';
import './AppContext.css'
// Step 1: Create the context
export const AppContext = createContext();

// Step 2: Create the provider component
function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(null);

  // Step 3: Define function to fetch blog posts
  async function fetchBlogPosts(page = 1) {
    setLoading(true);
    let url = `${baseUrl}?page=${page}`;
    try {
      let response = await fetch(url);
      let result = await response.json();
      setPage(result.page);
      setPosts(result.posts);
      setTotalPage(result.totalPages);
    } catch (error) {
      console.error("Error fetching blog posts:", error);
      setPage(1);
      setPosts([]);
      setTotalPage(null)
    }
    setLoading(false);
  }

  function handlePageChange(page){
    setPage(page);
    fetchBlogPosts(page)
  }

  // Step 4: Provide the state and functions to all children
  const value = {
    loading,
    setLoading,
    posts,
    setPosts,
    page,
    setPage,
    totalPage,
    setTotalPage,
    fetchBlogPosts,
    handlePageChange,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
