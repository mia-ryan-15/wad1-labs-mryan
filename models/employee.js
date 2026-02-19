'use strict'

import logger from '../utils/logger.js';
import JsonStore from './json-store.js';

const employee = {
    employee: new JsonStore('./models/employee.json', {info: {}}),
    collection: 'info',
    array: 'employee',

    getEmployeeInfo(){
        return this.employee.findAll(this.collection);
    }
}

export default employee;