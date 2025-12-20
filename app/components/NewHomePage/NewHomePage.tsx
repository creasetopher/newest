import type { Route } from "../../../.react-router/types/app/+types/NewHomePage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "NewHomePage" },
    { name: "description", content: "Welcome t!" },
  ];
}

export default function NewHomePage() {
    console.log("rendered newHomePage")
  return <>
    <h3>THIS IS A TEST PAGE</h3>
    <br/>
    <br/>
     <button className="favorite styled" onClick={buttonPress}>Button</button>

  </>;
}

function buttonPress() {
    console.log("button pressed")
}

