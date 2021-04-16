import { auth, db, provider } from './firebase';

export const signUpWithMail = (email, password, data) => {
    return auth.createUserWithEmailAndPassword(email, password)
        .then((res) => {
            const userData = {
                name: data.displayName,
                uid: res.user.uid,
                email: data.email,
                collection: [],
                wishlist: [],
            }
            setUserInDB(res.user.uid, {...userData})
            return {...userData}
        })
}


export const signUpWithGoogle = () => {
    return auth.signInWithPopup(provider)
        .then((res) => {
            return getUserProfile(res)
        })
}

export const signInMail = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password)
        .then((res) => {
            return getUserProfile(res);
        })
        .catch((err) => {
            console.error(err);
        })
}

export const setUserInDB = (id, data) => {
    db.collection('users').doc(id).set(data)
}

export const logOut = () => {
    auth.signOut();
}

const getUserProfile = (res) => {
    return db.collection('users').doc(res.user.uid).get()
        .then((doc) => {
            if (doc.exists) {
                return (doc.data())
            } else {
                const dataNewUser = {
                    name: res.user.displayName,
                    uid: res.user.uid,
                    email: res.user.email,
                    collection: [],
                    wishlist: [],
                }
                setUserInDB(res.user.uid, {...dataNewUser})
                return {...dataNewUser}
            }
        })
        .catch((error) => {
            console.log("Error getting document:", error);
        });
}