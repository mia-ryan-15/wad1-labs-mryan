'use strict';
import logger from "../utils/logger.js";
import employees from '../models/employee.js';

const about = {
    createView(request, response) {
        logger.info("About page loading!");
        
        const viewData = {
            title: "This is the about page!",
            employees: employees.getEmployeesInfo()
        };

        response.render('about', viewData);
    },
};

export default about;