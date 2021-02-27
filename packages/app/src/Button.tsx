import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = (props) => {
  function handleClick() {
    console.log('Button clicked');
  }

  return (
    <button type="button" onClick={handleClick}>
      {props.children}
    </button>
  );
};

export default Button;
