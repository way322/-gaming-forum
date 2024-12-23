// TopicDetail.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import imgl from './assets/logo.png';
import b from './topicdetail.module.css';
import imgz from './assets/lastik.png'



export const TopicDetail = () => {
  const { type, id } = useParams();


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
    } else if (type === 'team-finder') {
      return state.teamFinders.topics || [];
    } else if (type === 'updates') {
      return state.updates.topics || [];
    }
    return [];
  });


  const topic = topics.find((_, index) => index === parseInt(id));

  if (!topic) {
    return <p>Тема не найдена.</p>;
  }

  return (
    <div className={b.container}>
      <header className={b.header}>
        <div className={b.conteinerlogo}>
          <img src={imgl} alt="logo" className={b.logo} />
          <h1 className={b.title}>Gamer's Hub</h1>
        </div>
        <nav className={b.nav}>
          <Link to="/" className={b.navLink}>Главная страница</Link>
          <Link to={
            type === 'builds' ? "/dota2/builds" :
              type === 'customs' ? "/dota2/customs" :
                type === 'bugs' ? "/dota2/bugs" :
                  type === 'skins' ? "/dota2/skins" :
                    type === 'tournaments' ? "/dota2/tournaments" :
                      type === 'meta' ? "/dota2/meta" :
                        type === 'team-finder' ? "/dota2/team-finder" :
                          type === 'updates' ? "/dota2/updates" :
                            "/dota2"
          } className={b.navLink}>
            Назад к темам
          </Link>
        </nav>
        <div className={b.conteinerlogo}>
        <Link to={`/edit/${type}/${id}`} className={b.redact}>
          Редактировать
        </Link>
        <img src={imgz} alt="logo" className={b.logo} />
        </div>
      </header>

      <main className={b.content}>
        <div className={b.content2}>
        <h1 className={b.topicNickname}>{topic.nickname}</h1>
        <h1 className={b.topicTitle}>{topic.topic}</h1>
        <p className={b.topicDescription}>{topic.description}</p>
        </div>
      </main>
    </div>
  );
};