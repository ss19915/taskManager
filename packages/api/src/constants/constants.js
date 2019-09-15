const DB =  {
    HostPre: process.env.DB_HOST_PRE,
    HostSuff: process.env.DB_HOST_SUFF,
    User: process.env.DB_USER,
    Password: process.env.DB_PASSWORD,
};

export const API_PORT = process.env.API_PORT || 8081;

export const API_URI = `${process.env.API_URL}:${API_PORT}`;

export const DB_URI = `${DB.HostPre}${DB.User}:${DB.Password}${DB.HostSuff}`;

export const ROUTES = {
    TASK: '/task',
};