import React, { useContext, useEffect } from 'react';
import UserConfigContext from '../settings/UserConfigContext';

import { getAllDocs } from './db';

const Syncer = ({ }) => {

    const { createUser, getPhotos } = useContext(UserConfigContext);

    useEffect(() => {

        (async () => {
            const dbPhotos = await getAllDocs('photos');
            console.log("db-Photos", dbPhotos);
            createUser({ photos: dbPhotos, blogs: [], termine: [], rezensionen: [], zertifikate: [], gutscheine: [], syncer: 0 });
            console.log('created User');
        })();


    }, [])



    return (
        <></>
    );
};

export default Syncer;
