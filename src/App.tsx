import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { calendar, settings, home } from "ionicons/icons";
import MainPage from "./pages/MainPage";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/tailwind.css";
import "./theme/variables.css";
import CreateTimer from "./pages/CreateTimerPage";
import AddTimer from "./pages/AddTimerPage";
import LogPage from "./pages/LogPage";
import SettingPage from "./pages/SettingPage";
import TimerPage from "./pages/TimerPage";
import SendMessage from "./pages/SendMessage";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/main">
            <MainPage />
          </Route>
          <Route exact path="/register">
            <CreateTimer />
          </Route>
          <Route path="/add">
            <AddTimer />
          </Route>
          <Route path="/log">
            <LogPage />
          </Route>
          <Route path="/setting">
            <SettingPage />
          </Route>
          <Route exact path="/timer">
            <TimerPage />
          </Route>
          <Route exact path="/message">
            <SendMessage />
          </Route>
          <Route exact path="/">
            <Redirect to="/main" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/main">
            <IonIcon aria-hidden="true" icon={home} />
            <IonLabel>HOME</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/log">
            <IonIcon aria-hidden="true" icon={calendar} />
            <IonLabel>LOG</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/setting">
            <IonIcon aria-hidden="true" icon={settings} />
            <IonLabel>SETTING</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
