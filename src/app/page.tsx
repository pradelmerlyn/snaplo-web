import MainHeader from "@/component/header/MainHeader";
import MainContent from "@/component/content/MainContent";

export default function Home() {
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
