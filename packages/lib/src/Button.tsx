import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
}

function ButtonImpl(props: ButtonProps) {
  function handleClick() {
    console.log('Button clicked');
  }

  return (
    <button type="button" onClick={handleClick}>
      {props.children}
    </button>
  );
};

const Button: React.FC<ButtonProps> = ButtonImpl;

export default Button;
