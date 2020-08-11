import React, {useState} from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import BooksContainer from '../components/BooksContainer';
import './Tab1.css';
import {Books} from '../Models/Books'
import axios from 'axios';

const Tab1: React.FC = () => {
  let[booksCollection, setBooks] = useState([]);
    axios({
      "method":"GET",
      "url":"https://ja-library.azurewebsites.net/api/Books/all"
    }).then(({data}) => {
      setBooks(data);
    })
    .catch((error) => {
      console.log(error)
  })
  return (   
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Available Books</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Available Books</IonTitle>
          </IonToolbar>         
        </IonHeader>
        <BooksContainer books= {booksCollection} />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;