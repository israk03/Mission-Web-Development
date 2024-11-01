import React from "react";

export default function User({ user }) {
  const { name, email, id } = user;
  return (
    <div>
      <h2 className="text-4xl">{name}</h2>
      <p className="text-2xl">{email}</p>
    </div>
  );
}
