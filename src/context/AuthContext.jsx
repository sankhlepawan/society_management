import React, { useContext, createContext, useEffect } from "react";
import { supabase } from "@/src/utils";
import { jwtDecode } from "jwt-decode";
import { ROLE_SP_ADMIN } from "@/src/constant";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [role, setRole] = React.useState(null);
  const [session, setSession] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    const getSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      const session = data?.session;

      if (session) {
        setUserSession(session);
      }
      setLoading(false);
    };

    getSession();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user || null);
        setLoading(false);
      },
    );

    return () => listener.subscription.unsubscribe();
  }, []);

  const setUserSession = (session) => {
    const jwt = jwtDecode(session.access_token);
    setUser(session.user);
    setRole(jwt.user_role);
    setSession({
      role: jwt.user_role,
      isUserActive: jwt.user_metadata.isActive,
      fullName: jwt.user_metadata.name,
      isAdmin: jwt.user_role == ROLE_SP_ADMIN,
    });
  };

  const login = async (username, password) => {
    console.log("going to login...");
    const { data, error } = await supabase.auth.signInWithPassword({
      email: username,
      password,
    });

    if (error) {
      console.error("Login error:", error.message);
      return error.message;
    }

    // console.log("Login success:", data);
    // Your login logic
    setUserSession(data.session);
    return "Login success";
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

  const signup = async ({ email, password, name, phone }) => {
    return await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          username: email,
          isActive: false,
          society_unit_id: 286, // this has to change on user input
          name,
          phone,
          society_id: 1, // for now defulat is 1
        },
      },
    });
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
      value={{ user, role, login, logout, signup, loading, session }}
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
