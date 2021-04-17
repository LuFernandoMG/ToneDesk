const key = process.env.REACT_APP_CLIENT_KEY;
const secret = process.env.REACT_APP_CLIENT_SECRET;

export const getResults = (arr) => {
    return fetch(`https://api.discogs.com/database/search?q=${arr[0]}&page=${arr[1]}&per_page=12&key=${key}&secret=${secret}`)
        .then((res) => res.json())
        .then((data) => {
            return data
        })
        .catch((err) => {
            console.error(err);
        })
}
