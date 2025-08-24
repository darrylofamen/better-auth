import ForgotPassword from "@/components/auth/ForgotPassword";

const ForgotPasswordPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string }>;
}) => {
  const params = await searchParams;
  const email = params.email || "";

  return <ForgotPassword emailParam={email} />;
};

export default ForgotPasswordPage;
