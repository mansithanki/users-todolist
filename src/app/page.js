import Image from 'next/image'
// import {make as Demo} from './Demo.bs'
// import {make as Users} from './Users.bs'
import Link from 'next/link';
// import UsersList from './UsersList'
// import {make as Todo} from './Todo.bs'
import './globals.css';
export default function Home() {
  return(
    
    <div>
      <h1>Welcome to Page</h1>
      <Link href="/userslist">
        Go to Users List
      </Link>
      <br />
      <Link href="/todo">
        Go to Todo
      </Link>
    </div>
    
  )
 }

// import Image from 'next/image';
// import Link from 'next/link';
// import UsersList from './UsersList';
// import {make as Todo} from './Todo.bs';
// import './globals.css';

// export default function Home() {
//   return (
//     <div>
//       <nav>
//         <ul>
//           <li>
//             <Link href={`/userslist`}>UsersList</Link>
//           </li>
//           <li>
//             <Link href={`/todo`}>Todo</Link>
//           </li>
//         </ul>
//       </nav>
      
//       <UsersList />
//       <Todo />
//     </div>
//   );
// }
