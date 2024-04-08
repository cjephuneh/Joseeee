"use client"
import React, { useState } from 'react';
import Navbar from "@/components/navbar";
import Navigation from "@/components/navigation";
// import HomeView from "@/components/HomeView"; // Import your 'HomeView' component
import CorporateView from "@/components/CorporateView"; // Import your 'CorporateView' component
import ProjectsView from "@/components/ProjectsView"; // Import your 'ProjectsView' component
import MilestonesView from "@/components/MilestonesView"; // Import your 'MilestoneView' component
import AnalyticsView from "@/components/AnalyticsView"; // Import your 'MilestoneView' component\
import ReportView from "@/components/ReportView"; // Import your 'MilestoneView' component
import ResourceView from "@/components/ResourceView"; // Import your 'MilestoneView' component

function Page() {
  const [selectedView, setSelectedView] = useState('home'); // Initial selected view

  // This function will be passed to the SecondaryNavbar
  const onItemSelected = (viewName) => {
    setSelectedView(viewName);
  };

  return (
    <div className=' h-screen'>
    <><Navbar /><div className="bg-gray-200 h-full">2
      <Navigation onItemSelected={onItemSelected} />
      {/* {selectedView === 'home' && <HomeView />} */}
      {selectedView === 'corporate' && <CorporateView />}
      {selectedView === 'analytics' && <AnalyticsView />}
      {selectedView === 'projects' && <ProjectsView />}
      {selectedView === 'milestones' && <MilestonesView />}
      {selectedView === 'reports' && <ReportView />}
      {selectedView === 'resource' && <ResourceView />}
      {/* ...other views based on selectedView... */}
    </div></>
    </div>
  );
}

export default Page;
