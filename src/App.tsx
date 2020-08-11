import React, {useState} from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonAlert,
  IonHeader
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

/*Cookie Servce*/ 
import Cookies from 'universal-cookie'


const App: React.FC = () => (
  <IonApp>
    {GetAlert()} 
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/tab1" component={Tab1} exact={true} />
          <Route path="/tab2" component={Tab2} exact={true} />
          <Route path="/tab3" component={Tab3} />
          <Route path="/" render={() => <Redirect to="/tab1" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/tab1">
            <IonIcon icon={triangle} />
            <IonLabel>Available Books</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            <IonIcon icon={ellipse} />
            <IonLabel>My Books</IonLabel>
          </IonTabButton>
          {/* <IonTabButton tab="tab3" href="/tab3">
            <IonIcon icon={square} />
            <IonLabel>Tab 3</IonLabel>
          </IonTabButton> */}
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);
function GetCookie(){
  debugger;
  const cookie = new Cookies();
  var emailId = cookie.get('emailId');
  if(emailId == undefined || emailId.length == 0){
    console.log("Cookie is not there")
    return true;
  }
  return false;
}
function CheckCookie(){
  debugger;
  const cookie = new Cookies();
  var emailId = cookie.get('emailId');
  if(emailId == undefined || emailId.length == 0){
    console.log("Cookie is not there")
    return true;
  }
  return false;
}

function GetAlert(){
  return (<IonAlert
        isOpen={GetCookie()}
        header={'Enter Login Details!!'}
        backdropDismiss = {false}
        onDidDismiss = {()=> (true)}
        onWillDismiss = {() => OnDismiss()}
        inputs={[
          {
            name:'EmailId',
            type:'email',
            placeholder:'Enter your mail id'
          }
        ]}
        buttons={[
          {
            text:'OK',
            handler: (data) => {
              debugger;
              if(data.EmailId.length != 0){
              const cookie = new Cookies();
              cookie.set("emailId", data.EmailId);
              }
              else{
                GetAlert();
              }
            }
          }
        ]}
      />)
}

function OnDismiss(){
  debugger;
  var cookie = GetCookie();
  if(cookie){
    GetAlert();
  }
}
export default App;
