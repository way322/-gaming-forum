// dota2/dotatournaments.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import s from './Dota.module.css'; 

export const Dotatournaments = () => {
  const tournaments = useSelector((state) => state.tournaments.topics || []); // Получаем темы турниров из Redux

  return (
    <div className={s.buildsContainer}> {/* Используем CSS-класс из Dota.module.css */}
      <header className={s.header}> {/* Используем CSS-класс из Dota.module.css */}
        <h1>Gamer's Hub</h1>
        <nav>
          <Link to="/">Главная страница</Link>
          <Link to="/create-topic" state={{ from: '/dota2/tournaments' }}>Создать тему</Link>
        </nav>
      </header>

      <main className={s.content}> {/* Используем CSS-класс из Dota.module.css */}
        {tournaments.length > 0 ? (
          tournaments.map((tournament, index) => (
            <div className={s.topic} key={index}> {/* Используем CSS-класс из Dota.module.css */}
              <Link to={`/details/tournaments/${index}`}> {/* Исправленная ссылка */}
                <h1>{tournament.nickname}</h1>
                <h2>{tournament.topic}</h2>
                <h2>Dota 2 Tournaments</h2>
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