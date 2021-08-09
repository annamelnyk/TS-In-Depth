import * as Interfaces from '../interfaces';
import { logParameter, sealed, format, writable, logMethod } from '../decorators';

@sealed('UniversityLibrarian')
// @logger()
class UniversityLibrarian implements Interfaces.Librarian, Interfaces.A {
    @format() name: string;
    // name: string;
    email: string;
    department: string;
    a: number = 1;

    // @logMethod()
    assistCustomer(@logParameter custName: string) {
        console.log('custName ', custName);
    }

    @writable(true)
    assistFaculty(): void {
        console.log('Assisting faculty');
    }

    @writable(false)
    teachCommunity(): void {
        console.log('Teaching community');
    }
}

export { UniversityLibrarian };
