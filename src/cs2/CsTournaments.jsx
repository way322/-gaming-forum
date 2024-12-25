// cs2/CsTournaments.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import s from './Csgo.module.css'; 
import imgl from '../assets/logo.png';
import imgz from '../assets/izmen.png';
import imgd from '../assets/counter-strike2.png';

export const CsTournaments = () => {
  const topics = useSelector((state) => state.csTournaments.topics || []); 

  return (
    <div className={s.buildsContainer}>
      <header className={s.header}>
        <div className={s.conteinerlogo}>
          <img src={imgl} alt="logo" />
          <h1 className={s.name}>Gamer's Hub</h1>
        </div>
        <Link to="/" className={s.textgs}>Главная страница</Link>
        <div className={s.conteinerlogo}>
          <Link to="/create-topic" state={{ from: '/cs2/cstournaments' }} className={s.textizmen}>Создать тему</Link>
          <img src={imgz} alt="logo" />
        </div>
      </header>

      <main className={s.content}>
        {topics.length > 0 ? (
          topics.map((topic, index) => (
            <div className={s.topic} key={index}>
              <Link to={`/details/cstournaments/${index}`} className={s.a}>
                <div>
                  <h1 className={s.gtext}>{topic.nickname}</h1>
                  <h2 className={s.text}>{topic.topic}</h2>
                </div>
                <div className={s.contenerd}>
                  <h2 className={`${s.text} ${s.text2}`}>
                    <img src={imgd} alt="logo" className={s.cs2} />Counter-Strike 2
                  </h2>
                  <h2 className={s.text}>Турниры</h2>
                </div>
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