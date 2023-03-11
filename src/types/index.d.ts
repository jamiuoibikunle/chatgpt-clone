interface Children {
  children: JSX.Element;
}

interface ChatButton {
  action: () => void;
  icon: JSX.Element;
  right?: JSX.Element;
  title: string;
}
