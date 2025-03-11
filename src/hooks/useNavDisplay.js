import { useState } from "react";

export default function useNavDisplay() {
  const [display, setDisplay] = useState(false);

  const close = () => setDisplay(false);
  const open = () => setDisplay(true);

  return { display, open, close };
}
