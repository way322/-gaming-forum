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
import {Csbugs} from './cs2/csbugs.jsx'
import {AntiCheat} from './cs2/AntiCheat.jsx'
import {Throws} from './cs2/Throws.jsx'
import {Workshop} from './cs2/Workshop.jsx'
import {CsUpdates} from './cs2/CsUpdates.jsx'
import {CsKins} from './cs2/CsKins.jsx'
import {CsTeamFinder} from './cs2/CsTeamFinder.jsx'
import {CsTournaments} from './cs2/CsTournaments.jsx'

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
  },{
    path: '/cs2/csbugs',
    element: <Csbugs />,
  },{
    path: '/cs2/antiCheat',
    element: <AntiCheat />,
  },{
    path: '/cs2/throws',
    element: <Throws />,
  },{
    path: '/cs2/workshop',
    element: <Workshop />,
  },{
    path: '/cs2/csupdates',
    element: < CsUpdates/>,
  },{
    path: '/cs2/cskins',
    element: <CsKins />,
  },{
    path: '/cs2/csteam-finder',
    element: <CsTeamFinder />,
  },{
    path: '/cs2/cstournaments',
    element: <CsTournaments />,
  },
]);

function Rout() {
  return <RouterProvider router={router} />
}
export default Rout;