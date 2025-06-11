import React, { useContext, createContext, useEffect } from "react";
import { supabase } from "@/src/utils";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [role, setRole] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  // ✅ Step 2: Get session on initial load
  useEffect(() => {
    const getSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      const session = data?.session;

      if (session) {
        const jwt = jwtDecode(session.access_token);
        setUser(session.user);
        setRole(jwt.user_role);
      }
      setLoading(false);
    };

    getSession();
  }, []);

  const login = async (username, password) => {
    console.log("going to login...");
    const { data, error } = await supabase.auth.signInWithPassword({
      email: username,
      password,
    });

    if (error) {
      console.error("Login error:", error.message);
      return false;
    }

    console.log("Login success:", data);
    // Your login logic
    setUser({ username });
    return true;
  };

  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Logout failed:", error.message);
    } else {
      setUser(null);
      setRole(null);
      console.log("Logged out successfully");
    }
  };

  const signup = async (email, password) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          username: "your_username",
        },
      },
    });

    if (error) {
      console.error("Sign up error:", error.message);
      return;
    }

    console.log("Signup success:", data);
  };

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (session) {
        const jwt = jwtDecode(session.access_token);
        setUser(session.user);
        setRole(jwt.user_role);
      } else {
        setUser(null);
        setRole(null);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, role, login, logout, signup, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
