const API = "https://api.themoviedb.org/3";
export function get(path) {
    return( 
    fetch(API + path, {
        headers: {
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZjg3MDFiYjgxNjdhY2U2NmNhZTg2OGZhZDc1Mjg4YyIsInN1YiI6IjYyZTk2YTg3MWFkOTNiMDA1ZTEwNTMyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WwBjJFC_HeJTM3TMIksfQ6EtZpFgK7KIjBFW7XUssW4",
            "Content-Type": "application/json;charset=utf-8",
        },
    }).then((result) => result.json()))

}
