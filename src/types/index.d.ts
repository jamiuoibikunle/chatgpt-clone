interface Children {
  children: JSX.Element;
}

interface ChatButton {
  action: () => void;
  icon: JSX.Element;
  right?: JSX.Element;
  title: string;
}

type RootState = ReturnType<typeof store.getState>;

interface ChatCard {
  sender: string;
  text: string;
}
