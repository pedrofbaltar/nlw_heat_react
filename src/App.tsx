import { useContext } from "react";
import { AuthCotext } from "./contexts/auth";

import { LoginBox } from "./components/LoginBox";
import { MessageList } from "./components/MessageList";
import { SendMessageForm } from "./components/SendMessageForm";

import styles from "./App.module.scss";

export function App() {
  const { user } = useContext(AuthCotext);

  return (
    <main className={styles.contentWrapper}>
      <MessageList />
      {!!user ? <SendMessageForm /> : <LoginBox />}
    </main>
  );
}
