import { redirect } from "@remix-run/node";
import type { DataFunctionArgs, MetaFunction } from "@remix-run/node";
import { Form, Link } from "@remix-run/react";
import { sessionStorage } from "../utils/flash.server";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function action({ request }: DataFunctionArgs) {
  const formData = await request.formData();
  console.log(formData.get("message"));
  const session = await sessionStorage.getSession(
    request.headers.get("Cookie")
  );
  session.flash("flash", {
    message: formData.get("message") as string,
    type: "success",
  });
  return redirect("/", {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session),
    },
  });
}

export default function Index() {
  return (
    <div>
      <h1>Index</h1>
      <Link to="/page">Go to page</Link>
      <Link to="/">Go to index</Link>
      <Form method="POST">
        <input type="text" name="message" />
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
}
