import React from 'react';

import { randomName } from './randomNames';

interface Props {
  onBackClick: () => void;
}

const InfoPage = ({ onBackClick }: Props) => {

  const handleGenerateName = () => {
    const randomNames = randomName();
    alert(`${randomNames}`);
  };

  return (
    <div className="min-h-screen bg-white p-8 text-center">
      <div className="max-w-3xl mx-auto">
        {/* Header Section */}
        <h1 className="text-xl mb-4 font-bold montserrat">
          Welcome to the Crochet Gallery
        </h1>

        <h2 className="text-2xl mb-4 text-blue-800 font-bold im-fell-english-regular-italic">
          The Info Room
        </h2>

        <button
          onClick={onBackClick}
          className="text-red-600 text-sm hover:underline mb-12 block mx-auto alef-regular"
        >
          &lt;---- Back to The First Room!
        </button>

        <div className="text-left alef-regular text-blue-800">
          <h3 className="text-lg mb-6 alef-bold text-blue-900">Greetings!</h3>
          <p className="mb-8 text-sm">
            Hey visitor! You've moseyed on into the gallery info lounge, grab a yarn and have a read.
          </p>

          {/* Main Image */}
          <div className="mb-8">
            <img
              src="/assets/catwyarn.gif"
              alt="Gallery Lounge"
              className="mx-auto h-auto"
            />
          </div>

          {/* Description Text */}
          <p className="mb-6 text-sm">
            The crochet pieces in this gallery are a collection of twists and turns of yarn that have been hand-made by the creator of this website. Each piece is unique and has a story behind it. The gallery is filled with a diverse range of pieces, from basic crochet to modern designs.
          </p>
          <p className="mb-6 text-sm">
            Be sure to take your time as you explore them, hopefully you enjoy your day out at the Crochet Gallery!
          </p>

          {/* Signature */}
          <p className="hover:underline cursor-pointer text-sm">-M.G</p>
        </div>

        <br />
        <br />

        <div className="text-left alef-regular text-blue-800">
          <h3 className="text-lg mb-6 alef-bold text-blue-900">Virtual Tour!</h3>
          <p className="mb-8 text-sm">
            A motion video created by the creator of this website featuring all the crochet pieces in the gallery.
          </p>

          <div className="flex flex-col items-center">
            {/* Embedded Video */}
            <iframe
              className="w-full max-w-2xl aspect-video rounded-lg shadow-lg"
              src="https://youtu.be/dQw4w9WgXcQ?si=NDzXt-wlUz6nRlY5"
              allowFullScreen
            ></iframe>
          </div>

          <br />
          <br />
          <h3 className="text-lg mb-6 alef-bold text-blue-900">Random Name Generator!</h3>
          <p className="mb-8 text-sm">
            The names of the rooms in this gallery are generated randomly. You can find the code for this feature{' '}
            <a
              href="https://github.com/manyaagureja/CrochetGallery/blob/main/src/randomnames.ts"
              target="_blank"
              rel="noopener noreferrer"
              title="Random Name Generator"
              className="underline"
            >
              here
            </a>
          </p>

          <div className="mb-8 text-sm ">
            
            {/* Clickable Cat Image for Name Generation */}
            <img
              src="/catgif.gif"
              alt="Random Name Generator"
              className="w-20 h-20 cursor-pointer mx-auto"
              onClick={handleGenerateName}
            />

            <p className="text-xs text-red-600 flex justify-center">Click me to generate a random name!</p>
            
          </div>

          <h3 className="text-lg mb-6 alef-bold text-blue-900">Sounds!</h3>
          <p className="mb-8 text-sm">
            This site features the song{' '}
            <a
              href="https://youtu.be/Y5wQjSLBZig?si=CEGumTxgVjwVPjLv"
              target="_blank"
              rel="noopener noreferrer"
              title="Meanwhile by Scott Buckley"
              className="underline text-blue-900"
            >
              Meanwhile by Scott Buckley
            </a>
          </p>

         
          <h3 className="text-lg mb-6 alef-bold text-blue-900">Copyright!</h3>
          <p className="mb-8 text-sm">Each piece displayed on this website is made by creator of the website. If you want to use any of the pieces, or have a query, please contact    <a
              href="mailto:manyaagureja13@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-900"
            >
              here
            </a></p>
          <footer className="flex justify-center mt-20">
            <p className="text-xs text-black">Thankyou for visiting! All rights reserved © 2025 </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default InfoPage;