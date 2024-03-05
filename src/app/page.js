"use client";
import { Amplify } from "aws-amplify";
import awsconfig from "../aws-exports";
import { Authenticator, withAuthenticator } from "@aws-amplify/ui-react";
import Createtodo from "./components/Createtodo/Createtodo";
import "@aws-amplify/ui-react/styles.css";
import { listTodos } from "@/graphql/queries";
import { useEffect, useState } from "react";
import { generateClient } from "aws-amplify/api";
import gql from "graphql-tag";

Amplify.configure(awsconfig);

function Home() {

  const [todos, setTodos] = useState([]);
 
  const client = generateClient();

//   useEffect(() => {
//     fetchTodos();
//   }, []);

//  async function fetchTodos() {
//   try {
//     setIsLoading(true)
//     const todoData = await client.graphql({
//       query: gql`
//       query ListTodos {
//         listTodos(filter: { createdBy: { eq: "${'syed.hassan2070@gmail.com'}" } }) {
//           items {
//             id
//             title
//             description
//           }
//         }
//       }
//     `
//     });
//     const todos = todoData.data.listTodos.items;
//     setTodos(todos);
//     setIsLoading(false)
//   } catch (err) {
//     setIsLoading(false)
//     console.log('error fetching todos:', err);
//   }
// }
console.log("todos",todos)
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div>
        <Createtodo signOut={signOut} todos={todos} user={user} />
       
        </div>
      )}
    </Authenticator>
  );
}
export default withAuthenticator(Home);
