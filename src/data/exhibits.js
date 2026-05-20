export const exhibits = {
  "fire-time": {
    id: "fire-time",
    number: 1,
    title: "Fire Time",
    subtitle: "Fire as Clock",
    roomImage: "/assets/images/fire-time-room.jpg",
    ambientAudio: "/assets/audio/fire-room-ambient.mp3",
    intro: "The first clocks were lit.",
    mainPlaque: "Fire has always been one of humanity’s earliest ways to understand duration.",
    artifacts: [
      {
        id: "candle-clock",
        title: "Candle Clock",
        position: { x: -2.2, y: 0.6, z: -4.8 },
        description: "Marked candles measured duration as the candle burned downward.",
        historical: "Used across ancient China and medieval Europe."
      }
      // Add the other 4 artifacts here
    ],
    doors: [
      {
        id: "water-time-door",
        label: "Next Exhibit: Water Time",
        position: { x: 4.2, y: 0.2, z: -3.5 }
      }
    ]
  }
};