"use client"
import { useEffect } from 'react';

const IndexPage = () => {
  useEffect(() => {
    window.location.href = '/admin';
  }, []);

  // This component doesn't need to render anything
  return null;
};

export default IndexPage;