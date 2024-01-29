import React, { useState } from 'react';

type useToggleProps = {
  initialValue: boolean;
};

type UseToggleReturn = {
  state: boolean;
  setState:React.Dispatch<React.SetStateAction<boolean>>;
  toggleState: () => void;
};

const useToggle = ({ initialValue }: useToggleProps): UseToggleReturn => {
  const [state, setState] = useState<boolean>(initialValue);

  const toggleState = () => {
    setState((prevState) => !prevState);
  };

  return {
    state,
    setState,
    toggleState,
  };
};

export default useToggle;