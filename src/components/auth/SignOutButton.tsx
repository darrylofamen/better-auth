import { signOut } from "@/lib/auth/auth-client";
import { useRouter } from "next/navigation";
import { Icons } from "../ui/icons";

const SignOutButton = () => {
  const router = useRouter();

  const handleClick = async () => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login");
        },
      },
    });
  };

  return (
    <div
      onClick={handleClick}
      className="flex items-center justify-between w-18 cursor-pointer"
    >
      <Icons.logOut />
      Log out
    </div>
  );
};

export default SignOutButton;
