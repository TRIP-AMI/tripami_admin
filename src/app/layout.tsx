import type { Metadata } from "next";
import "@/styles/globals.scss";
import StyledComponentsRegistry from "@/lib/AntdRegistry";
import { ConfigProvider } from "antd";
import theme from "@/lib/theme/themeConfig";

export const metadata: Metadata = {
  title: "TRIPAMI",
  description: "TRIPAMI admin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <StyledComponentsRegistry>
          <ConfigProvider theme={theme}>{children}</ConfigProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
