import React, { useState } from 'react';
import UserConfigContext from './UserConfigContext.jsx';
import UserData from './UserData';

import { getAllDocs } from '../utils/db.js';

const UserConfigProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);

    const userInstance = new UserData();

    const createUser = (data) => {
        userInstance.createUser(data);
        setUserData(userInstance.getAll());
    };

    const getAll = () => {
        return userData;
    };

    const getPhotos = async () => {
        if (!userData?.photos || userData.photos.length === 0) {
            console.log('not found');

            const photos = await getAllDocs('photos');
            setPhotos(photos);
            return photos;
        }
        return userData.photos;
    };

    const getPhotoByName = (name) => {
        if (!userData.photos || userData.photos.length === 0) {
            return null;
        }
        // const allPhotos = userData?.photos ? userData.photos : await getPhotos();
        const photo = userData.photos.find(photo => photo.name === name);

        return photo
    }

    const getTermine = async () => {
        if (!userData?.termine || userData.termine.length === 0) {
            const termine = await getAllDocs('termine');
            setTermine(termine);
            return termine;
        }
        return userData.termine;
    };

    const getTerminByName = async (name) => {
        const allTermine = userData?.termine ? userData.termine : await getTermine();
        const termin = allTermine.find(termin => termin.name === name);
        return termin
    }

    const getBlogs = async () => {
        if (!userData?.blogs || userData.blogs.length === 0) {
            const blogs = await getAllDocs('blogs');
            setBlogs(blogs);
            return blogs;
        }
        return userData.blogs;
    };

    const getBlogByName = async (name) => {
        const allBlogs = userData?.blogs ? userData.blogs : await getBlogs();
        const blog = allBlogs.find(blog => blog.name === name);
        return blog
    }

    const getRezensionen = async () => {
        if (!userData?.rezensionen || userData.rezensionen.length === 0) {
            const rezensionen = await getAllDocs('rezensionen');
            setRezensionen(rezensionen);
            return rezensionen;
        }
        return userData.rezensionen;

    };

    const getZertifikate = async () => {
        if (!userData?.zertifikate || userData.zertifikate.length === 0) {
            const zertifikate = await getAllDocs('zertifikate');
            setZertifikate(zertifikate);
            return zertifikate;
        }
        return userData.zertifikate;
    };

    const getGutscheine = async () => {
        if (!userData?.gutscheine || userData.gutscheine.length === 0) {
            const gutscheine = await getAllDocs('gutscheine');
            setGutscheine(gutscheine);
            return gutscheine;
        }
        return userData.gutscheine;
    };

    const getGridPhotos = async () => {
        if (!userData?.gridPhotos || userData.gridPhotos.length === 0) {
            const gridPhotos = await getAllDocs('gridPhotos');
            setGridPhotos(gridPhotos);
            return gridPhotos;
        }
        return userData.gridPhotos;
    };


    const setPhotos = (photos) => {
        setUserData((prevUserData) => {
            return {
                ...prevUserData,
                photos: photos
            };
        });

    };

    const setTermine = (termine) => {
        setUserData((prevUserData) => {
            return {
                ...prevUserData,
                termine: termine
            };
        });
    };

    const setBlogs = (blogs) => {
        setUserData((prevUserData) => {
            return {
                ...prevUserData,
                blogs: blogs
            };
        });
    };

    const setRezensionen = (rezensionen) => {
        setUserData((prevUserData) => {
            return {
                ...prevUserData,
                rezensionen: rezensionen
            };
        });
    };

    const setZertifikate = (zertifikate) => {
        setUserData((prevUserData) => {
            return {
                ...prevUserData,
                zertifikate: zertifikate
            };
        });
    };

    const setGutscheine = (gutscheine) => {
        setUserData((prevUserData) => {
            return {
                ...prevUserData,
                gutscheine: gutscheine
            };
        });
    };

    const setGridPhotos = (gridPhotos) => {
        setUserData((prevUserData) => {
            return {
                ...prevUserData,
                gridPhotos: gridPhotos
            };
        });
    };



    return (
        <UserConfigContext.Provider
            value={{
                userData,
                createUser,
                getAll,
                getPhotos,
                getPhotoByName,
                getTermine,
                getTerminByName,
                getBlogs,
                getBlogByName,
                getRezensionen,
                getZertifikate,
                getGutscheine,
                getGridPhotos,
                setPhotos,
                setTermine,
                setBlogs,
                setRezensionen,
                setZertifikate,
                setGutscheine,
                setGridPhotos
            }}
        >
            {children}
        </UserConfigContext.Provider>
    );
};

export default UserConfigProvider;
