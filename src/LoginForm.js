import { useState } from "react";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Condition: Only "user" as username and "password" as password is allowed
    if (username === "user" && password === "password") {
      setIsLoggedIn(true);
      setError(""); // Clear any previous errors
      console.log(username);
    } else {
      setIsLoggedIn(false);
      setError("Invalid username or password");
    }
  };

  return (
    <div>
      <header style={{ textAlign: "center" }}>
        <h1>Login Page</h1>
      </header>
      <main
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        {isLoggedIn ? (
          <h1>{`Welcome, ${username}!`}</h1>
        ) : (
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Username</label>
            <input
              id="name"
              type="text"
              placeholder="Enter username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
        )}
      </main>
      {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
    </div>
  );
}
