// dota2/updates.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import s from './Dota.module.css'; 

export const DotaUpdates = () => {
  const updates = useSelector((state) => state.updates.topics || []); // Получаем темы обновлений из Redux

  return (
    <div className={s.buildsContainer}> {/* Используем CSS-класс из Dota.module.css */}
      <header className={s.header}> {/* Используем CSS-класс из Dota.module.css */}
        <h1>Gamer's Hub</h1>
        <nav>
          <Link to="/">Главная страница</Link>
          <Link to="/create-topic" state={{ from: '/dota2/updates' }}>Создать тему</Link>
        </nav>
      </header>

      <main className={s.content}> {/* Используем CSS-класс из Dota.module.css */}
        {updates.length > 0 ? (
          updates.map((update, index) => (
            <div className={s.topic} key={index}> {/* Используем CSS-класс из Dota.module.css */}
              <Link to={`/details/updates/${index}`}> {/* Исправленная ссылка */}
                <h1>{update.nickname}</h1>
                <h2>{update.topic}</h2>
                <h2>Dota 2 Updates</h2>
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