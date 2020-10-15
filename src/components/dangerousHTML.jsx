import React from "react";

export default function DangerousHTML ({ children, ...rest }) {
  return (
    <span
      { ...rest }
      dangerouslySetInnerHTML={{ __html: children }}
    />
  )
}