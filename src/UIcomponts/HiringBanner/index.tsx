import React from 'react';
import CoinBase from '../../images/coinbase.webp'
import Spotify from '../../images/spotify.webp'
import Microsoft from '../../images/microsoft.webp'
import Spaceex from '../../images/spacex.webp'
import Meta from '../../images/meta.webp'
// Assuming you have these logo images hosted somewhere
const logos = [
  { name: 'Coinbase', src: CoinBase },
  { name: 'Spotify', src: Spotify },
  { name: 'Microsoft', src: Microsoft },
  { name: 'Meta', src: Meta },
  { name: 'SpaceX', src: Spaceex },
];

const HiringBanner: React.FC = () => {
  return (
    <div className=" my-8 bg-purple-800 text-white flex flex-col items-center justify-center p-6 space-y-4">
      <div className="flex justify-center items-center gap-4">
        {logos.map((logo) => (
          <img key={logo.name} src={logo.src} alt={`${logo.name} logo`} className="h-6" />
        ))}
      </div>
      <p className="text-center">Get hired by top companies worldwide.</p>
    </div>
  );
};

export default HiringBanner;
