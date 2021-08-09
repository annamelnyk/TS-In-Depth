import {Category} from './enums';
import type {Library} from './classes';
import {RefBook, Shelf, UL,} from './classes';
import {Author, Book, Librarian, Logger, Magazine,} from './interfaces';
import {BookRequiredFields, CreateCustomerFunctionType, PersonBook, UpdatedBook} from './types';
import {
    bookTitleTransform,
    calcTotalPages,
    checkoutBooks,
    createCustomer,
    createCustomerID,
    getAllBooks,
    getBookAuthorByIndex,
    getBookByID,
    getBooksByCategory,
    getBookTitlesByCategory,
    getProperty,
    getTitles,
    logBookTitles,
    logCategorySearch,
    logFirstAvailable,
    printBook,
    printRefBook,
    showHello,
    getBooksByCategoryPromise,
    logSearchResults,
} from './functions';

// 02.01
/* eslint-disable no-redeclare */
/* eslint-disable no-underscore-dangle */
showHello('greeting', 'TypeScript');
logFirstAvailable(getAllBooks());
// logBookTitles(getBookTitlesByCategory(Category.JavaScript));

console.log(getBookAuthorByIndex(1));
console.log(calcTotalPages());
let a = 'my name is';

// 03.01
console.log(createCustomerID('Ann', 10));
let idGenerator: (name: string, id: number) => string;
idGenerator = (name: string, id: number) => `${id}-${name}`;
idGenerator = createCustomerID;
console.log(idGenerator('Boris', 20));

// 03.02
createCustomer('Anna', 20, 'NY');
createCustomer('Anna', 20);
createCustomer('Anna');
createCustomer('Anna', void 1, 'Kyiv');

console.log(getBookTitlesByCategory());
console.log(logFirstAvailable());
console.log(getBookByID(1));

const myBooks = checkoutBooks('Ann', 1, 2, 4);
console.log('myBooks ', myBooks);

getTitles(true);
getTitles(false);
getTitles(2, true);

const result = bookTitleTransform(getAllBooks()[1].title);
console.log(result);
// const result2 = bookTitleTransform(100);
// console.log(result2);

const myBook: Book = {
    id: 5,
    title: 'Colors, Backgrounds, and Gradients',
    author: 'Eric A. Meyer',
    available: true,
    category: Category.CSS,
    pages: 200,
    markDamaged: (reason: string) => console.log(`Damaged: ${reason}`)
};

printBook(myBook);
myBook.markDamaged('missing back cover');

const logDamage: Logger = (reason: string|number) => console.log(`Damaged: ${reason}`);
logDamage('miss');

// 04.03
const favoriteAuthor: Author = {
    name: 'Anna',
    email: 'anna@example.com',
    numBooksPublished: 1
};

const favoriteLibrarian1: Librarian = {
    name: 'Boris',
    email: 'boris@example.com',
    department: 'Classical Literature',
    assistCustomer: (customer: string) => console.log(customer),
};

const offer: any = {
    book: {
        title: 'Essential TypeScript',
    },
};

console.log(offer.magazine);
console.log(offer.magazine?.getTitle());
console.log(offer.book.getTitle?.());
console.log(offer.book.authors?.[0]);
console.log(offer.book['titles']?.());

// a.	offer.magazine
// b.	offer.magazine.getTitle()
// c.	offer.book.getTitle()
// d.	offer.book.authors[0]

// 04.05
getProperty(myBook, 'title');
getProperty(myBook, 'markDamaged');

// const ref: ReferenceItem = new ReferenceItem(1, 'TypeScript', 2021);
// console.log(ref);
// ref.printItem();

const refBook = new RefBook(1, 'TypeScript', 2021);
console.log(refBook);
refBook.printItem();
refBook.publisher = 'abc group';
console.log(refBook.publisher);
refBook.printCitation();
console.log(refBook.getID());

const favoriteLibrarian = new UL.UniversityLibrarian();
favoriteLibrarian.name = 'Anna';
favoriteLibrarian.assistCustomer('Boris');
favoriteLibrarian.a = 2;

