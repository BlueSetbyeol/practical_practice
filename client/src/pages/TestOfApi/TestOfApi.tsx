import "./TestOfApi.css";
import { useState } from "react";

interface getBookProps {
  key: string;
  name: string;
  subject_type: string;
  work_count: number;
  works: { key: string; title: string; subject: string[] }[];
}

export default function TestOfApi() {
  const [theme, setTheme] = useState<string>();
  const [getBook, setGetBook] = useState<getBookProps>();

  const handleClick = () => {
    fetch(`https://openlibrary.org/subjects/${theme}.json?details=true`)
      .then((resp) => {
        if (resp?.ok) {
          /* or resp.status == 200 to know and treat what kind of respond it is */
          return resp.json();
        }
        return null;
        /* for resp.status == 404 or 500 for exemple */
      })
      .then((data) => setGetBook(data))
      .catch((err) => console.error(err));
  };

  return (
    <>
      <h1 className="book-title">An API about Book</h1>
      <section className="book-question">
        <label>
          <p>What subject of book are you looking for ?</p>
          <div>
            <input
              type="formAction"
              className="type_book"
              onChange={(e) => {
                setTheme(e.target.value);
              }}
            />
            <button type="button" onClick={handleClick} className="book-button">
              Submit
            </button>
          </div>
        </label>
      </section>
      <section className="book-suggestion">
        {/* to manage different case of response : undefined, null or without any book and lastly result to be given */}
        {getBook === undefined ? (
          <p>----------------</p>
        ) : getBook === null || getBook.works.length === 0 ? (
          <p className="book-result">
            There is no result for your requested term : {theme}
          </p>
        ) : (
          <div className="book-result">
            <h2>Here is your resulting results :</h2>
            <h3>Theme : {theme}</h3>
          </div>
        )}
        <div className="book-list">
          {getBook !== undefined &&
          getBook !== null &&
          getBook.works.length > 0 ? (
            getBook.works.map((work) => <p key={work.key}>{work.title}</p>)
          ) : (
            <p className="book-demand">Please select your book's type.</p>
          )}
        </div>
      </section>
    </>
  );
}
