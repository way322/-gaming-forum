// TopicDetail.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const TopicDetail = () => {
  const { type, id } = useParams(); // Получаем type и id из параметров маршрута

// Получаем темы в зависимости от типа
const topics = useSelector((state) => {
  if (type === 'builds') {
    return state.builds.topics || [];
  } else if (type === 'customs') {
    return state.customs.topics || [];
  } else if (type === 'bugs') {
    return state.bugs.topics || [];
  } else if (type === 'skins') {
    return state.skins.topics || []; 
  } else if (type === 'tournaments') {
    return state.tournaments.topics || []; 
  } else if (type === 'meta') {
    return state.meta.topics || []; 
  } else if (type === 'team-finder') { // Добавлено для team-finder
    return state.teamFinders.topics || []; // Получаем темы поиска тимейтов
  }else if (type === 'updates') { // Добавлено для updates
    return state.updates.topics || []; // Получаем темы обновлений
  }
  return [];
});

// Находим тему по id
const topic = topics.find((_, index) => index === parseInt(id));

// Если тема не найдена, отображаем сообщение
if (!topic) {
  return <p>Тема не найдена.</p>;
}

return (
  <div >
    <header className="header">
      <h1>Gamer's Hub</h1>
      <nav>
        <Link to="/">Главная страница</Link>
        <Link to={
          type === 'builds' ? "/dota2/builds" :
          type === 'customs' ? "/dota2/customs" :
          type === 'bugs' ? "/dota2/bugs" :
          type === 'skins' ? "/dota2/skins" :
          type === 'tournaments' ? "/dota2/tournaments" : 
          type === 'meta' ? "/dota2/meta" : 
          type === 'team-finder' ? "/dota2/team-finder" :
          type === 'updates' ? "/dota2/updates" : // Добавлено для team-finder
          "/dota2" // На всякий случай, если тип не распознан
        }>
          Назад к темам
        </Link>
      </nav>
    </header>

    <main className="content">
      <h2>{topic.nickname}</h2>
      <h3>{topic.topic}</h3>
      <p>{topic.description}</p>
      <Link to={`/edit/${type}/${id}`}>
        <button>Редактировать</button>
      </Link>
    </main>
  </div>
);
};
