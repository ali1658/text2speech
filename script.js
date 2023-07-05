function convertTextToSpeech() {
    const text = document.getElementById("text").value;
  
    if ('speechSynthesis' in window) {
      const synthesis = window.speechSynthesis;
      const utterance = new SpeechSynthesisUtterance(text);
  
      synthesis.speak(utterance);
      utterance.onend = function () {
        console.log('Speech synthesis complete');
      };
  
      const output = document.getElementById("output");
      output.textContent = "Playing audio...";
    } else {
      alert("Text-to-speech is not supported in this browser.");
    }
  }
  