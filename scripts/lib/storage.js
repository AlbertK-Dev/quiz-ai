

// ici un code pour sauveagarder et modifier les éléments dans les storages

import { LOCAL_STORAGE_PRESERVE, SESSION_STORAGE_PRESERVE, STORAGE_PRESERVE_LOCATION_KEY } from "./constant.js";

function saveInStorage(key = "", data = "") {
    let storage = window.localStorage.getItem(STORAGE_PRESERVE_LOCATION_KEY)
    if (!storage) {
        console.log("no storage specified using session storage by default")
        storage = SESSION_STORAGE_PRESERVE
    }
    if (storage === LOCAL_STORAGE_PRESERVE) {
        window.localStorage.setItem(key, data)
        console.log("saving in localstorage")
    } else if (storage === SESSION_STORAGE_PRESERVE) {
        window.sessionStorage.setItem(key, data)
        console.log("saving in sessionstorage")
    } else {
        console.log("impossible")
    }
    
}


function getFromStorage(key = "") {
    if (!key) {
        console.log('no key specified')
        return null
    }
    let storage = window.localStorage.getItem(STORAGE_PRESERVE_LOCATION_KEY)
    if (!storage) {
        console.log("no storage specified using session storage by default")
        storage = SESSION_STORAGE_PRESERVE
    }
    if (storage === LOCAL_STORAGE_PRESERVE) {
        console.log("getting from localstorage")
        return window.localStorage.getItem(key)

    } else if (storage === SESSION_STORAGE_PRESERVE) {
        console.log("getting from sessionstorage")
        return window.sessionStorage.getItem(key)
    } else {
        console.log("impossible")
        return null
    }
    
}

function clearStorage() {
    window.localStorage.clear()
    window.sessionStorage.clear()
    window.location.reload()
}


const storage = {
    save: saveInStorage,
    read: getFromStorage,
    clear: clearStorage

}

export default storage