import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import RouteChangeFocus from "./components/RouteChangeFocus";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
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

export default function App() {
  return (
    <Router>
      <RouteChangeFocus />
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <SiteHeader />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/research" component={ResearchPage} />
        <Route exact path="/research/current-projects" component={CurrentProjectsPage} />
        <Route exact path="/publication" component={PublicationPage} />
        <Redirect exact from="/publications" to="/publication/" />
        <Route exact path="/teaching" component={TeachingPage} />
        <Route exact path="/teaching/philosophy" component={TeachingPhilosophyPage} />
        <Route exact path="/teaching/courses" component={CoursesPage} />
        <Route exact path="/teaching/student-voices" component={StudentVoicesPage} />
        <Route exact path="/cv" component={CvPage} />
        <Redirect exact from="/resume" to="/cv/" />
        <Route exact path="/contact" component={ContactPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <SiteFooter />
    </Router>
  );
}
