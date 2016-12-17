import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
  name: 'Home_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Home_Page' });
  },
});

FlowRouter.route('/log', {
  name: 'Logged_In',
  action() {
    BlazeLayout.render('App_Body', { main: 'Logged_In' });
  },
});

FlowRouter.route('/my_projects', {
  name: 'My_Projects_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'My_Projects_Page' });
  },
});

FlowRouter.route('/new_project', {
  name: 'New_Project_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'New_Project_Page' });
  },
});

FlowRouter.route('/edit_project', {
  name: 'Edit_Project_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Edit_Project_Page' });
  },
});

FlowRouter.route('/project', {
  name: 'Project_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Project_Page' });
  },
});

FlowRouter.route('/search', {
  name: 'Search_Projects_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Search_Projects_Page' });
  },
});

FlowRouter.route('/collaborators', {
  name: 'Collaborators_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Collaborators_Page' });
  },
});

FlowRouter.route('/profile', {
  name: 'Profile_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Profile_Page' });
  },
});

FlowRouter.route('/edit_profile', {
  name: 'Edit_Profile_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Edit_Profile_Page' });
  },
});

FlowRouter.route('/list', {
  name: 'List_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'List_Stuff_Page' });
  },
});

FlowRouter.route('/add', {
  name: 'Add_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Add_Stuff_Page' });
  },
});

FlowRouter.route('/stuff/:_id', {
  name: 'Edit_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Edit_Stuff_Page' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_Body', { main: 'App_Not_Found' });
  },
};
