import * as React from 'react';

import CreateTicket from '#molecule/CreateTicket';
import { CREATE_TICKET_QUERY } from '#queries';

import { CreateTicketQueryVariables } from '#components/types';
import { getValueFromRef, updateCacheWithNew } from '#components/utils';
import { CreateTicketQuery } from './CreateTicketQuery';
import { createHandler } from './utils';

export interface CreateTicketFormProps {
  onCreateClick: (payload: CreateTicketQueryVariables) => void;
}

export interface CreateTicketFormState {
  titleError: boolean;
  descriptionError: boolean;
}

export class CreateTicketForm extends React.Component<
  CreateTicketFormProps,
  CreateTicketFormState
> {
  public state = {
    titleError: false,
    descriptionError: false,
  };
  private titleRef: React.RefObject<HTMLInputElement>;
  private descriptionRef: React.RefObject<HTMLInputElement>;

  constructor(props: CreateTicketFormProps) {
    super(props);
    this.titleRef = React.createRef();
    this.descriptionRef = React.createRef();
  }

  public render() {
    const { titleError, descriptionError } = this.state;

    return (
      <CreateTicket
        titleRef={this.titleRef}
        descriptionRef={this.descriptionRef}
        onCreateClick={this.onCreate}
        titleError={titleError}
        descriptionError={descriptionError}
      />
    );
  }

  private onCreate = () => {
    const title = getValueFromRef(this.titleRef);
    const description = getValueFromRef(this.descriptionRef);

    this.setState({
      titleError: !title,
      descriptionError: !description,
    });

    if (!title || !description) {
      return;
    }

    this.props.onCreateClick({ title, description });
  };
}

export default () => (
  <CreateTicketQuery mutation={CREATE_TICKET_QUERY} update={updateCacheWithNew}>
    {(create) => <CreateTicketForm onCreateClick={createHandler(create)} />}
  </CreateTicketQuery>
);
