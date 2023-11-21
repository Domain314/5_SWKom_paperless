// import React, { useEffect, useState, useContext } from 'react';
// import UserConfigContext from '../settings/UserConfigContext';

// import { getSyncerVersion, getAllDocs, uploadDoc } from '../utils/db';

// import { randomDateName } from '../utils/random';

// const Backup = () => {
//     const {
//         getBlogs,
//         getPhotos,
//         getTermine,
//         getRezensionen,
//         getZertifikate,
//         getGutscheine,
//         getGridPhotos
//     } = useContext(UserConfigContext);
//     const [allData, setAllData] = useState(null);
//     const [backups, setBackups] = useState(null);

//     async function refreshData() {
//         const newData = {
//             blogs: await getBlogs(),
//             photos: await getPhotos(),
//             termine: await getTermine(),
//             rezensionen: await getRezensionen(),
//             zertifikate: (await getZertifikate())[0].zerts,
//             gutscheine: (await getGutscheine())[0].guts,
//             gridPhotos: (await getGridPhotos())[0].grid,
//             syncer: await getSyncerVersion(),
//             name: randomDateName(),
//         };
//         setAllData(newData);
//         console.log('newData', newData);


//         const newBackups = (await getAllDocs('backups')).sort((a, b) => b.syncer.version - a.syncer.version);
//         console.log('newBackups', newBackups);

//         setBackups(newBackups.length === 0 ? null : newBackups);
//     }

//     useEffect(() => {
//         (async () => {
//             await refreshData();
//         })()
//     }, [])

//     const handleMakeBackup = async () => {
//         uploadDoc(allData, 'backups')
//     }

//     const handleChooseVersion = async (backup) => {
//         console.log(backup);

//     }

//     return (
//         <div className=''>
//             <h1>Backup</h1>
//             <ButtonAdd content='+' onClick={handleMakeBackup} />

//             <table>
//                 <thead>
//                     <tr>
//                         <td>Blogs</td>
//                         <td>Version</td>
//                         <td></td>

//                     </tr>
//                 </thead>

//                 <tbody>
//                     {allData &&
//                         <tr>
//                             <td>{allData.blogs.length}</td>
//                             <td>{allData.syncer.version}</td>
//                             <td>Aktuell</td>
//                         </tr>
//                     }

//                     {backups &&
//                         backups.map((backup, index) =>
//                             <tr key={index}>
//                                 <td>{backup.blogs.length}</td>
//                                 <td>{backup.syncer.version}</td>
//                                 <td></td>
//                             </tr>
//                         )

//                     }
//                 </tbody>

//             </table>



//         </div>
//     );
// };

// export default Backup;