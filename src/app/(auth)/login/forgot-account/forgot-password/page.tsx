import ForgotPassword from "@/components/auth/ForgotPassword";

const ForgotPasswordPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const params = await searchParams;
  const email = params.email || "";

  return <ForgotPassword emailParam={email} />;
};

export default ForgotPasswordPage;
