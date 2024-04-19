"use client";
import classes from "./css/style.module.css";

import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';


export default function Home() {

  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      router.push('/profile');
    }
  }, [router]);

  
  
  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (res.ok) {
        const { token } = await res.json();
        localStorage.setItem("token", token);
        window.location.href = "/profile";
      } else if (res.status === 401) {
        alert("Invalid username or password");
      } else {
        alert("An error occurred. Please try again later.");
      }
    } catch (error:any) {
      console.error(error);
      alert(error?.message);
    }
  };

  return (
    !localStorage.getItem('token') &&  <main className={`${classes.container}`}>
      <h1 className={`${classes.headerText}`}>
        Welcome to the Connexin Demo App!
      </h1>

      <form onSubmit={handleSubmit} className={`${classes.formstyle}`}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={`${classes.inputStyle}`}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={`${classes.inputStyle}`}
        />
        <button className={`${classes.loginButton}`} type="submit">
          Login
        </button>
      </form>
    </main>
  );
}
