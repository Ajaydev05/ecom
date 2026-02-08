import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const signup = async () => {
    try {
      // ✅ USE NGINX (NOT localhost:5000)
      await axios.post("/api/signup", form);

      alert("Signup successful! Please login.");
      navigate("/login");
    } catch (err) {
      alert("Signup failed");
      console.error(err);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Create Account</h2>

      <input
        name="email"
        type="email"
        placeholder="Email"
        onChange={handleChange}
        style={styles.input}
      />

      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleChange}
        style={styles.input}
      />

      <button onClick={signup} style={styles.button}>
        Sign Up
      </button>

      <p>
        Already have an account?{" "}
        <span style={styles.link} onClick={() => navigate("/login")}>
          Login
        </span>
      </p>
    </div>
  );
}

const styles = {
  container: {
    width: "350px",
    margin: "100px auto",
    padding: "30px",
    textAlign: "center",
    border: "1px solid #ddd",
    borderRadius: "10px",
    background: "#fff"
  },
  input: {
    width: "100%",
    padding: "12px",
    margin: "10px 0",
    fontSize: "16px"
  },
  button: {
    width: "100%",
    padding: "12px",
    fontSize: "16px",
    background: "#222",
    color: "#fff",
    border: "none",
    cursor: "pointer"
  },
  link: {
    color: "blue",
    cursor: "pointer"
  }
};
