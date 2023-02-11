import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";

const NotePage = () => {
  let { id } = useParams();
  let navigate = useNavigate();
  let [note, setNote] = useState(null);

  useEffect(() => {
    getNote();
  }, [id]);

  let getNote = async () => {
    let response = await fetch(`/api/notes/${id}`);
    let data = await response.json();
    setNote(data);
  };

  let updateNote = async () => {
    fetch(`/api/notes/${id}/update/`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(note)
    })
  }

  let handleSubmit = () => {
    updateNote()
    navigate('../');
  }

  return (
    <div className="note">
      <div className="note-header">
        <Link to="/">
          <ArrowLeft onClick={handleSubmit} />
        </Link>
      </div>
      <textarea
        defaultValue={note?.body}
        onChange={(e) => {
          setNote({ ...note, body: e.target.value });
        }}
      ></textarea>
    </div>
  );
};

export default NotePage;
