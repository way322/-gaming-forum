// dota2/dotabugs.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import s from './Dota.module.css'; 

export const Dotabugs = () => {
  const topics = useSelector((state) => state.bugs.topics || []);

  return (
    <div >
      <header className="header">
        <h1>Gamer's Hub</h1>
        <nav>
          <Link to="/">Главная страница</Link>
          <Link to="/create-topic" state={{ from: '/dota2/bugs' }}>Создать тему</Link>
        </nav>
      </header>

      <main className="content">
        {topics.length > 0 ? (
          topics.map((topic, index) => (
            <div className="topic" key={index}>
              <Link to={`/details/bugs/${index}`}>
                <h1>{topic.nickname}</h1>
                <h2>{topic.topic}</h2>
                <h2>Dota 2 beta</h2>
                <h2>баги</h2>
              </Link>
              
            </div>
          ))
        ) : (
          <p>Нет тем для отображения.</p>
        )}
      </main>
    </div>
  );
};

