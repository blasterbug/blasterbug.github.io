import React from 'react';
import { LocationMarkerIcon, MailIcon } from '@heroicons/react/solid';

function PageHeader() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-12 lg:px-8">
        <div className="text-center">
          <h1 className="mt-1 mb-14 text-4xl font-extrabold font-display text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Benjamin Sientzoff
          </h1>
          <p className="max-w-xl my-8 mx-auto text-xl text-deep-gray">
            Full stack developer - Entrepreneur
          </p>
          <div className="grid grid-cols-2 sm:gap-2 lg:w-max lg:m-auto  lg:gap-8">
            <div
              href="mailto:benjamin.sientzoff@yahoo.fr"
              className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 m-auto"
            >
              <LocationMarkerIcon className="h-5 w-5 text-gray-500" />
              <p className="ml-2">Umeå, Sweden</p>
            </div>
            <a
              href="mailto:benjamin.sientzoff@yahoo.fr"
              className="inline-flex justify-center px-4 py-2 border border-gray-300 group shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:border-digital-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-digital-blue m-auto"
            >
              <MailIcon className="h-5 w-5 text-gray-500 group-hover:text-digital-blue" />
              <span className="ml-2">Get in touch</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageHeader;
