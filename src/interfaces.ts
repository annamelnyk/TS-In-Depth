import { Category } from './enums';

interface A {
    a: number;
}

interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    pages?: number;
    markDamaged?: DamageLogger;
}

interface DamageLogger {
    (reason: string): void;
}

interface Person {
    name: string;
    email: string;
}

interface Person2 {
    name: string;
    email: string | null;
}

interface Author extends Person {
    numBooksPublished: number;
}

interface Librarian extends Person {
    department: string;
    assistCustomer: (custName: string) => void;
}

interface Magazine {
    title: string;
    publisher: string;
}

interface ShelfItem {
    title: string;
}

interface LibMgrCallback {
    (err: Error, titles: Array<string>): void;
}

interface Callback<T> {
    (err: Error, data: T): void;
}

export {
    A,
    Author,
    Person,
    Person2,
    Book,
    Librarian,
    DamageLogger as Logger,
    Magazine,
    ShelfItem,
    LibMgrCallback,
    Callback,
};
