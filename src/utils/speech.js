export function speak(text) {
  return new Promise((resolve) => {
    // Stop any previous speech before starting a new one
    speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);

    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.lang = "en-US";

    utterance.onend = () => resolve();

    speechSynthesis.speak(utterance);
  });
}

export function listen() {
  return new Promise((resolve, reject) => {
    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      reject("Speech Recognition not supported");
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.continuous = false;
    recognition.maxAlternatives = 3;

    // Wait a little before assuming the user is done
    recognition.pauseThreshold = 1500;

    let finished = false;

    // Stop listening after 7 seconds if no response
    const timer = setTimeout(() => {
      if (!finished) {
        finished = true;
        recognition.stop();
        reject("timeout");
      }
    }, 7000);

    recognition.onresult = (event) => {
      if (finished) return;

      finished = true;
      clearTimeout(timer);

      const transcript = event.results[0][0].transcript.trim();

      resolve(transcript);
    };

    recognition.onerror = (event) => {
      if (finished) return;

      finished = true;
      clearTimeout(timer);

      reject(event.error);
    };

    recognition.onend = () => {
      if (!finished) {
        finished = true;
        clearTimeout(timer);

        reject("no-speech");
      }
    };

    recognition.start();
  });
}
