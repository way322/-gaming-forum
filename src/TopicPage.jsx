import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addBuildTopic } from './features/buildsSlice';
import { addCustomTopic } from './features/customsSlice';
import { addBugsTopic } from './features/bugsSlice';
import { addSkinsTopic } from './features/skinsSlice';
import { addTournamentTopic } from './features/tournamentsSlice';
import { addMetaTopic } from './features/metaSlice';
import { addTeamFinderTopic } from './features/teamFindersSlice';
import { addUpdatesTopic } from './features/updatesSlice';
import a from './topicpage.module.css'
import imgl from './assets/logo.png'

export const TopicPage = () => {
  const [nickname, setNickname] = useState('');
  const [topic, setTopic] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();


  useEffect(() => {
    const savedNickname = localStorage.getItem('nickname');
    const savedTopic = localStorage.getItem('topic');
    const savedDescription = localStorage.getItem('description');

    if (savedNickname) setNickname(savedNickname);
    if (savedTopic) setTopic(savedTopic);
    if (savedDescription) setDescription(savedDescription);
  }, []);


  useEffect(() => {
    localStorage.setItem('nickname', nickname);
    localStorage.setItem('topic', topic);
    localStorage.setItem('description', description);
  }, [nickname, topic, description]);

  const handlePublish = () => {
    const newTopic = {
      nickname,
      topic,
      description,
    };

    const fromPage = location.state?.from || '/dota2/builds';
    console.log('Publishing topic from:', fromPage);

    if (fromPage === '/dota2/builds') {
      console.log('Dispatching ADD_BUILD_TOPIC:', newTopic);
      dispatch(addBuildTopic(newTopic));
    } else if (fromPage === '/dota2/customs') {
      console.log('Dispatching ADD_CUSTOM_TOPIC:', newTopic);
      dispatch(addCustomTopic(newTopic));
    } else if (fromPage === '/dota2/bugs') {
      console.log('Dispatching ADD_BUGS_TOPIC:', newTopic);
      dispatch(addBugsTopic(newTopic));
    } else if (fromPage === '/dota2/skins') {
      console.log('Dispatching ADD_SKINS_TOPIC:', newTopic);
      dispatch(addSkinsTopic(newTopic));
    } else if (fromPage === '/dota2/tournaments') {
      console.log('Dispatching ADD_TOURNAMENT_TOPIC:', newTopic);
      dispatch(addTournamentTopic(newTopic));
    } else if (fromPage === '/dota2/meta') {
      console.log('Dispatching ADD_META_TOPIC:', newTopic);
      dispatch(addMetaTopic(newTopic));
    } else if (fromPage === '/dota2/team-finder') {
      console.log('Dispatching ADD_TEAM_FINDER_TOPIC:', newTopic);
      dispatch(addTeamFinderTopic(newTopic));
    } else if (fromPage === '/dota2/updates') {
      console.log('Dispatching ADD_UPDATES_TOPIC:', newTopic);
      dispatch(addUpdatesTopic(newTopic));
    }

    // Очистка localStorage после публикации
    localStorage.removeItem('nickname');
    localStorage.removeItem('topic');
    localStorage.removeItem('description');

    navigate(fromPage);
  };

  return (
    <div>
      <header className={a.header}>
        <div className={a.conteinerlogo}>
          <img src={imgl} alt="logo" className={a.logo} />
          <h1 className={a.title}>Gamer's Hub</h1>
        </div>
        <nav className={a.nav}>
          <div className={a.navContainer}>
            <Link to="/" className={a.link}>Главная страница</Link>
          </div>
        </nav>
      </header>

      <main className={a.content}>
        <div className={a.content2}>
          <h2 className={a.subtitle}>Создать новую тему</h2>
          <div>
            <label className={a.label}>
              <input
                type="text"
                className={a.input1}
                placeholder="Никнейм"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label className={a.label}>
              <input
                type="text"
                className={a.input2}
                placeholder="Тема"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label className={a.label}>
              <textarea
                className={a.textarea}
                placeholder="Описание"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </label>
          </div>
          <button className={a.button} onClick={handlePublish}>Опубликовать</button>
        </div>
      </main>
    </div>
  );
};