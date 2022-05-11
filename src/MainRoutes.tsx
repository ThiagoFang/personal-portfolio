import { useRoutes } from 'react-router-dom'

import { Home } from './pages/Home'
import { Projects } from './pages/Projects'
import { RouteError } from './pages/RouteError'

export const MainRoutes = () => {
    return useRoutes ([
        {path: "/", element: <Home />},
        {path: "/projects", element: <Projects />},
        {path: "*", element: <RouteError />}
    ])
}