// 05.05
const personBook: PersonBook = {
    name: 'Anna',
    email: null,
    id: 1,
    author: 'Ann',
    available: false,
    category: Category.Angular,
    title: 'Use Angular anywhere'
};

// 06.03
const refBook1 = new RefBook(1, 'TypeScript', 2021, 2);
printRefBook(refBook1);
// printRefBook(123);

const universiteLibrarian = new UL.UniversityLibrarian();
// printRefBook(universiteLibrarian);

const flag = true;

if (flag) {
    // dymanic import
    const module = await import('./classes');

    const reader = new module.Reader();
    console.log('reader ', reader);
    reader.name = 'Reader';
    reader.take(getAllBooks()[2]);

    // или
    import('./classes')
        .then((module) => {
            const reader = new module.Reader();
            console.log('reader ', reader);
            reader.name = 'Reader';
            reader.take(getAllBooks()[2]);
        });
}

// 06.06
// let l: Library = new Library();
let l: Library = {
    id: 1,
    name: 'Anna',
    address: 'address'
};

// 07.01
const inventory: Array<Book> = [
    { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
    { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
    { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
    { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
];

// const res = purge<Book>(inventory);
// console.log(res);
// const res1 = purge<number>([1, 2, 3]);
// console.log(res1);

// 07.02
const bookShelf = new Shelf<Book>();
inventory.forEach(book => bookShelf.add(book));
console.log(bookShelf.getFirst().title);

const magazines: Magazine[] = [
    { title: 'Programming Language Monthly', publisher: 'Code Mags' },
    { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
    { title: 'Five Points', publisher: 'GSU' }
];

const magazineShelf = new Shelf<Magazine>();
// const magazineShelf2 = new Shelf<number>();
magazines.forEach(mag => magazineShelf.add(mag));
console.log(magazineShelf.getFirst().title);
magazineShelf.printTitles();
console.log(magazineShelf.find('Five Points'));

console.log(getProperty(getAllBooks()[0], 'title'));
console.log(getProperty(121, 'toString'));

// 07.04
const book: BookRequiredFields = {
    id: 1,
    author: 'Anna',
    available: false,
    category: Category.Angular,
    markDamaged: null,
    pages: 100,
    title: 'Unknown',
};

const updBook: UpdatedBook = {
    id: 2,
    author: 'Ann'
};

const params: Parameters<CreateCustomerFunctionType> = ['Anna'];
createCustomer(...params);

// 08.01
const unLib = new UL.UniversityLibrarian();
unLib.a = 1;
// UL.UniversityLibrarian['c'] = 2;
// Object.getPrototypeOf(unLib)['d'] = 3;
console.log(unLib);

unLib.name = 'Anna';
unLib['printLibrerian']?.();
console.log(unLib);

// 08.03
const unLib1 = new UL.UniversityLibrarian();
// unLib1.assistFaculty = null;
// unLib1.teachCommunity = null;
console.log(unLib1);

// 08.04
const enc = new RefBook(1, 'TypeScript', 2021, 2);
enc.prinItem();

// 08.05
const unLib2 = new UL.UniversityLibrarian();
console.log(unLib2);
unLib2.name = 'Anna';
unLib2.assistCustomer('Boris');
console.log(unLib2.name);

// 08.07
const enc1 = new RefBook(1, 'TypeScript', 2021, 2);
enc1.copies = 2.5;
console.log(enc1);

// 09.01
console.log('Begin');
getBooksByCategory(Category.JavaScript, logCategorySearch);
getBooksByCategory(Category.Software, logCategorySearch);
console.log('End');

// 09.02
console.log('Begin');
getBooksByCategoryPromise(Category.JavaScript)
    .then(titles => {
        console.log(titles);

        return titles.length;
    })
    .then(n => console.log(n))
    .catch(err => console.log(err));
getBooksByCategoryPromise(Category.Software)
    .then(titles => {
        console.log(titles);

        return titles.length;
    })
    .then(n => console.log(n))
    .catch(err => console.log(err));
console.log('End');

// 09.03
console.log('Begin');
logSearchResults(Category.TypeScript);
logSearchResults(Category.Software)
    .catch(err => console.log(err));
console.log('End');
