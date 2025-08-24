import ResetPassword from "@/components/auth/ResetPassword";

const ResetPasswordPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string }>;
}) => {
  const params = await searchParams;
  const token = params.token || "";

  return <ResetPassword token={token} />;
};

export default ResetPasswordPage;
