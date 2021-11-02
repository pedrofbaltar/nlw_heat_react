import { useContext } from "react";
import { AuthCotext } from "../../contexts/auth";
import { VscGithubInverted, VscSignOut } from "react-icons/vsc";

import styles from "./styles.module.scss";

export function SendMessageForm() {
  const { user, signOut } = useContext(AuthCotext);

  return (
    <div className={styles.sendMessageFormWrapper}>
      <button onClick={signOut} className={styles.signOutButton}>
        <VscSignOut size={32} />
      </button>

      <header className={styles.userInformation}>
        <div className={styles.userImage}>
          <img src={user?.avatar_url} alt={user?.name} />
        </div>
        <strong className={styles.userName}>{user?.name}</strong>
        <span className={styles.userGithub}>
          <VscGithubInverted />
          {user?.login}
        </span>
      </header>

      <form className={styles.sendMessageForm}>
        <label htmlFor="message">Mensagem</label>
        <textarea
          name="message"
          id="message"
          placeholder="Qual sua expectativa para o evento?"
        />

        <button type="submit">Enviar mensagem</button>
      </form>
    </div>
  );
}
