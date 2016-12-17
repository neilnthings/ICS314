import { Contacts } from '../../api/contacts/contacts.js';
import { _ } from 'meteor/underscore';

/**
 * A list of Contacts to pre-fill the Collection.
 * @type {*[]}
 */
const contactSeeds = [
  {
    first: 'Tony',
    last: 'Stark',
    address: '200 Park Avenue, New York City, NY',
    telephone: '203-555-1234',
    email: 'tony.stark@gmail.com',
  },
  {
    first: 'Steve',
    last: 'Rogers',
    address: '200 Park Avenue, New York City, NY',
    telephone: '203-555-4321',
    email: 'steve.rogers@gmail.com',
  },
  {
    first: 'Peter',
    last: 'Parker',
    address: '20 Ingram Street, Queens, NY',
    telephone: '203-555-8547',
    email: 'peter.parker@gmail.com',
  },
  {
    first: 'Sam',
    last: 'Wilson',
    address: '200 Park Avenue, New York City, NY',
    telephone: '203-555-0077',
    email: 'sam.wilson@gmail.com',
  },
];

/**
 * Initialize the Stuff collection if empty with seed data.
 */
if (Contacts.find().count() === 0) {
  _.each(contactSeeds, function seedContacts(stuff) {
    Contacts.insert(stuff);
  });
}
