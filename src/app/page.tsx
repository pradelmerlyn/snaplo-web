import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import MainHeader from "@/component/header/MainHeader";
import MainContent from "@/component/content/MainContent";

export default async function Home() {
  const token = (await cookies()).get("afn_token")?.value;
  
  if (!token) {
    redirect("/login");
  }

  return (
    <main
      style={{
        padding: "16px",
        maxWidth: "100%",
        overflow: "hidden",
        backgroundColor: "#ffffff",
        minHeight: "100vh",
      }}
    >
      <MainHeader />
      <MainContent />
    </main>
  );
}
