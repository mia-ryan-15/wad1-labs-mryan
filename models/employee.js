'use strict'

import logger from '../utils/logger.js';
import JsonStore from './json-store.js';

const employees = {
    store: new JsonStore('./models/employee.json', {employee: {}}),
    collection: 'employees',
    array:"employees",
    
    getEmployeesInfo(){
        return this.store.findAll(this.collection);
    }
}

export default employees;