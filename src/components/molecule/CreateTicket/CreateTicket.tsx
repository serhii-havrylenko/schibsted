import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import TextField from '@material-ui/core/TextField';
import * as React from 'react';

import Button from '#atom/Button';
import CardContentWrapper from '#atom/CardContentWrapper';
import { RequiredError } from './constants';

export interface CreateTicketProps {
  titleRef: React.RefObject<HTMLInputElement>;
  descriptionRef: React.RefObject<HTMLInputElement>;
  titleError?: boolean;
  descriptionError?: boolean;
  onCreateClick: () => void;
}

const CreateTicket: React.SFC<CreateTicketProps> = ({
  onCreateClick,
  titleRef,
  titleError,
  descriptionRef,
  descriptionError,
}) => (
  <Card>
    <CardContentWrapper>
      <TextField
        margin="dense"
        inputRef={titleRef}
        label="Title"
        required={true}
        type="text"
        error={titleError}
        helperText={titleError && RequiredError}
      />
      <TextField
        margin="dense"
        inputRef={descriptionRef}
        label="Description"
        multiline={true}
        required={true}
        rows={5}
        type="text"
        error={descriptionError}
        helperText={descriptionError && RequiredError}
      />
    </CardContentWrapper>
    <CardActions>
      <Button onClick={onCreateClick}>Create</Button>
    </CardActions>
  </Card>
);

export default CreateTicket;
