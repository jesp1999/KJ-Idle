import { useParams } from "react-router-dom"

export default function UserPage() {
    let params = useParams();
    return <h2>User {params.userName}</h2>;
  }