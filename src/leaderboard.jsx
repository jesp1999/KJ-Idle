import { Outlet, Link } from "react-router-dom";
import { getUsers } from "./users"

export default function Leaderboard() {
    let users = getUsers();
    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Leaderboard</h2>
        {users.map((user) => (
            <Link
                style={{ display: "block", margin: "1rem 0" }}
                to={`/leaderboard/${user.name}`}
                key={user.id}
            >
                {user.name} -- {user.score}
            </Link>
        ))}
        <Outlet />
      </main>
    );
  }