import { Template } from 'meteor/templating';
import { Contacts } from '../../api/contacts/contacts.js';

Template.Home_Page.helpers({

  /**
   * @returns {*} All of the Stuff documents.
   */
  contactsList() {
    return Contacts.find();
  },
});

Template.Home_Page.onCreated(function onCreated() {
  this.autorun(() => {
    this.subscribe('Contacts');
  });
});
