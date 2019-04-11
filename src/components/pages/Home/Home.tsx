/**
 * Provides root component for '/home' and '/' page
 * @module #pages/Home
 */
import * as React from 'react';

import CreateTicketForm from '#organism/CreateTicketForm';
import Tickets from '#organism/Tickets';

/**
 * Root component for '/home' and '/' page
 */
const Home: React.SFC = () => (
  <div>
    <CreateTicketForm />
    <Tickets />
  </div>
);

export default Home;
