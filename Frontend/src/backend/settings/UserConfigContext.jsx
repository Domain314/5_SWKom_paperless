import { createContext } from 'react';

const UserConfigContext = createContext({
    userData: null,
    createUser: () => { },
    getAll: () => { },
    getPhotos: async () => { },
    getPhotoByName: () => { },
    getTermine: async () => { },
    getTerminByName: () => { },
    getBlogs: async () => { },
    getBlogByName: () => { },
    getRezensionen: async () => { },
    getZertifikate: async () => { },
    getGutscheine: async () => { },
    getGridPhotos: async () => { },
    setPhotos: () => { },
    setTermine: () => { },
    setBlogs: () => { },
    setRezensionen: () => { },
    setZertifikate: () => { },
    setGutscheine: () => { },
    setGridPhotos: () => { },
});

export default UserConfigContext;
