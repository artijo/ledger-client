import { Link } from "react-router-dom";
import { useEffect } from "react";
import {
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";
import { useUserStore } from "../store";
import { useCookies } from "react-cookie";
import { LoginWithGoogle } from "../helper";

export default function Header() {
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const user = useUserStore((state: any) => state.user);
  const setUser = useUserStore((state: any) => state.setUser);
  const Login = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential?.accessToken;
        const user: any = result.user;
        console.log(user.email);
        LoginWithGoogle(user.email)
          .then((login) => {
            //set expire 7 days
            console.log(login.token);
            setCookie("token", login.token, {
              expires: new Date(Date.now() + 604800000),
            });
            setUser(user);
          })
          .catch((error) => {
            console.log(error);
            alert("Login failed");
          });
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // const email = error.email;
        // const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(error);
      });
  };

  useEffect(() => {
    if (user) {
      if (!cookies.token) {
        LoginWithGoogle(user.email!)
          .then((login) => {
            //set expire 7 days
            console.log(login.token);
            setCookie("token", login.token, {
              expires: new Date(Date.now() + 604800000),
            });
            setUser(user);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  }, []);

  return (
    <header className="max-w-full h-20 flex items-center">
      <div className="container mx-auto flex items-center">
        <div>
          <h1>Ledgers</h1>
        </div>
        <nav className="ml-auto">
          <ul className="flex gap-4">
            {user ? (
              <>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/add">Add Ledger</Link>
                </li>
                <li>
                  <button
                    onClick={() => {
                      signOut(auth)
                        .then(() => {
                          removeCookie("token");
                          setUser(null);
                          window.location.reload();
                        })
                        .catch((error) => {
                          console.log(error);
                        });
                    }}
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li>
                <button onClick={Login}>Login</button>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}
