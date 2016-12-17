import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const Contacts = new Mongo.Collection('Contacts');

/**
 * Create the schema for Contacts
 */
export const ContactsSchema = new SimpleSchema({
  first: {
    label: 'First',
    type: String,
    optional: false,
    max: 200,
  },
  last: {
    label: 'Last',
    type: String,
    optional: false,
    max: 200,
  },
  address: {
    label: 'Address',
    type: String,
    optional: false,
    max: 200,
  },
  telephone: {
    label: 'Telephone',
    type: String,
    optional: false,
    max: 200,
  },
  email: {
    label: 'Email',
    type: String,
    optional: false,
    max: 200,
  },
});

Contacts.attachSchema(ContactsSchema);
