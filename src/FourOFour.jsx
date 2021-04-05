import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Page from './layouts/Page';

const gifs = [
  'https://media.giphy.com/media/w8lxDnt4Osi0Iartvi/source.gif',
  'https://media.giphy.com/media/JymvTGX0OHQ7CmwjcF/source.gif',
  'https://media.giphy.com/media/VISOlbIUr7CQvRg8P8/source.gif',
  'https://media.giphy.com/media/SZQBPO4NqHkh6wmdXk/source.gif',
  'https://media.giphy.com/media/BznPLQGYohfvZsPvQn/source.gif',
  'https://media.giphy.com/media/1ldPQDYHJBoZi/source.gif',
];

function FourOFour() {
  const [gif, setGif] = useState(null);

  function randomGif() {
    const randIdx = Math.floor(Math.random() * gifs.length);
    return gifs[randIdx];
  }

  useEffect(() => {
    setGif(() => randomGif());
  }, []);

  return (
    <Page>
      <main className="relative py-16 bg-deep-gray">
        <div
          className="hidden absolute top-0 inset-x-0 h-1/2 bg-gray-50 lg:block"
          aria-hidden="true"
        />
        <div
          className="hidden absolute bottom-0 inset-x-0 h-1/2 bg-gray-50 lg:block"
          aria-hidden="true"
        />
        <div className="max-w-7xl mx-auto bg-deep-gray lg:bg-transparent lg:px-8">
          <div className="lg:grid lg:grid-cols-12">
            <div className="relative z-10 lg:col-start-1 lg:row-start-1 lg:col-span-4 lg:py-16 lg:bg-transparent">
              <div
                className="absolute inset-x-0 h-1/2 bg-deep-gray lg:hidden"
                aria-hidden="true"
              />
              <div className="max-w-md mx-auto px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0">
                <div className="aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1">
                  <img
                    className="object-cover bg-white object-center rounded-3xl shadow-2xl"
                    src={gif}
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="relative bg-deep-gray lg:col-start-3 lg:row-start-1 lg:col-span-10 lg:rounded-3xl lg:grid lg:grid-cols-10 lg:items-center">
              <div className="relative max-w-md mx-auto py-12 px-4 space-y-6 sm:max-w-3xl sm:py-16 sm:px-6 lg:max-w-none lg:p-0 lg:col-start-4 lg:col-span-6">
                <h1 className="text-3xl font-extrabold font-mono text-light-blue tracking-wide">
                  Lost?
                </h1>
                <p className="text-lg text-white">
                  This is the famous 404 error page.
                  <br />
                  Something, something
                </p>
                <NavLink
                  className="block w-full py-3 px-5 text-center bg-white border border-transparent rounded-md shadow-md text-base font-medium text-digital-blue hover:bg-light-blue hover:shadow-none sm:inline-block sm:w-auto"
                  to="/"
                >
                  Take me home
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Page>
  );
}

export default FourOFour;
