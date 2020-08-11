import React from 'react';
import './BooksContainer.css';
import { IonItem, IonButton, IonLabel } from '@ionic/react';

interface BooksContainerProps {
  books: any;
}

const BooksContainer : React.FC<BooksContainerProps> = ({books}) => {
    return ( 
          <div>
            {
              books.map((data:any, index:any) => (
             <div className="item item-block">
                <IonItem className="item-inner">
                    <IonLabel className="input-wrapper" key ={index}>
                    {data.title}<br/>
                    Author : {data.author}
                    </IonLabel>
                    <IonButton>Borrow</IonButton>
                </IonItem>
              </div>
              ))
            }
          </div>
      );
    };

export default BooksContainer;