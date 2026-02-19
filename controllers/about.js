'use strict';
import logger from "../utils/logger.js";
import employee from '../models/employee.js';

const about = {
    createView(request, response) {
        logger.info("About page loading!");
        
        const viewData = {
            title: "This is the about page!",
            employee: employee.getEmployeeInfo()
        };

        response.render('about', viewData);
    },
};

export default about;