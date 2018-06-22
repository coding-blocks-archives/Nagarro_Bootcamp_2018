"use strict";
class Fruit {
    constructor(taste) {
        this.taste = 'sour';
        this.isEdibleRaw = false;
        if (taste) {
            this.taste = taste;
        }
    }
}
let mango = {
    taste: 'sweet',
    isEdibleRaw: true
};
//# sourceMappingURL=interfaces.js.map