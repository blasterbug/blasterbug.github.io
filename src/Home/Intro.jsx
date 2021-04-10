import React from 'react';

function Intro() {
  return (
    <div className="bg-gray-50 pt-16 lg:py-24">
      <div className="pb-16 bg-light-blue lg:pb-0 lg:z-10 lg:relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="relative lg:-my-8">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-1/2 bg-gray-50 lg:hidden"
            />
            <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
              <div className="aspect-w-10 aspect-h-6 rounded-xl shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                <img
                  className="object-cover lg:h-full lg:w-full"
                  src="https://avatars0.githubusercontent.com/u/891025"
                  alt="Benjamin Sientzoff"
                />
              </div>
            </div>
          </div>
          <div className="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
              <blockquote>
                <div className="prose prose-blue prose-sm sm:prose lg:prose-lg xl:prose-xl text-gray-500 mx-auto">
                  <p className="mt-6 font-medium text-deep-gray">
                    I am an entrepreneur and code guru based in Umeå, Sweden. I
                    co-founded Nesta Nordics AB. At Nesta, I designed,
                    architected and lead the development of the whole stack. I
                    also use to work as a volunteer, I am a local coordinator
                    for Sea Shepherd in Umeå. I currently work as a lead
                    full-stack developer at Papperslöst AB where I am currently
                    refactoring and extending their product: Klientlistan.
                  </p>
                </div>
                {/* <footer className="mt-6">
                  <span className="font-medium text-deep-gray">
                    Benjamin Sientzoff
                  </span>
                </footer> */}
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
