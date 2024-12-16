// dota2/meta.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import s from './Dota.module.css'; 

export const DotaMeta = () => {
  const topics = useSelector((state) => state.meta.topics || []);

  return (
    <div className={s.buildsContainer}>
      <header className={s.header}>
        <h1>Gamer's Hub</h1>
        <nav>
          <Link to="/">Главная страница</Link>
          <Link to="/create-topic" state={{ from: '/dota2/meta' }}>Создать тему</Link>
        </nav>
      </header>

      <main className={s.content}>
        {topics.length > 0 ? (
          topics.map((topic, index) => (
            <div className={s.topic} key={index}>
              <Link to={`/details/meta/${index}`}>
                <h1>{topic.nickname}</h1>
                <h2>{topic.topic}</h2>
                <h2>Dota 2 beta</h2>
                <h2>мета</h2>
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