abstract class Tree {
    #berry: string;
    #leave: string;

    public constructor(berry: string, leave: string) {
        this.#berry = berry;
        this.#leave = leave;
    }
    public getCharacteristic(): { berry: string; leave: string } {
        return {
            berry: this.#berry,
            leave: this.#leave
        };
    }
    public abstract isBerryUsable(): boolean;
}

export class Lemon extends Tree {
    public taste: string;

    public constructor(berry: string, leave: string, taste: string) {
        super(berry, leave);
        this.taste = taste;
    }

    public isBerryUsable(): boolean {
        return this.taste === 'sour';
    }
}
