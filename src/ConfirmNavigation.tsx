import React, { FC, useState } from "react";
import { Prompt, useHistory } from "react-router-dom";

export interface ChildData {
  onCancel: () => void;
  onConfirm: () => void;
}
interface ComponentProps {
  when?: boolean;
  children: (data: ChildData) => React.ReactNode;
}

const ConfirmNavigation: FC<ComponentProps> = ({ when = true, children }) => {
  const history = useHistory();
  const [nextLocation, setNextLocation] = useState<string | null>(null);

  const onCancel = () => {
    setNextLocation(null);
  };

  const onConfirm = () => {
    if (nextLocation) {
      history.push(nextLocation);
      setNextLocation(null);
    }
  };

  const handleBlockedNavigation = (location: any) => {
    setNextLocation(location);
    return false;
  };

  return (
    <>
      <Prompt when={when && !nextLocation} message={handleBlockedNavigation} />
      {nextLocation && children({ onCancel, onConfirm })}
    </>
  );
};
export default ConfirmNavigation;
