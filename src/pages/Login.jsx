import { router } from "../routes";
import { signInWithGoogle } from "../services/gAuth";

export default function Login() {
  const loginWithGoogle = async () => {
    const user = await signInWithGoogle();

    if (!user) return alert("Login failed");

    router.navigate("/");
    console.log(user);
  };

  return (
    <div>
      <h2>Login</h2>
      <form action="">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
      </form>

      <button>Login</button>

      <button onClick={loginWithGoogle}>Google Login</button>

      <h2>Register</h2>
      <form action="">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
      </form>

      <button>Register</button>
    </div>
  );
}
