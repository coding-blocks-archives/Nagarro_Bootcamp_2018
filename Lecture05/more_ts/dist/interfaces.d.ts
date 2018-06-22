interface Food {
    taste: string;
    isEdibleRaw: boolean;
}
declare class Fruit implements Food {
    taste: string;
    isEdibleRaw: boolean;
    constructor(taste?: string);
}
declare let mango: Food;
