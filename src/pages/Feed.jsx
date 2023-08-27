import { accountSignOut } from "../services/gAuth";

export default function Feed() {
  return (
    <div>
      Feed <button onClick={accountSignOut}>Sign out</button>
    </div>
  );
}
