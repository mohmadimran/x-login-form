import { useState } from "react";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (username  && password) {
      setIsLoggedIn(true); 
      console.log("username")

      setError(""); 
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
          height: "100vh",
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
              placeholder="username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="password"
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