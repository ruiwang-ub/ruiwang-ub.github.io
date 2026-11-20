import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import RouteChangeFocus from "./components/RouteChangeFocus";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import { visibleRoutes } from "./lib/routes";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CoursesPage from "./pages/CoursesPage";
import CurrentProjectsPage from "./pages/CurrentProjectsPage";
import CvPage from "./pages/CvPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import PublicationPage from "./pages/PublicationPage";
import ResearchPage from "./pages/ResearchPage";
import StudentVoicesPage from "./pages/StudentVoicesPage";
import TeachingPage from "./pages/TeachingPage";
import TeachingPhilosophyPage from "./pages/TeachingPhilosophyPage";

const PAGES = {
  home: HomePage,
  about: AboutPage,
  research: ResearchPage,
  currentProjects: CurrentProjectsPage,
  publication: PublicationPage,
  teaching: TeachingPage,
  teachingPhilosophy: TeachingPhilosophyPage,
  courses: CoursesPage,
  studentVoices: StudentVoicesPage,
  cv: CvPage,
  contact: ContactPage,
};

function routerPath(path) {
  return path === "/" ? path : path.replace(/\/$/, "");
}

export default function App() {
  return (
    <Router>
      <RouteChangeFocus />
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <SiteHeader />
      <Switch>
        {visibleRoutes.map((route) => (
          <Route key={route.key} exact path={routerPath(route.path)} component={PAGES[route.key]} />
        ))}
        <Redirect exact from="/publications" to="/publication/" />
        <Redirect exact from="/resume" to="/cv/" />
        <Route component={NotFoundPage} />
      </Switch>
      <SiteFooter />
    </Router>
  );
}
