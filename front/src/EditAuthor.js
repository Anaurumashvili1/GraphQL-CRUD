import { useMutation } from "@apollo/client";
import { EDIT_AUTHOR } from "./queries";
import { useState, useEffect } from "react";

const EditAuthor = ({ setError }) => {
  const [name, setName] = useState("");
  const [born, setBorn] = useState();
  const [changeAuthor, result] = useMutation(EDIT_AUTHOR);

  const submit = (event) => {
    event.preventDefault();
    changeAuthor({ variables: { name, born } });
  };
  useEffect(() => {
    if (result.data && result.data.editAuthor === null) {
      setError("author not found");
    }
  }, [result.data]);

  return (
    <div>
      <h2>Edit Author</h2>

      <form onSubmit={submit}>
        <div>
          name{" "}
          <input
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
        </div>
        <div>
          Birth Year{" "}
          <input
            value={born}
            onChange={({ target }) => setBorn(target.value * 1)}
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditAuthor;
