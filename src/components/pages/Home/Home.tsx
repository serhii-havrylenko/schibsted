/**
 * Provides root component for '/home' and '/' page
 * @module #pages/Home
 */
import * as React from 'react';

import CreateTicketForm from '#organism/CreateTicketForm';

/**
 * Root component for '/home' and '/' page
 */
const Home: React.SFC = () => (
  <div>
    <CreateTicketForm />
  </div>
);

export default Home;
