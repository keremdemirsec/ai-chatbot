import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatBoxRef = useRef(null);

  useEffect(() => {
    chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
  }, [messages]);

  const handleSend = async () => {
    if (input.trim() === '') return;

    const userMessage = { sender: 'user', text: input };
    setMessages([...messages, userMessage]);
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:8080/gemini', {
        prompt: input
      });

      const botMessage = { sender: 'bot', text: response.data.text };
      setMessages([...messages, userMessage, botMessage]);
    } catch (error) {
      console.error('API request failed:', error);
    } finally {
      setLoading(false);
      setInput('');
    }
  };

  return (
    <div className="container">
      <header className="header">AI Chatbot</header>
      <div className="chat-box" ref={chatBoxRef}>
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            <ReactMarkdown>{msg.text}</ReactMarkdown>
          </div>
        ))}
        {loading && (
          <div className="message loading">
            <div className="spinner"></div>
            <div className="loading-text">Yanıt alınıyor...</div>
          </div>
        )}
      </div>
      <div className="input-area">
        <input type="text" value={input} onChange={e => setInput(e.target.value)}
          onKeyPress={e => {
            if (e.key === 'Enter') handleSend();
          }} />
        <button onClick={handleSend}>Send</button>
      </div>
      <footer className="footer">Coded By Furkan Kerem Özdemir.</footer>
    </div>
  );
}

export default App;
