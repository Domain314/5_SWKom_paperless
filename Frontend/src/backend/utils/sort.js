export function sortEntries(entries) {
    const newEntries = [...entries];
    newEntries.sort((a, b) => a.pos - b.pos);
    newEntries.map((a, index) => a.pos = index);
    return newEntries;
}

export function setPosEntries(entries) {
    // const newEntries = [...entries];
    entries.map((a, index) => a.pos = index);

}