import { createBrowserRouter } from 'react-router'
import App from '../App'
import Root from '../layouts/Root'
import AboutPage from '../pages/AboutPage'
import ContactPage from '../pages/ContactPage'
import ResumePage from '../pages/ResumePage'
import WorkPage from '../pages/WorkPage'

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            { index: true, Component: App },
            { path: 'about', Component: AboutPage },
            { path: 'work', Component: WorkPage },
            { path: 'contact', Component: ContactPage },
            { path: 'resume', Component: ResumePage },
        ],
    },
])
