import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardList from './components/cardList/CardList';
import Menu from './components/menu/Menu';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import './App.css';

interface Story {
  objectID: string;
  title: string;
  author: string;
  created_at: string;
}

const App: React.FC = () => {
  const [stories, setStories] = useState<Story[]>([]);

  useEffect(() => {
    axios.get('https://hn.algolia.com/api/v1/search?tags=front_page')
      .then(response => setStories(response.data.hits.slice(0, 10)))  // Get 10 entries
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="app-container">
      <Menu />
      <div className="main-content">
        <Header />
        <CardList stories={stories} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
