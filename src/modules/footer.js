
//Header with footerTitle and footerDescription
class Footer {
    constructor(footerTitle, lastUpdate) {
        this.footerTitle = footerTitle;
        this.lastUpdate = lastUpdate;
    }
}

//  Variable with new footer
export const footerText = new Footer('Random Lunch Generator', 'Last updated 04.14.2020');