// src/app/page.tsx (server component)
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Home() {
  const token = (await cookies()).get("afn_token")?.value;
  if (!token) redirect("/login");
  return <div>…your dashboard…</div>;
}
