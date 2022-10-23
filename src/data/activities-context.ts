import React from 'react';

export type ActivityType = 'study' | 'work' | 'hobby';

export interface Activity {
    id: string;
    title: string;
    description: string;
    datetime: string;
    activityType: ActivityType;
    imageUrl: string;
    isCompleted: boolean;
}

export interface ActivitiesContextModel {
    activities: Activity[];
    addActivity: (title: string, description: string, activityType: ActivityType) => void;
    completeActivity: (activityId: string) => void;
    deleteActivity: (activityId: string) => void;
}

const ActivitiesContext = React.createContext<ActivitiesContextModel>({
    activities: [],
    addActivity: () => {},
    completeActivity: () => {},
    deleteActivity: () => {},

});

export default ActivitiesContext;