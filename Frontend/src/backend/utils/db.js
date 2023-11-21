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
    increment
} from 'firebase/firestore';

// const photos = await getAllDocs('photos');

export async function getAllDocs(col) {
    const allDocs = [];
    const querySnapshot = await getDocs(collection(getFirestore(), col));

    querySnapshot.forEach((doc) => {
        allDocs.push(doc.data());
    });

    return allDocs;
}

export async function getSyncerVersion() {
    const syncer = await getDoc(doc(getFirestore(), 'syncer', 'mk'));
    console.log('SYNCER', syncer.data());

    return syncer.data();
}

export async function getOneDoc(col, name) {
    const querySnapshot = await getDoc(doc(getFirestore(), col, name));
    const oneDoc = querySnapshot.data();
    return oneDoc;
}

export async function uploadDoc(entry, col) {
    console.log(entry);

    try {
        await setDoc(doc(getFirestore(), col, entry.name), entry);
        await incrementSyncerVersion();
    } catch (error) {
        console.log(error.message);
    }
}

export async function uploadNewDoc(entry, entries, col) {
    try {
        const batch = writeBatch(getFirestore());
        const newEntryRef = doc(getFirestore(), col, entry.name);
        batch.set(newEntryRef, entry);

        for (let i = 0; i < entries.length; i++) {
            const entryRef = doc(getFirestore(), col, entries[i].name);
            batch.update(entryRef, { pos: entries[i].pos });
        }
        await batch.commit(batch);
        console.log('saved');
        await incrementSyncerVersion();
        return true;
    } catch (error) {
        console.log(error.message);
        return false;
    }
}

export async function saveAllPositions(entries, col) {
    try {
        const batch = writeBatch(getFirestore());

        for (let i = 0; i < entries.length; i++) {
            const entryRef = doc(getFirestore(), col, entries[i].name);
            batch.update(entryRef, { pos: entries[i].pos });
        }
        await batch.commit(batch);
        console.log('saved');
        await incrementSyncerVersion();
        return true;
    } catch (error) {
        console.log(error.message);
        return false;
    }

}

export async function deleteEntry(entryId, col) {
    console.log(entryId, col);

    const tagRef = doc(getFirestore(), col, entryId);
    await deleteDoc(tagRef);
    await incrementSyncerVersion();
}

async function incrementSyncerVersion() {
    await updateDoc(doc(getFirestore(), 'syncer', 'mk'), { version: increment(1) });
} 