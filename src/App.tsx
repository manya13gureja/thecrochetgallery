import React, { useState, useEffect, useRef } from "react";
import { DoorOpenIcon, Volume2, VolumeX } from "lucide-react";
import InfoPage from "./InfoPage";
import { generateUniqueRoomNames } from "./randomNames";

interface Room {
  title: string;
  images: string[];
}

interface Rooms {
  [key: number]: Room;
}

const AudioPlayer = ({ isMuted }: { isMuted: boolean }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/homesound.mp3");
      audioRef.current.loop = true;
      audioRef.current.volume = 0.5;
    }

    audioRef.current.muted = isMuted;

    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.play().catch((err) => {
          console.log("Autoplay prevented. Waiting for user interaction:", err);
        });
      }
    };

    document.addEventListener("click", playAudio, { once: true });

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      document.removeEventListener("click", playAudio);
    };
  }, [isMuted]);

  return null; 
};

const GalleryWebsite = () => {
  const [currentRoom, setCurrentRoom] = useState(1);
  const [doorsVisited, setDoorsVisited] = useState(0);
  const [doorPosition, setDoorPosition] = useState(0);
  const [showInfo, setShowInfo] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const doorClickAudio = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    doorClickAudio.current = new Audio("/door-close.mp3");
    doorClickAudio.current.volume = 0.7;
  }, []);

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  const generateRooms = (): Rooms => {
    const names = generateUniqueRoomNames(3);
    return {
      1: {
        title: "The First Room",
        images: [
          "/assets/img1.jpeg",
          "/assets/img2.jpeg",
          "/assets/img3.jpg",
          "/assets/img4.webp",
          "/api/placeholder/220/200",
          "/api/placeholder/160/160",
          "/api/placeholder/190/190",
        ],
      },
      2: {
        title: names[0],
        images: [
          "/api/placeholder/200/200",
          "/api/placeholder/350/350",
          "/api/placeholder/180/180",
          "/api/placeholder/220/220",
          "/api/placeholder/160/160",
        ],
      },
      3: {
        title: names[1],
        images: [
          "/api/placeholder/200/200",
          "/api/placeholder/350/350",
          "/api/placeholder/180/180",
          "/api/placeholder/220/220",
          "/api/placeholder/160/160",
        ],
      },
    };
  };

  const [rooms, setRooms] = useState<Rooms>(generateRooms());

  useEffect(() => {
    if (doorsVisited > 0 && doorsVisited % 3 === 0) {
      setRooms(generateRooms());
    }
  }, [doorsVisited]);

  useEffect(() => {
    const maxPosition = rooms[currentRoom]?.images.length || 0;
    setDoorPosition(Math.floor(Math.random() * maxPosition));
  }, [currentRoom, rooms]);

  const getRandomPosition = () => ({
    marginTop: `${Math.random() * 20}px`,
    marginLeft: `${Math.random() * 20}px`,
    marginRight: `${Math.random() * 20}px`,
    marginBottom: `${Math.random() * 20}px`,
  });

  const getRandomSize = () => ({
    width: `${200 + Math.random() * 400}px`,
    height: `${150 + Math.random() * 600}px`,
  });

  const handleNextRoom = () => {
    if (doorClickAudio.current) {
      doorClickAudio.current.pause();
      doorClickAudio.current.currentTime = 0;
      doorClickAudio.current.play();
    }

    setCurrentRoom((prev) => (prev % 3) + 1);
    setDoorsVisited((prev) => prev + 1);
  };

  const currentRoomData = rooms[currentRoom];

  if (!currentRoomData) {
    return <div className="p-8 text-center">Loading gallery...</div>;
  }

  const galleryItems = [...currentRoomData.images];
  galleryItems.splice(doorPosition, 0, "door");

  const Door = () => (
    <button
      onClick={handleNextRoom}
      className="relative w-16 h-20 group hover:scale-105 transition-transform"
      style={getRandomPosition()}
    >
      <div className="w-full h-full">
        <img
          src="/assets/door-image.jpeg"
          alt="door"
          className="w-full h-full object-cover"
        />
      </div>
    </button>
  );

  const handleInfoClick = () => {
    setShowInfo(true);
  };

  const handleBackToGallery = () => {
    setShowInfo(false);
  };

  if (showInfo) {
    return <InfoPage onBackClick={handleBackToGallery} />;
  }

  return (
    <div className="min-h-screen bg-white p-8">
      {/* Audio Player (hidden) */}
      <AudioPlayer isMuted={isMuted} />

      {/* Header with Mute Control */}
      <header className="text-center mb-8">
        <div className="flex items-center justify-center gap-4 mb-4">
          <h1 className="text-xl font-semibold text-black font-serif montserrat">
            Welcome to the Crochet Gallery
          </h1>
          <button
            onClick={toggleMute}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            {isMuted ? (
              <VolumeX className="w-6 h-6 text-gray-600" />
            ) : (
              <Volume2 className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>
        <h2 className="text-2xl text-blue-800 font-bold im-fell-english-regular-italic">
          {currentRoomData.title}
        </h2>
      </header>

      {/* Navigation Info */}
      <div className="flex justify-center gap-4 mb-20 text-sm text-blue-600 alef-regular">
        <span>
          20 crochet pieces in the gallery, {currentRoomData.images.length} in
          this room
        </span>
        <span>
          Find the door to go to the next room
          <DoorOpenIcon className="inline-block w-4 h-4" />
        </span>
        <span>You have passed {doorsVisited} doors</span>
        <button onClick={handleInfoClick} className="text-red-600 hover:underline">
          Info ^.^
        </button>
      </div>

      {/* Gallery */}
      <div className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto">
        {galleryItems.map((item, index) => (
          <div key={index} className="relative">
            {item === "door" ? (
              <Door />
            ) : (
              <div className="border-8 border-yellow-900 rounded-lg p-1 bg-white shadow-2xl transform hover:rotate-1.5 hover:scale-105 transition-all duration-300">
                <img
                  src={item}
                  alt={`Gallery item ${index + 1}`}
                  className="object-cover rounded-md"
                  style={{ ...getRandomSize() }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
       <footer className="flex justify-center mt-20">
            <p className="text-xs text-black">Thankyou for visiting! All rights reserved © 2025 </p>
          </footer>
    </div>
  );
};

export default GalleryWebsite;