// EditTopicPage.jsx
import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateBuildTopic } from './features/buildsSlice';
import { updateCustomTopic } from './features/customsSlice';
import { updateBugsTopic } from './features/bugsSlice';
import { updateSkinsTopic } from './features/skinsSlice';
import { updateTournamentTopic } from './features/tournamentsSlice';
import { updateMetaTopic } from './features/metaSlice';
import { updateTeamFinderTopic } from './features/teamFindersSlice'; // Импортируем updateTeamFinderTopic
import { updateUpdatesTopic } from './features/updatesSlice';

export const EditTopicPage = () => {
  const { type, id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
      return state.teamFinders.topics || [];
    } else if (type === 'updates') { // Добавлено для updates
      return state.updates.topics || [];
    }
    return [];
  });

  const topic = topics.find((_, index) => index === parseInt(id));

  if (!topic) {
    return <p>Тема не найдена.</p>;
  }

  const [nickname, setNickname] = useState(topic.nickname);
  const [topicTitle, setTopicTitle] = useState(topic.topic);
  const [description, setDescription] = useState(topic.description);

  const handleUpdate = () => {
    const updatedTopic = {
      nickname,
      topic: topicTitle,
      description,
    };

    if (type === 'builds') {
      dispatch(updateBuildTopic({ id: parseInt(id), updatedTopic }));
    } else if (type === 'customs') {
      dispatch(updateCustomTopic({ id: parseInt(id), updatedTopic }));
    } else if (type === 'bugs') {
      dispatch(updateBugsTopic({ id: parseInt(id), updatedTopic }));
    } else if (type === 'skins') {
      dispatch(updateSkinsTopic({ id: parseInt(id), updatedTopic }));
    } else if (type === 'tournaments') {
      dispatch(updateTournamentTopic({ id: parseInt(id), updatedTopic }));
    } else if (type === 'meta') {
      dispatch(updateMetaTopic({ id: parseInt(id), updatedTopic }));
    } else if (type === 'team-finder') {
      dispatch(updateTeamFinderTopic({ id: parseInt(id), updatedTopic }));
    } else if (type === 'updates') { 
      dispatch(updateUpdatesTopic({ id: parseInt(id), updatedTopic }));
    }

    navigate(`/details/${type}/${id}`); // Перенаправляем на страницу темы
  };

  return (
    <div>
      <header className="header">
        <h1>Редактировать тему</h1>
        <nav>
          <Link to="/">Главная страница</Link>
          <Link to={`/${type}/${id}`}>Назад к теме</Link>
        </nav>
      </header>

      <main className="content">
        <form onSubmit={(e) => { e.preventDefault(); handleUpdate(); }}>
          <div>
            <label>Никнейм:</label>
            <input
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Тема:</label>
            <input
              type="text"
              value={topicTitle}
              onChange={(e) => setTopicTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Описание:</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          
          <button type="submit">Со хранить изменения</button>
        </form>
      </main>
    </div>
  );
};