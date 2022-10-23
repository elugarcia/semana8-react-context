import React, { useState } from 'react';
import ActivitiesContext, { Activity, ActivitiesContextModel, ActivityType } from './activities-context';

const ActivitiesContextProvider: React.FC = (props) => {

    const [activities, setActivities] = useState<Activity[]>([
        {
            id: Math.random().toString(),
            title: 'Estudiar economía',
            description: 'Estudiar las unidades 2 y 3 de Economía para el exámen del viernes',
            datetime: new Date(2022, 10, 10, 9, 7, 0).toISOString().replace(/T/, ' ').replace(/\..+/, ''),
            activityType: 'study',
            imageUrl: '/assets/images/study.jpg',
            isCompleted: false
        },
        {
            id: Math.random().toString(),
            title: 'Videollamada con el equipo',
            description: 'Hacer videollamada con el equipo para definir las nuevas tareas de cada uno',
            datetime: new Date(2022, 10, 17, 20, 17, 0).toISOString().replace(/T/, ' ').replace(/\..+/, ''),
            activityType: 'work',
            imageUrl: '/assets/images/work.jpg',
            isCompleted: false
        },
        {
            id: Math.random().toString(),
            title: 'Partido de ping pong',
            description: 'Partido de ping pong en lo de Juan',
            datetime: new Date(2022, 10, 8, 10, 52, 0).toISOString().replace(/T/, ' ').replace(/\..+/, ''),
            activityType: 'hobby',
            imageUrl: '/assets/images/hobby.jpg',
            isCompleted: false
        }
    ]);

    const addActivity = (title: string, description: string, activityType: ActivityType) => {
        let imageUrl = '';
        switch (activityType) {
            case 'study':
                imageUrl = '/assets/images/study.jpg'
                break;
            case 'hobby':
                imageUrl = '/assets/images/hobby.jpg'
                break;
            case 'work':
                imageUrl = '/assets/images/work.jpg'
                break;
            default:
                imageUrl = '/assets/images/work.jpg'
                break;
        };

        const activityDate = new Date();
        const datetime = activityDate.toISOString().replace(/T/, ' ').replace(/\..+/, '');

        const addActivity: Activity = {
            id: Math.random().toString(),
            title,
            description,
            datetime,
            activityType,
            imageUrl,
            isCompleted: false
        };

        setActivities(currActivities => {
            return [...currActivities, addActivity]
        })
    };

    const completeActivity = (activityId: string) => {
        setActivities(currActivities => {
            const updatedActivities = [...currActivities];
            const selectedActivityIndex = activities.findIndex(act => act.id === activityId);
            const updatedActivity = { ...updatedActivities[selectedActivityIndex], isCompleted: true };
            updatedActivities[selectedActivityIndex] = updatedActivity;
            return updatedActivities;
        });
    };


    const deleteActivity = (activityId: string) => {
        setActivities(currActivities => {
            let updatedActivities = [...currActivities];
            const selectedActivityIndex = activities.findIndex(act => act.id === activityId);
            updatedActivities.splice(selectedActivityIndex, 1);
            return updatedActivities;
        });
    };

    const activitiesContext: ActivitiesContextModel = {
        activities,
        addActivity,
        completeActivity, deleteActivity
    };

    return (
        <ActivitiesContext.Provider value={activitiesContext}>
            {props.children}
        </ActivitiesContext.Provider>
    );
};

export default ActivitiesContextProvider;