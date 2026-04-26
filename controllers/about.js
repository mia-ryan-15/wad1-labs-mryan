'use strict';
import logger from "../utils/logger.js";
import employees from '../models/employee.js';
import accounts from './accounts.js';

const about = {
    createView(request, response) {
        const loggedInUser = accounts.getCurrentUser(request);
        logger.info("About page loading!");

        if(loggedInUser){
            const viewData = {
            title: "This is the about page!",
            fullname: loggedInUser.firstName+' '+loggedInUser.lastName,
            employees: employees.getEmployeesInfo(),
            picture: loggedInUser.picture
        };

        response.render('about', viewData);
        }
        else response.redirect('/');
        
        
    },
};

export default about;