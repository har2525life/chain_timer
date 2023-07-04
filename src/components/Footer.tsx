import { IonIcon, IonLabel, IonTabBar, IonTabButton } from "@ionic/react";
import { ellipse, square, triangle } from "ionicons/icons";

export default function Footer() {
  return (
    <>
      <IonTabBar slot="bottom">
        <IonTabButton tab="tab1" href="/tab1">
          <IonIcon aria-hidden="true" icon={triangle} />
          <IonLabel>HOME</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab2" href="/tab2">
          <IonIcon aria-hidden="true" icon={ellipse} />
          <IonLabel>LOG</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab3" href="/tab3">
          <IonIcon aria-hidden="true" icon={square} />
          <IonLabel>SETTING</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </>
  );
}
