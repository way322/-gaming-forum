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
import { updateTeamFinderTopic } from './features/teamFindersSlice';
import { updateUpdatesTopic } from './features/updatesSlice';
import { updateCsBugsTopic } from './features/csBugsSlice'; 
import { updateAntiCheatTopic } from './features/antiCheatSlice'; 
import { updateThrowTopic } from './features/throwsSlice'; 
import { updateWorkshopTopic } from './features/workshopSlice'; 
import { updateCsUpdateTopic } from './features/csUpdatesSlice'; 
import { updateCsKinTopic } from './features/csKinsSlice'; 
import { updateCsTeamFinderTopic } from './features/csTeamFinderSlice';
import { updateCsTournamentTopic } from './features/csTournamentsSlice';
import d from './editropic.module.css';
import imgl from './assets/logo.png';

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
    } else if (type === 'team-finder') { 
      return state.teamFinders.topics || [];
    } else if (type === 'updates') { 
      return state.updates.topics || [];
    } else if (type === 'csbugs') { 
      return state.csBugs.topics || []; 
    } else if (type === 'antiCheat') { 
      return state.antiCheat.topics || [];
    } else if (type === 'throws') { 
      return state.throws.topics || []; 
    } else if (type === 'workshop') { 
      return state.workshop.topics || []; 
    } else if (type === 'csupdates') { 
      return state.csUpdates.topics || []; 
    } else if (type === 'cskins') { 
      return state.csKins.topics || []; 
    } else if (type === 'csteam-finder') { 
      return state.csTeamFinder.topics || []; 
    } else if (type === 'cstournaments') { 
      return state.csTournaments.topics || []; 
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
    } else if (type === 'csbugs') { 
      dispatch(updateCsBugsTopic({ id: parseInt(id), updatedTopic })); 
    } else if (type === 'antiCheat') { 
      dispatch(updateAntiCheatTopic({ id: parseInt(id), updatedTopic })); 
    } else if (type === 'throws') { 
      dispatch(updateThrowTopic({ id: parseInt(id), updatedTopic })); 
    } else if (type === 'workshop') { 
      dispatch(updateWorkshopTopic({ id: parseInt(id), updatedTopic })); 
    } else if (type === 'csupdates') { 
      dispatch(updateCsUpdateTopic({ id: parseInt(id), updatedTopic })); 
    } else if (type === 'cskins') { 
      dispatch(updateCsKinTopic({ id: parseInt(id), updatedTopic })); 
    } else if (type === 'csteam-finder') {
      dispatch(updateCsTeamFinderTopic({ id: parseInt(id), updatedTopic })); 
    } else if (type === 'cstournaments') { 
      dispatch(updateCsTournamentTopic({ id: parseInt(id), updatedTopic })); 
    }


    navigate(`/details/${type}/${id}`); 
  };

  return (
    <div className={d.container}>
      <header className={d.header}>
        <div className={d.conteinerlogo}>
          <img src={imgl} alt="logo" className={d.logo} />
          <h1 className={d.title}>Gamer's Hub</h1>
        </div>
        <nav className={d.nav}>
          <Link to="/" className={d.navLink}>Главная страница</Link>
          <Link to={`/details/${type}/${id}`} className={d.navLink}>Назад к теме</Link>
        </nav>
      </header>

      <main className={d.content}>
        <form onSubmit={(e) => { e.preventDefault(); handleUpdate(); }} className={d.form}>
          <div className={d.formGroup}>
            <label className={d.label1}>Никнейм:</label>
            <input
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              required
              className={d.input1}
            />
          </div>
          <div className={d.formGroup}>
            <label className={d.label2}>Тема:</label>
            <input
              type="text"
              value={topicTitle}
              onChange={(e) => setTopicTitle(e.target.value)}
              required
              className={d.input2}
            />
          </div>
          <div className={d.formGroup}>
            <label className={d.label3}>Описание:</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className={d.textarea}
            />
          </div>

          <button type="submit" className={d.submitButton}>Сохранить изменения</button>
        </form>
      </main>
    </div>
  );
};