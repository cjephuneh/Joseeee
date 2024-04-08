// components/SecondaryNavbar.js
import Link from 'next/link';
import { HomeIcon, TemplateIcon, ClipboardCheckIcon, ChartBarIcon, GlobeIcon, DocumentReportIcon, LibraryIcon } from '@heroicons/react/outline';

const SecondaryNavbar = () => {
  return (
    <div className="bg-white shadow flex items-center justify-between px-4 py-2">
      <div className="flex space-x-4">
        {/* Example link with icon */}
        <Link href="/">
          <a className="flex items-center space-x-2 text-sm font-medium text-gray-700 hover:text-gray-900">
            <HomeIcon className="h-5 w-5" />
            <span>Home</span>
          </a>
        </Link>
        <Link href="/corporate">
          <a className="flex items-center space-x-2 text-sm font-medium text-gray-700 hover:text-gray-900">
            <TemplateIcon className="h-5 w-5" />
            <span>Corporate</span>
          </a>
        </Link>
        <Link href="/projects">
          <a className="flex items-center space-x-2 text-sm font-medium text-gray-700 hover:text-gray-900">
            <TemplateIcon className="h-5 w-5" />
            <span>Projects</span>
          </a>
        </Link>
        <Link href="/reports">
          <a className="flex items-center space-x-2 text-sm font-medium text-gray-700 hover:text-gray-900">
            <TemplateIcon className="h-5 w-5" />
            <span>Reports</span>
          </a>
        </Link>
        <Link href="/geomaps">
          <a className="flex items-center space-x-2 text-sm font-medium text-gray-700 hover:text-gray-900">
            <TemplateIcon className="h-5 w-5" />
            <span>Geomaps</span>
          </a>
        </Link>
        <Link href="/monitoring">
          <a className="flex items-center space-x-2 text-sm font-medium text-gray-700 hover:text-gray-900">
            <TemplateIcon className="h-5 w-5" />
            <span>Monitoring</span>
          </a>
        </Link>
        <Link href="/analytics">
          <a className="flex items-center space-x-2 text-sm font-medium text-gray-700 hover:text-gray-900">
            <TemplateIcon className="h-5 w-5" />
            <span>Analytics</span>
          </a>
        </Link>
        </div>
    </div>
  );
};

export default SecondaryNavbar;
