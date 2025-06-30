import React, { useEffect, useState } from "react";
import "./Notification.css";

export default function Notification({ message }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return <div className="Notification">{message}</div>;
}
