import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";

const NotePage = () => {
  let { id } = useParams();
  let navigate = useNavigate();
  let [note, setNote] = useState(null);

  useEffect(() => {
    getNote();
  }, [id]);

  let getNote = async () => {
    if (id === "new") return;
    let response = await fetch(`/api/notes/${id}`);
    let data = await response.json();
    setNote(data);
  };

  let createNote = async () => {
    fetch(`/api/notes/create/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
  };

  let updateNote = async () => {
    fetch(`/api/notes/${id}/update/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
  };

  let deleteNote = async () => {
    fetch(`/api/notes/${id}/delete/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    navigate("/");
  };

  let handleSubmit = () => {
    if (id !== "new") {
      if (note.body === "") {
        deleteNote();
      } else {
        updateNote();
      }
    } else {
      if (note !== null) {
        createNote();
      }
    }
    navigate("/");
  };

  let handleChange = (value) => {
    setNote({ ...note, body: value });
  };

  return (
    <div className="note">
      <div className="note-header">
        <ArrowLeft onClick={handleSubmit} />
        {id !== "new" ? (
          <button onClick={deleteNote}> Delete</button>
        ) : (
          <button onClick={handleSubmit}> Done</button>
        )}
      </div>
      <textarea
        value={note?.body}
        onChange={(e) => handleChange(e.target.value)}
      ></textarea>
    </div>
  );
};

export default NotePage;
