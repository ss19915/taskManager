export const API_STATUS = {
    INITIAL: 'INITIAL',
    SENT: 'SENT',
    RECEIVED: 'RECEIVED',
    ERROR: 'ERROR',
};

export const ROUTES = {
    DASHBOARD: '/',
    CREATE_TASK: '/task/create',
    VIEW_TASK: '/task/view',
    EDIT_TASK: '/task/edit',
    SIGN_IN: '/login',
};

export const VIEW_MODE = {
    EDIT: 'EDIT',
    VIEW: 'VIEW',
};

export const FIREBASE_CONFIG = JSON.parse(process.env.FIREBASE_CONFIG)