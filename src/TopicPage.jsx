// TopicPage.jsx
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
import { addCsBugsTopic } from './features/csBugsSlice'; 
import { addAntiCheatTopic } from './features/antiCheatSlice'; 
import { addThrowTopic } from './features/throwsSlice'; 
import { addWorkshopTopic } from './features/workshopSlice'; 
import { addCsUpdateTopic } from './features/csUpdatesSlice'; 
import { addCsKinTopic } from './features/csKinsSlice';
import { addCsTeamFinderTopic } from './features/csTeamFinderSlice'; 
import { addCsTournamentTopic } from './features/csTournamentsSlice';
import a from './topicpage.module.css';
import imgl from './assets/logo.png';

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
      dispatch(addBuildTopic(newTopic));
    } else if (fromPage === '/dota2/customs') {
      dispatch(addCustomTopic(newTopic));
    } else if (fromPage === '/dota2/bugs') {
      dispatch(addBugsTopic(newTopic));
    } else if (fromPage === '/dota2 /skins') {
      dispatch(addSkinsTopic(newTopic));
    } else if (fromPage === '/dota2/tournaments') {
      dispatch(addTournamentTopic(newTopic));
    } else if (fromPage === '/dota2/meta') {
      dispatch(addMetaTopic(newTopic));
    } else if (fromPage === '/dota2/team-finder') {
      dispatch(addTeamFinderTopic(newTopic));
    } else if (fromPage === '/dota2/updates') {
      dispatch(addUpdatesTopic(newTopic));
    } else if (fromPage === '/cs2/csbugs') {
      dispatch(addCsBugsTopic(newTopic));
    } else if (fromPage === '/cs2/antiCheat') {
      dispatch(addAntiCheatTopic(newTopic));
    } else if (fromPage === '/cs2/throws') {
      dispatch(addThrowTopic(newTopic));
    } else if (fromPage === '/cs2/workshop') {
      dispatch(addWorkshopTopic(newTopic));
    } else if (fromPage === '/cs2/csupdates') {
      dispatch(addCsUpdateTopic(newTopic));
    } else if (fromPage === '/cs2/cskins') {
      dispatch(addCsKinTopic(newTopic));
    } else if (fromPage === '/cs2/csteam-finder') {
      dispatch(addCsTeamFinderTopic(newTopic));
    } else if (fromPage === '/cs2/cstournaments') {
      dispatch(addCsTournamentTopic(newTopic)); 
    }

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