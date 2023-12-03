import InactiveLayout from "@/layouts/inactive";

function LoginLayout({ children }: { children: React.ReactNode }) {
  return <InactiveLayout>{children}</InactiveLayout>;
}

export default LoginLayout;
