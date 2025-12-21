import { type ClientSchema, a, defineData } from '@aws-amplify/backend';
import { Amplify } from "aws-amplify";
import { getUrl } from "aws-amplify/storage";
import { uploadData } from "aws-amplify/storage";
import { generateClient } from "aws-amplify/data";

// import outputs from "../../amplify_outputs.json";

/*== STEP 1 ===============================================================
The section below creates a Feedback database table with a "content" field. The authorization rule below
specifies that any unauthenticated user can "create", "read", "update" any "Feedback" records.
=========================================================================*/
const schema = a.schema({
  Feedback: a
    .model({
      content: a.string(),
    })
    .authorization((allow) => [allow.guest()]),
});



export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'identityPool',
  },
});




// Amplify.configure(outputs);
// const client = generateClient({
//   authMode: "userPool",
// });

/*== STEP 3 ===============================================================
Fetch records from the database and use them in your frontend component.
(THIS SNIPPET WILL ONLY WORK IN THE FRONTEND CODE FILE.)
=========================================================================*/

/* For example, in a React component, you can use this snippet in your
  function's RETURN statement */
// const { data: todos } = await client.models.Todo.list()

// return <ul>{todos.map(todo => <li key={todo.id}>{todo.content}</li>)}</ul>
