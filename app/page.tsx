import Image from "next/image";
import FintocButton from "./components/FintocButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <FintocButton
        action="pay"
        buttonBackground="white"
        type=""
        valueProp="convenience_redirect"
        borderRadius="lg"
      />
    </main>
  );
}
