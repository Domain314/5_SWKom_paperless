import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
    deleteObject
} from 'firebase/storage';
import {
    getFirestore,
    getDoc,
    getDocs,
    updateDoc,
    writeBatch,
    deleteDoc,
    batchCommit,
    collection,
    setDoc,
    query,
    doc,
    serverTimestamp,
} from 'firebase/firestore';
import { randomName } from './random';


const RESIZING_WAIT_TIME = 5000;

const MESSAGE_CONFIRM_RELOAD_AFTER_UPLOAD = "Uploading done";
const ERROR_MESSAGE_UPLOAD_FAILED = "There was an error uploading a file to Cloud Storage:";
const ERROR_MESSAGE_TIMEOUT = "Timeout reached. Aborting upload.";
const ERROR_MESSAGE_WRONG_FORMAT = "Please upload only images";

// const uploads = [];
var countTimeOuts = 0;

export async function uploadPhotos(photoFiles) {

    console.log(photoFiles);

    // const photoFiles = e.target.files;
    const uploads = [];
    try {
        for (let index = 0; index < photoFiles.length; index++) {
            const photoFile = photoFiles[index];
            const fileName = randomName();
            const filePath = `upload/${fileName}.${getImageType(photoFile.type)}`;
            const filePathThumbnail = `thumbnail/${fileName}_400x400.webp`;
            const filePathFullHD = `thumbnail/${fileName}_2000x2000.webp`;
            const imageRef = ref(getStorage(), filePath);
            const uploadPhoto = await uploadBytesResumable(imageRef, photoFile);
            uploads.push({
                success: false,
                data: {
                    id: fileName,
                    thumbnailRef: ref(getStorage(), filePathThumbnail),
                    fullHDRef: ref(getStorage(), filePathFullHD),
                    thumbnailUrl: '',
                    fullHDUrl: '',
                    type: getImageType(photoFile.type)
                },
            });
        }
        console.log('uploaded');
        console.log(uploads);

        // awaitThumbnailFullHDGeneration();

        return uploads;

    } catch (error) {
        console.error(ERROR_MESSAGE_UPLOAD_FAILED, error);
        return;
    }
}

export async function deletePhotoById(fileName) {
    const imageRefThumbnail = ref(getStorage(), `thumbnail/${fileName}_400x400.webp`);
    const imageRefFullHD = ref(getStorage(), `thumbnail/${fileName}_2000x2000.webp`);

    deleteObject(imageRefThumbnail)
    deleteObject(imageRefFullHD)

    try {
        const imageRefOriginal = ref(getStorage(), `upload/${fileName}.webp`)
        await deleteObject(imageRefOriginal)
    } catch (error) {
        try {
            const imageRefOriginal = ref(getStorage(), `upload/${fileName}.jpg`)
            await deleteObject(imageRefOriginal)
        } catch (error) {
            try {
                const imageRefOriginal = ref(getStorage(), `upload/${fileName}.jpeg`)
                await deleteObject(imageRefOriginal)
            } catch (error) {
                try {
                    const imageRefOriginal = ref(getStorage(), `upload/${fileName}.png`)
                    await deleteObject(imageRefOriginal)
                } catch (error) {
                    console.warn("Pic not found", error.message)
                }
            }
        }
    }
}


// Wait for RESIZING_WAIT_TIME, then check if uploaded photos got resized by Firebase Functions
// function awaitThumbnailFullHDGeneration() {
//     countTimeOuts++;
//     if (countTimeOuts >= 12) { alert(ERROR_MESSAGE_TIMEOUT); return; }

//     window.setTimeout(() => {
//         if (!checkForFinishedGeneration()) {
//             awaitThumbnailFullHDGeneration();
//         }

//     }, RESIZING_WAIT_TIME)
// }

// // Check if all uploads got URLs for resized versions.
// // If not, try to get them.
// function checkForFinishedGeneration() {
//     if (uploads.length == 0) return false;

//     let allDone = true;
//     for (let i = 0; i < uploads.length; i++) {
//         const data = uploads[i].data;
//         if (data.thumbnailUrl == '' || data.fullHDUrl == '') {
//             allDone = false;
//             if (tryToGetURL(data)) {
//                 allDone = true;
//             }
//         }
//     }
//     return allDone;
// }

// Try to create DownloadURLs for resized photos. 
export async function tryToGetURL(upload) {

    try {

        if (upload.data.thumbnailUrl === '') {
            const url = await getDownloadURL(upload.data.thumbnailRef)
            upload.data.thumbnailUrl = url;
        }
        if (upload.data.fullHDUrl === '') {
            const url = await getDownloadURL(upload.data.fullHDRef)
            upload.data.fullHDUrl = url;
            upload.success = true;
            return true;
        }

    } catch (e) {
        console.log(e.message);
        return false;
    }

    return false;
}

// Update URLs for uploaded photos
// async function updateURLs(id, thumbnailUrl, fullHDUrl, repairedURL = false) {

//     addToCol({
//         "id": id,
//         "thumbnailUrl": thumbnailUrl,
//         "fullHDUrl": fullHDUrl
//     }, 'photos');

//     document.getElementById('loadingPlaceholder').src = fullHDUrl;
//     document.getElementById('submit').disabled = false;
//     const photoInputField = document.getElementById('photo');
//     photoInputField.type = 'text';
//     photoInputField.value = id;

//     countTimeOuts = 0;
//     return;
// }

// convert HTML-image-type to string
function getImageType(type) {
    switch (type) {
        case 'image/png': return 'png'; break;
        case 'image/jpeg': return 'jpg'; break;
        case 'image/webp': return 'webp'; break;

        default: alert("wrong image type"); return 'jpg'; break;
    }
}

export function getTimestamp() {
    return serverTimestamp();
}