class Header {

    loadHeader() {
        // Creata a new instance
        const userProfile = new UserProfile();

        // Invoke the method (component)
        userProfile.loadUserProfile();

        // Output loading status
        console.log('Header component is loaded...')
    }

}

export { Header };

//Header with pageTitle and pageDescription
class Header {
    constructor(pageTitle, pageDescription) {
        this.pageTitle = pageTitle;
        this.pageDescription = pageDescription;
    }
}

// Variable with new header
export const headerText = new Header('What/s in your lunch?');
