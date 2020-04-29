
//Header with footerTitle and footerDescription
import { lunchGenerator } from './lunch-generator';

export default class Footer {
    constructor(footerTitle, lastUpdate) {
        this.footerTitle = footerTitle;
        this.lastUpdate = lastUpdate;
        this.lunchGenerator = lunchGenerator;
        this.addText();
   }
    addFooterText
}

export const footerContent = new Footer ('For lunch', lunchGenerator);
//  Variable with new footer
