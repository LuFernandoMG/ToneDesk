const page = '&page=1pre_page=12';
const url = 'https://api.discogs.com';
const key = process.env.REACT_APP_CLIENT_KEY;
const secret = process.env.REACT_APP_CLIENT_SECRET;
const auth = `?key=${key}&secret=${secret}`

export const getResults = (e, p) => {
    return fetch(`https://api.discogs.com/database/search?q=${e}&page=${p}&per_page=12&key=${key}&secret=${secret}`)
                .then((res) => res.json())
                .then((data) => data)
}
