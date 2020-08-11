import React from 'react';
import './ExploreContainer.css';
import { Books } from '../Models/Books';
import { IonItem, IonList, IonLabel } from '@ionic/react';

interface ContainerProps {
  books: any;
}

const ExploreContainer: React.FC<ContainerProps> = ({ books }) => {
  return (
    <div className="container">
      <div>
        {
          books.map((data:any, index:any) => (
          <IonItem>
            <IonLabel key ={index}>
              {data.author}
            </IonLabel>
          </IonItem>
          ))
        }
      </div>
    </div>
  );
};

export default ExploreContainer;


{/* <div className="card">
        <i>{books.title}</i>
          <div className="card-body">
                <h5 className="card-title">{books.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{books.author}</h6>
          </div>
      </div> */}