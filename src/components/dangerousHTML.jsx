import React from "react";

export default function DangerousHTML ({ children }) {
  return (
    <span
      dangerouslySetInnerHTML={{ __html: children }}
    />
  )
}