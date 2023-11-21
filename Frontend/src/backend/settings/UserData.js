class UserData {
    constructor() {
        this.userData = {};
    }

    createUser(data) {
        this.userData.photos = data.photos;
        this.userData.termine = data.termine
        this.userData.blogs = data.blogs
        this.userData.rezensionen = data.rezensionen
        this.userData.zertifikate = data.zertifikate
        this.userData.gutscheine = data.gutscheine
        this.userData.gridPhotos = data.gridPhotos;

        // this.userData.photoMap = data.photos.reduce((entry, photo) => {
        //     entry[photo.name] = photo;
        //     return entry;
        // }, {});
    }

    getAll() {
        return this.userData;
    }

    getPhotos() {
        return this.userData.photos;
    }

    // getPhotoByName(name) {
    //     return this.userData.photoMap[name];
    // }

    getTermine() {
        return this.userData.termine;
    }

    getBlogs() {
        return this.userData.blogs;
    }

    getRezensionen() {
        return this.userData.rezensionen;
    }

    getZertifikate() {
        return this.userData.zertifikate;
    }

    getGutscheine() {
        return this.userData.gutscheine;
    }

    getGridPhotos() {
        return this.userData.gridPhotos;
    }

    setPhotos(photos) {
        this.userData.photos = photos;
    }

    setTermine(termine) {
        this.userData.termine = termine;
    }

    setBlogs(blogs) {
        this.userData.blogs = blogs;
    }

    setRezensionen(rezensionen) {
        this.userData.rezensionen = rezensionen;
    }

    setZertifikate(zertifikate) {
        this.userData.zertifikate = zertifikate;
    }

    setGutscheine(gutscheine) {
        this.userData.gutscheine = gutscheine;
    }

    setGridPhotos(gridPhotos) {
        this.userData.gridPhotos = gridPhotos;
    }
}

export default UserData;
