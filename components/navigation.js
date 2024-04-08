import {
  HomeIcon,
  TemplateIcon,
  ClipboardListIcon,
} from "@heroicons/react/outline";

const SecondaryNavbar = ({ onItemSelected }) => {
  return (
    <div className="bg-white shadow flex items-center mt-3 justify-center px-4 py-2 space-x-6 h-14">
      {/* Use button elements instead of Link for handling click events */}
      <button
        onClick={() => onItemSelected("home")}
        className="flex items-center space-x-2 text-sm font-medium text-gray-700 hover:bg-blue-400 p-2 rounded cursor-pointer"
      >
        <HomeIcon className="h-5 w-5" />
        <span>Home</span>
      </button>
      <button
        onClick={() => onItemSelected("corporate")}
        className="flex items-center space-x-2 text-sm font-medium text-gray-700 hover:bg-blue-400 p-2 rounded cursor-pointer"
      >
        <TemplateIcon className="h-5 w-5" />
        <span>Corporate</span>
      </button>
      <button
        onClick={() => onItemSelected("projects")}
        className="flex items-center space-x-2 text-sm font-medium text-gray-700 hover:bg-blue-400 p-2 rounded cursor-pointer"
      >
        <ClipboardListIcon className="h-5 w-5" />
        <span>Projects</span>
      </button>
      
      <button
        onClick={() => onItemSelected("milestones")}
        className="flex items-center space-x-2 text-sm font-medium text-gray-700 hover:bg-blue-400 p-2 rounded cursor-pointer"
      >
        <TemplateIcon className="h-5 w-5" />
        <span>Monitoring and EvaIuation</span>
      </button>
      <button
        onClick={() => onItemSelected("analytics")}
        className="flex items-center space-x-2 text-sm font-medium text-gray-700 hover:bg-blue-400 p-2 rounded cursor-pointer"
      >
        <TemplateIcon className="h-5 w-5" />
        <span>AnaIytics </span>
      </button>
      <button
        onClick={() => onItemSelected("corporate")}
        className="flex items-center space-x-2 text-sm font-medium text-gray-700 hover:bg-blue-400 p-2 rounded cursor-pointer"
      >
        <TemplateIcon className="h-5 w-5" />
        <span>Geomaps</span>
      </button>
      <button
        onClick={() => onItemSelected("reports")}
        className="flex items-center space-x-2 text-sm font-medium text-gray-700 hover:bg-blue-400 p-2 rounded cursor-pointer"
      >
        <TemplateIcon className="h-5 w-5" />
        <span>Reports</span>
      </button>
      <button
        onClick={() => onItemSelected("resource")}
        className="flex items-center space-x-2 text-sm font-medium text-gray-700 hover:bg-blue-400 p-2 rounded cursor-pointer"
      >
        <TemplateIcon className="h-5 w-5" />
        <span>Resource Center</span>
      </button>
    </div>
  );
};

export default SecondaryNavbar;
