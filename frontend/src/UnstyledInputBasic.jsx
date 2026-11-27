import * as React from 'react';
import { Input as BaseInput } from '@mui/base/Input';
import { styled } from '@mui/system';

const Input = React.forwardRef(function CustomInput(props, ref) {
  return <BaseInput slots={{ input: InputElement }} {...props} ref={ref} />;
});

export default function UnstyledInputBasic() {
  return <Input aria-label="Demo input" placeholder="Type something…" />;
}

const InputElement = styled('input')(
  () => `
  width: 320px;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 2;
  padding: 8px 12px;
  border-radius: 8px;
  color: #fff;
  background:  #000;
    border:none
  /* firefox */
  &:focus-visible {
    outline: 0;
  }
`,
);
