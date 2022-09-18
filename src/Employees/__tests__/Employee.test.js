import { describe, expect, it } from '@jest/globals';
import Employee from '../Employee';

describe('Employee', () => {
    it('should be able to create default employee', () => {
        const employee = new Employee();

        expect(employee.firstName).toEqual('');
        expect(employee.lastName).toEqual('');
    });

    it('should be able to create employee', () => {
        const firstName = 'First';
        const lastName = 'Last';

        const employee = new Employee(firstName, lastName);

        expect(employee.firstName).toEqual(firstName);
        expect(employee.lastName).toEqual(lastName);
    });
});
