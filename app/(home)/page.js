"use client"
import React, { useState } from 'react';
import Navbar from "@/components/navbar";
import Navigation from "@/components/navigation";
// import HomeView from "@/components/HomeView"; // Import your 'HomeView' component
import CorporateView from "@/components/CorporateView"; // Import your 'CorporateView' component
// import ProjectsView from "@/components/ProjectsView"; // Import your 'ProjectsView' component

function Page() {
  const [selectedView, setSelectedView] = useState('home'); // Initial selected view

  // This function will be passed to the SecondaryNavbar
  const onItemSelected = (viewName) => {
    setSelectedView(viewName);
  };

  return (
    <><Navbar /><div className="bg-gray-200 h-full">2
      <Navigation onItemSelected={onItemSelected} />
      {/* {selectedView === 'home' && <HomeView />} */}
      {selectedView === 'corporate' && <CorporateView />}
      {/* {selectedView === 'projects' && <ProjectsView />} */}
      {/* ...other views based on selectedView... */}
    </div></>
  );
}

export default Page;
