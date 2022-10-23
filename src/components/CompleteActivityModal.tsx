import React, { useContext } from 'react';
import { IonContent, IonGrid, IonRow, IonCol, IonImg, IonText, IonButton } from '@ionic/react';
import ActivitiesContext, { Activity } from '../data/activities-context';

interface CompleteModalActivityProps {
    activity: Activity;
    dismissModal: () => void;
}

const CompleteModalActivity: React.FC<CompleteModalActivityProps> = (props) => {

    const activitiesCtxt = useContext(ActivitiesContext);

    const confirmCompletion = (activityId: string) => {
        activitiesCtxt.completeActivity(activityId);
        props.dismissModal();
    };

    return (
        <IonContent>
            <IonGrid className='ion-no-padding'>
                <IonRow>
                    <IonCol className='ion-no-padding'>
                        <IonImg src={props?.activity?.imageUrl} />
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol className='ion-text-center'>
                        <IonText>
                            <h2>{props?.activity?.title}</h2>
                        </IonText>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol className='ion-text-center ion-no-padding'>
                        <IonText color='medium'>
                            <p>
                                ¿Está seguro de marcar esta actividad como completa?
                            </p>
                        </IonText>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol className='ion-text-center'>
                        <IonButton color='danger' fill='clear' onClick={props?.dismissModal}>
                            Cancelar
                        </IonButton>
                    </IonCol>
                    <IonCol className='ion-text-center'>
                        <IonButton color='primary' fill='clear' onClick={() => confirmCompletion(props?.activity.id)}>
                            Completar
                        </IonButton>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>
    );
};

export default CompleteModalActivity;
