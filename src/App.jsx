// app.jsx
import { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import imgd from './assets/dota2.png';
import { initSnow } from './snow'; 
import imgc from './assets/counter-strike2.png';
import imgl from './assets/logo.png';
import styles from './App.module.css';

export const App = () => {
  const [count, setCount] = useState(0);

  const buildsTopics = useSelector((state) => state.builds.topics);
  const customsTopics = useSelector((state) => state.customs.topics);
  const bugsTopics = useSelector((state) => state.bugs.topics);
  const skinsTopics = useSelector((state) => state.skins.topics);
  const tournamentsTopics = useSelector((state) => state.tournaments.topics);
  const metaTopics = useSelector((state) => state.meta.topics);
  const teamFindersTopics = useSelector((state) => state.teamFinders.topics);
  const updatesTopics = useSelector((state) => state.updates.topics);
  const csBugsTopics = useSelector((state) => state.csBugs.topics);
  const antiCheatTopics = useSelector((state) => state.antiCheat.topics); 
  const throwsTopics = useSelector((state) => state.throws.topics); 
  const workshopTopics = useSelector((state) => state.workshop.topics); 
  const csUpdatesTopics = useSelector((state) => state.csUpdates.topics);
  const csKinsTopics = useSelector((state) => state.csKins.topics);
  const csTeamFinderTopics = useSelector((state) => state.csTeamFinder.topics);
  const csTournamentsTopics = useSelector((state) => state.csTournaments.topics);
  const allTopics = [
    ...buildsTopics.map(topic => ({ ...topic, type: 'Билды', game: 'Dota 2 beta' })),
    ...customsTopics.map(topic => ({ ...topic, type: 'Кастомки', game: 'Dota 2 beta' })),
    ...bugsTopics.map(topic => ({ ...topic, type: 'Баги', game: 'Dota 2 beta' })),
    ...skinsTopics.map(topic => ({ ...topic, type: 'Скины', game: 'Dota 2 beta' })),
    ...tournamentsTopics.map(topic => ({ ...topic, type: 'Турниры', game: 'Dota 2 beta' })),
    ...metaTopics.map(topic => ({ ...topic, type: 'Мета', game: 'Dota 2 beta' })),
    ...teamFindersTopics.map(topic => ({ ...topic, type: 'Поиск тимейтов', game: 'Dota 2 beta' })),
    ...updatesTopics.map(topic => ({ ...topic, type: 'Обновления', game: 'Dota 2 beta' })),
    ...csBugsTopics.map(topic => ({ ...topic, type: 'Баги', game: 'CS 2' })),
    ...antiCheatTopics.map(topic => ({ ...topic, type: 'Античит', game: 'CS 2' })),
    ...throwsTopics.map(topic => ({ ...topic, type: 'Раскид', game: 'CS 2' })),
    ...workshopTopics.map(topic => ({ ...topic, type: 'Мастерская', game: 'CS 2' })),
    ...csUpdatesTopics.map(topic => ({ ...topic, type: 'Обновления', game: 'CS 2' })),
    ...csKinsTopics.map(topic => ({ ...topic, type: 'Скины', game: 'CS 2' })),
    ...csTeamFinderTopics.map(topic => ({ ...topic, type: 'Поиск тимейтов', game: 'CS 2' })),
    ...csTournamentsTopics.map(topic => ({ ...topic, type: 'Турниры', game: 'CS 2' })),
  ];

  useEffect(() => {
    initSnow(); // Вызовите функцию инициализации снежинок
  }, []);

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.divHeader}>
          <img src={imgl} alt="logo" className={styles.logo} />
          <h1 className={styles.name}>Gamer's Hub</h1>
        </div>
      </header>

      <div className={styles.conteiner}>
        <div className={styles.conteiner2}>
          {/* Dota 2 Section */}
          <div className={styles.conteinerGame}>
            <div className={styles.nameGame}>
              <img src={imgd} alt="Dota 2" />
              <h3 className={styles.h3}>Dota 2 beta</h3>
            </div>
            <ul>
              <div className={styles.linkRow}>
                <li><Link to="/dota2/builds" className={styles.a}>Билды</Link></li>
                <li><Link to="/dota2/team-finder" className={styles.a}>Поиск тимейтов</Link></li>
                <li><Link to="/dota2/customs" className={styles.a}>Кастомки</Link></li>
                <li><Link to="/dota2/skins" className={styles.a}>Скины</Link></li>
              </div>
              <div className={styles.linkRow}>
                <li><Link to="/dota2/meta" className={styles.a}>Мета</Link></li>
                <li><Link to="/dota2/tournaments" className={styles.a}>Турниры</Link></li>
                <li><Link to="/dota2/bugs" className={styles.a}>Баги </Link></li>
                <li><Link to="/dota2/updates" className={styles.a}>Обновления</Link></li>
              </div>
            </ul>
          </div>

          {/* Counter-Strike 2 Section */}
          <div className={styles.conteinerGame}>
            <div className={styles.nameGame}>
              <img src={imgc} alt="Counter-Strike 2" />
              <h3 className={styles.h3}>Counter-Strike 2</h3>
            </div>
            <ul>
              <div className={styles.linkRow}>
                <li><Link to="/cs2/csbugs" className={styles.a}>Баги</Link></li>
                <li><Link to="/cs2/antiCheat" className={styles.a}>Где античит</Link></li>
                <li><Link to="/cs2/throws" className={styles.a}>Раскиды</Link></li>
                <li><Link to="/cs2/workshop" className={styles.a}>Мастерская</Link></li>
              </div>
              <div className={styles.linkRow}>
                <li><Link to="/cs2/csupdates" className={styles.a}>Обновления</Link></li>
                <li><Link to="/cs2/cskins" className={styles.a}>Скины</Link></li>
                <li><Link to="/cs2/csteam-finder" className={styles.a}>Поиск тимейтов</Link></li>
                <li><Link to="/cs2/cstournaments" className={styles.a}>Турниры</Link></li>
              </div>
            </ul>
          </div>
        </div>

        <div className={styles.tema}>
          <ul>
            {allTopics.map((topic, index) => (
              <div className={styles.temaContener} key={topic.id || index}>
                <li>
                  <div className={styles.texttema}>
                    <span className={styles.textInfo}>{topic.topic}</span>
                  </div>
                  <div className={styles.topicDetails}>
                    <span className={styles.textinfo2}>{topic.nickname}</span>
                    <div className={styles.textinfogame}>
                      <span className={styles.textinfo2}>{topic.type}</span>
                      <span className={styles.textinfo2}>{topic.game}</span>
                    </div>
                  </div>
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};