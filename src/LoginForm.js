import { useState } from "react";

export default function LoginForm() {
  const [isName, setIsName] = useState("");
  const [isPassword, setIsPassword] = useState("");
  const [isError, setIsError] = useState("");
  const [isShow, setIsShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isName === "user" && isPassword === "password") {
      setIsShow(true);
      setIsError("");
    } else {
      setIsShow(false);
      setIsError("Invalid username or password");
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Login Page</h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        {isShow ? (
          <h1>{`Welcome,${isName}!`}</h1>
        ) : (
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Username</label>
            <input
              id="name"
              type="text"
              placeholder="username"
              required
              value={isName}
              onChange={(e) => setIsName(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="password"
              value={isPassword}
              onChange={(e) => setIsPassword(e.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
      {isError && isError}
    </div>
  );
}
