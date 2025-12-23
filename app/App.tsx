import React from 'react';
import ReactDOM from 'react-dom/client';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Amplify } from "aws-amplify";
import { getUrl } from "aws-amplify/storage";
import { uploadData } from "aws-amplify/storage";
import { generateClient } from "aws-amplify/data";
import NewHomePage from "app/components/NewHomePage/NewHomePage"
import outputs from "amplify_outputs.json";



Amplify.configure(outputs);
const client = generateClient({
  authMode: "userPool",
});

export default function App() {
    return <>
    <React.StrictMode>
        <Authenticator/>
        
    </React.StrictMode>
  </>
}
// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <Authenticator>
//       <NewHomePage />
//     </Authenticator>
//   </React.StrictMode>
