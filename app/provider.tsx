"use client";

import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useUser } from "@clerk/nextjs";
import { UserDetailContext } from "@/context/UserDetailContext";

const Provider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { user } = useUser();
  const [userDetail, setUserDetail] = useState<any>();

  // ✅ prevent multiple API calls on re-render
  const hasCreatedUser = useRef(false);

  const createNewUser = async () => {
    try {
      const result = await axios.post("/api/users");
      console.log("User synced:", result.data);
      setUserDetail(result.data?.user);
    } catch (err) {
      console.error("Error creating user:", err);
    }
  };

  useEffect(() => {
    if (user && !hasCreatedUser.current) {
      hasCreatedUser.current = true; // 🔒 lock it
      createNewUser();
    }
  }, [user]);

  return <div>
    <UserDetailContext.Provider value={{userDetail, setUserDetail}}>{children}</UserDetailContext.Provider></div>;
};

export default Provider;
