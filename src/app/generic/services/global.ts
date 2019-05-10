export var GLOBAL = {
    server:"http://localhost:3800/api/",
    //server: "https://gestiontransitoapi.herokuapp.com/api/",
    Auth: {
        IsTokenValid: "auth/isTokenValid",
        Login: "auth/login",
    },
    User: {
        Register:"user/register",
        Modify:"user/modify",
        UserByToken:"user/getUserByToken",
        Users:"user/getAllUsers",
    }
}