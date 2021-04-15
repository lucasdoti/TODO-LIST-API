import {
    addNewGroup,
    getGroups,
    getSpecificGroup,
    deleteGroup,
    getGroupItems,
    addNewTask,
    getSpecificTask,
    getalltask,
    deleteTask
} from '../controllers/todoController';

const routes = (app) => {
    app.route('/groups').get(getGroups);

    app.route('/group/:groupId').get(getSpecificGroup).delete(deleteGroup);

    app.route('/creategroup').post(addNewGroup);   /*POST /creategroup     request body: {title: groupname }*/

    app.route('/grouptasks/:groupId').get(getGroupItems);

/*Task Routes */
    app.route('/tasks').get(getalltask);

    app.route('/task/:taskId').get(getSpecificTask);

    app.route('/create').post(addNewTask);    /*requst body: {title} */

    app.route('/remove/:groupId/:taskId').delete(deleteTask);

}

export default routes;
