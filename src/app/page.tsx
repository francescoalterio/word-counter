import Counter from "@/components/Counter";

export default function Home() {
  return (
    <main className=" max-w-screen-xl mx-auto">
      <h1 className=" font-bold text-2xl my-5">Word Counter</h1>
      <Counter />
    </main>
  );
}
