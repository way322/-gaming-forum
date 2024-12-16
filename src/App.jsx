// app.jsx
import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useSelector } from 'react-redux'; 
import imgd from './assets/dota2.png';
import imgm from './assets/minecraf.png';
import imgc from './assets/counter-strike2.png';
import './App.css';

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

  const allTopics = [
    ...buildsTopics.map(topic => ({ ...topic, type: 'Билды', game: 'Dota 2 beta' })), 
    ...customsTopics.map(topic => ({ ...topic, type: 'Кастомки', game: 'Dota 2 beta' })),
    ...bugsTopics.map(topic => ({ ...topic, type: 'Баги', game: 'Dota 2 beta' })),
    ...skinsTopics.map(topic => ({ ...topic, type: 'Скины', game: 'Dota 2 beta' })),
    ...tournamentsTopics.map(topic => ({ ...topic, type: 'Турниры', game: 'Dota 2 beta' })),
    ...metaTopics.map(topic => ({ ...topic, type: 'Мета', game: 'Dota 2 beta' })),
    ...teamFindersTopics.map(topic => ({ ...topic, type: 'Поиск тимейтов', game: 'Dota 2 beta' })),
    ...updatesTopics.map(topic => ({ ...topic, type: 'Обновления', game: 'Dota 2 beta' })),
  ];

  return (
    <div>
      <header>
        <h1>Gamer's Hub</h1>
      </header>

      <div>
        <div>
          <div>
            <img src={imgd} alt="Dota 2" />
            <h3>Dota 2 beta</h3>
          </div>
          <ul>
            <li><Link to="/dota2/builds">Билды</Link></li>
            <li><Link to="/dota2/team-finder">Поиск тимейтов</Link></li>
            <li><Link to="/dota2/customs">Кастомки</Link></li>
            <li><Link to="/dota2/skins">Скины</Link></li>
            <li><Link to="/dota2/meta">Мета</Link></li>
            <li><Link to="/dota2/tournaments">Турниры</Link></li>
            <li><Link to="/dota2/bugs">Баги</Link></li>
            <li><Link to="/dota2/updates">Обновления</Link></li>
          </ul>
        </div>

        <div>
          <div>
            <img src={imgc} alt="Counter-Strike 2" />
            <h3>Counter-Strike 2</h3>
          </div>
          <ul>
            <li><Link to="/cs2/bugs">Баги</Link></li>
            <li><Link to="/cs2/anti-cheat">Где античит</Link></li>
            <li><Link to="/cs2/throws">Ракиды</Link></li>
            <li><Link to="/cs2/workshop">Мастерская</Link></li>
            <li><Link to="/cs2/updates">Обновления</Link></li>
            <li><Link to="/cs2/skins">Скины</Link></li>
            <li><Link to="/cs2/team-finder">Поиск тимейтов</Link></li>
            <li><Link to="/cs2/tournaments">Турниры</Link></li>
          </ ul>
        </div>

        <div>
          <div>
            <img src={imgm} alt="Minecraft" />
            <h3>Minecraft</h3>
          </div>
          <ul>
            <li><Link to="/minecraft/mods">Моды</Link></li>
            <li><Link to="/minecraft/team-finder">Поиск тимейтов</Link></li>
            <li><Link to="/minecraft/servers">Сервера</Link></li>
            <li><Link to="/minecraft/shaders">Шейдеры</Link></li>
            <li><Link to="/minecraft/minigames">Мини игры</Link></li>
            <li><Link to="/minecraft/skins">Скины</Link></li>
            <li><Link to="/minecraft/maps">Карты</Link></li>
            <li><Link to="/minecraft/resource-packs">Текстур паки</Link></li>
          </ul>
        </div>
      </div>

      <div>
        <h2>Созданные темы:</h2>
        <ul>
          {allTopics.map((topic, index) => (
            <li key={index}>
              <strong>Тема:</strong> {topic.topic} | <strong>Никнейм:</strong> {topic.nickname} | <strong>Тип:</strong> {topic.type} | <strong>Игра:</strong> {topic.game}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
};