//routes.jsx

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { App } from './App.jsx';
import { Dotabuild } from './dota2/builds.jsx';
import { TopicPage } from './TopicPage.jsx';
import {Customs} from './dota2/customs.jsx';
import {TopicDetail} from './TopicDetail.jsx';
import {Dotabugs} from './dota2/dotabugs.jsx';
import {Dotaskins} from './dota2/dotaskins.jsx';
import {EditTopicPage} from './EditTopicPage.jsx';
import {Dotatournaments} from './dota2/dotatournaments.jsx';
import { ErrorPage404 } from './ErrorPage404.jsx'; // Импортируем страницу ошибки
import {DotaMeta} from './dota2/meta.jsx';
import {DotaTeamFinder} from './dota2/team-finder.jsx'
import {DotaUpdates} from './dota2/updates.jsx'


let router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage404 />,
  },
  {
    path: '/dota2/builds',
    element: <Dotabuild />,
  },
  {
    path: '/create-topic',
    element: <TopicPage />,
  },
  {
    path: '/dota2/customs',
    element: <Customs />,
  },
  {
    path: '/details/:type/:id',
    element: <TopicDetail />,
  },
  {
    path: '/dota2/bugs',
    element: <Dotabugs />,
  },
  {
    path: '/dota2/skins',
    element: <Dotaskins />,
  },
  {
    path: '/edit/:type/:id',
    element: <EditTopicPage />,
  },
  {
    path: '/dota2/tournaments',
    element: <Dotatournaments />,
  },{
    path: '/dota2/meta',
    element: <DotaMeta />,
  },{
    path: '/dota2/team-finder',
    element: <DotaTeamFinder />,
  },{
    path: '/dota2/updates',
    element: <DotaUpdates />,
  },
]);

function Rout() {
  return <RouterProvider router={router} />
}
export default Rout;