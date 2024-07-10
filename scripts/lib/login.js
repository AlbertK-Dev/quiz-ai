import { LOCAL_STORAGE_PRESERVE, SESSION_STORAGE_PRESERVE, STORAGE_PRESERVE_LOCATION_KEY, STORAGE_PSEUDO_KEY } from "./constant.js"
import storage from "./storage.js"



function signinPlayer(pseudo = "Albert-k", preserve=true) {
    if (preserve) {
        window.localStorage.setItem(STORAGE_PSEUDO_KEY, pseudo)
        window.localStorage.setItem(STORAGE_PRESERVE_LOCATION_KEY, LOCAL_STORAGE_PRESERVE)
    } else {
        window.localStorage.removeItem(STORAGE_PSEUDO_KEY)
        window.sessionStorage.setItem(STORAGE_PSEUDO_KEY, pseudo)
        window.localStorage.setItem(STORAGE_PRESERVE_LOCATION_KEY, SESSION_STORAGE_PRESERVE)

    }


}

function loginPlayer() {
    console.log(window.location.pathname)
    const persistLocation = window.localStorage.getItem(STORAGE_PRESERVE_LOCATION_KEY)
    if (persistLocation === LOCAL_STORAGE_PRESERVE) {
        const pseudo = window.localStorage.getItem(STORAGE_PSEUDO_KEY)
        if (pseudo && (window.location.pathname !== "/pages/quiz.html")) {
            
            window.location.href = window.location.origin + "/pages/quiz.html"
            return true
        } else {
            return false
        }
    }else if (persistLocation === SESSION_STORAGE_PRESERVE) {
        const pseudo = window.sessionStorage.getItem(STORAGE_PSEUDO_KEY)
        if (pseudo && (window.location.pathname !== "/pages/quiz.html")) {
            window.location.href = window.location.origin + "/pages/quiz.html"
            return true
        } else {
            return false
        }
    } else {
        console.log("pas encore utilisateur")
        return false
    }
}

function verifyIfConnected() {
    const persistLocation = window.localStorage.getItem(STORAGE_PRESERVE_LOCATION_KEY)
    if (persistLocation === LOCAL_STORAGE_PRESERVE) {
        const pseudo = window.localStorage.getItem(STORAGE_PSEUDO_KEY)
        if (pseudo) {
            return { isConnected: true, pseudo}
        } else {
            return { isConnected: false}
        }
    } else if (persistLocation === SESSION_STORAGE_PRESERVE) {
        const pseudo = window.sessionStorage.getItem(STORAGE_PSEUDO_KEY)
        if (pseudo) {
            return { isConnected: true, pseudo}
        } else {
            return { isConnected: false}
        }
    } else {
        return { isConnected: false}
    }
}

function disconnectPlayer() {
    storage.clear()
    window.location.reload()
}

const connect = {
    signin: signinPlayer,
    login: loginPlayer,
    verify: verifyIfConnected,
    off: disconnectPlayer


}

export default connect