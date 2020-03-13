// Views
import Node from './views/Node/Node'
import JQuery from './views/JQuery/JQuery'
import ReactJS from './views/ReactJS/ReactJS'
import Snippets from './views/Snippets/Snippets'
import Commands from './views/Commands/Commands'
import Tools from './views/Tools/Tools'
import Dashboard from './views/Dashboard/Dashboard'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/node',
    name: 'Node.js',
    component: Node
  },
  {
    path: '/jquery',
    name: 'jQuery',
    component: JQuery
  },
  {
    path: '/react',
    name: 'React',
    component: ReactJS
  },
  {
    path: '/snippets',
    name: 'Code Snippets',
    component: Snippets
  },
  {
    path: '/commands',
    name: 'Commands',
    component: Commands
  },
  {
    path: '/tools',
    name: 'Tools',
    component: Tools
  }
]

export default routes
