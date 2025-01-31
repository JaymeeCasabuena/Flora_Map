import Logo from "../logo/logo";
import Link from "next/link";
import { logOut } from "@/app/actions/auth-actions";

type NavProps = {
  withLogout: boolean;
  isSignUpActive?: boolean;
  toggle?: () => void;
};

const Nav = ({ withLogout, isSignUpActive, toggle }: NavProps) => {
  const handleLogout = async () => {
    await logOut();
  };

  return (
    <div className="flex flex-row justify-between items-center p-5">
      <Link href={"/"}>
        <Logo />
      </Link>
      {withLogout ? (
        <button
          className="btn w-40 px-8 py-3 mt-5 rounded-full font-semibold text-white"
          onClick={handleLogout}
        >
          Log out
        </button>
      ) : (
        <button
          className="btn w-40 px-8 py-3 mt-5 rounded-full font-semibold text-white"
          onClick={() => toggle?.()}
        >
          {isSignUpActive ? "Login" : "Sign up"}
        </button>
      )}
    </div>
  );
};

export default Nav;
