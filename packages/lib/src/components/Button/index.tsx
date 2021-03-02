import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
}

function Button(props: ButtonProps): React.ReactElement {
  function handleClick() {
    console.log('Button clicked');
  }

  return (
    <button type="button" onClick={handleClick}>
      {props.children}
    </button>
  );
}

export default Button;
export { Button };
