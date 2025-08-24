import ResetPassword from "@/components/auth/ResetPassword";

const ResetPasswordPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const params = await searchParams;
  const token = params.token || "";

  return <ResetPassword token={token} />;
};

export default ResetPasswordPage;
