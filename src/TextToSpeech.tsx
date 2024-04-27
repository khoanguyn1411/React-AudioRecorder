import { type FC } from "react";

export const TextToSpeech: FC = () => {
  const speak = () => {
    // Create a SpeechSynthesisUtterance
    const utterance = new SpeechSynthesisUtterance(`
    <speak>Welcome to this tutorial!</speak>
    `);

    // Select a voice
    const voices = speechSynthesis.getVoices();
    utterance.voice = voices[0]; // Choose a specific voice

    // Speak the text
    speechSynthesis.speak(utterance);
  };

  return (
    <div>
      <h1>Text To Speech</h1>
      <button onClick={speak}>Speak</button>
    </div>
  );
};
