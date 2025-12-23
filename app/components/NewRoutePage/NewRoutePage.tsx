import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New" },
    { name: "description", content: "Welcome t!" },
  ];
}

export default function NewRoutePage() {
  return <div><b>THIS IS A NEW ROUTE </b></div>;
}
