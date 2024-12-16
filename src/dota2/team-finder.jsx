// dota2/team-finder.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import s from './Dota.module.css'; 

export const DotaTeamFinder = () => {
  const teamFinders = useSelector((state) => state.teamFinders.topics || []); // Получаем темы поиска тимейтов из Redux

  return (
    <div className={s.buildsContainer}> {/* Используем CSS-класс из Dota.module.css */}
      <header className={s.header}> {/* Используем CSS-класс из Dota.module.css */}
        <h1>Gamer's Hub</h1>
        <nav>
          <Link to="/">Главная страница</Link>
          <Link to="/create-topic" state={{ from: '/dota2/team-finder' }}>Создать тему</Link>
        </nav>
      </header>

      <main className={s.content}> {/* Используем CSS-класс из Dota.module.css */}
        {teamFinders.length > 0 ? (
          teamFinders.map((teamFinder, index) => (
            <div className={s.topic} key={index}> {/* Используем CSS-класс из Dota.module.css */}
              <Link to={`/details/team-finder/${index}`}> {/* Исправленная ссылка */}
                <h1>{teamFinder.nickname}</h1>
                <h2>{teamFinder.topic}</h2>
                <h2>Dota 2 Team Finder</h2>
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