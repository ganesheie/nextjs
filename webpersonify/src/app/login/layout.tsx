import type { Metadata } from "next";
import LoginStaticFiles from "../components/LoginStaticFiles";

export const metadata: Metadata = {
  title: "WebPersonify | Login",
  description: "User login",
};

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {LoginStaticFiles.map((file) =>
          file.type === "js" ? (
            <script key={file.id} src={file.src} />
          ) : (
            <link key={file.id} href={file.src} rel="stylesheet" />
          )
        )}
      </head>
      <body
        style={{
          backgroundImage:
            "url(https://webpersonify-cdn.s3.amazonaws.com/static/themes/keen/assets/misc/bg_1.jpg)",
        }}
        className="kt-login-v1--enabled kt-quick-panel--right kt-demo-panel--right kt-offcanvas-panel--right kt-header--fixed kt-header-mobile--fixed kt-subheader--enabled kt-subheader--transparent kt-aside--enabled kt-aside--fixed kt-page--loading"
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
