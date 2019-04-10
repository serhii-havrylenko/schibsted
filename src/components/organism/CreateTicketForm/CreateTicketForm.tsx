import CreateTicket from '#molecule/CreateTicket';
import { withdrawAmount } from '#store/actions';
import * as React from 'react';
import { connect } from 'react-redux';

import { getValueFromRef } from './utils';

export interface CreateTicketFormProps {
  onCreateClick: (payload: { title: string; description: string }) => void;
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

export default connect(
  undefined,
  { onCreateClick: withdrawAmount },
)(CreateTicketForm);
