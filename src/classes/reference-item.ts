abstract class ReferenceItem {
    // title: string;
    // year: number;

    // constructor(newTitle: string, newYear: number) {
    //     console.log('Creating ');
    //     this.title = newTitle;
    //     this.year = newYear;
    // }

    // Запись выше и ниже эквивалентны!!!
    private _publisher: string;
    #id: number;

    static department: string = 'Research';

    get publisher(): string {
        // eslint-disable-next-line no-underscore-dangle
        return this._publisher.toUpperCase();
    }

    set publisher(value: string) {
        // eslint-disable-next-line no-underscore-dangle
        this._publisher = value;
    }

    constructor(id: number, public title: string, protected year: number) {
        console.log('Creating ');
        this.#id = id;
    }

    // @timeout(5000)
    printItem(): void {
        console.log(`${this.title} was published in ${this.year}`);
        console.log(`Department: ${ReferenceItem.department}`);
    }

    getID(): number {
        return this.#id;
    }

    abstract printCitation(): void;
}

export { ReferenceItem };
