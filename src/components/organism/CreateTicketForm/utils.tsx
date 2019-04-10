import { getOr } from 'lodash/fp';

export const getValueFromRef = (getOr(null, 'current.value') as unknown) as (
  ref: React.RefObject<HTMLInputElement>,
) => string | null;
