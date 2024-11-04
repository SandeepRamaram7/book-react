import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function BookList(){
  const baseUrl = "http://localhost:3000/BOOKS";
    // const navigate = useNavigate(); // created for programatic navigation
    const [searchStack, setSearchStack] = useState("");
    const [allBooks, setAllBooks] = useState([]); 
    const  navigate = useNavigate();
      
    const [filteredAllBook, setFilteredAllBook] = useState([]);

    function loadAllBooks() {
      fetch(baseUrl)
        .then((res) => res.json())
        .then((data) => {
          setAllBooks([...data]);
          setFilteredAllBook([...data]);
          console.log(data);
        });
    }

    useEffect(() => {
      loadAllBooks();
    }, []);


    function handleView(bookId) {
      console.log(bookId);
      navigate("/book-view/"+bookId);
      // navigate to another component with route path /training/cohort-view
      // here we have to use programatic navigation with the help of useNavigate() hook
      // navigate("/training/cohort-view/" + bookId, { state: getBook[0] });
    }

    function handleEdit(bookId) {
      console.log(bookId);
    }

    function handleDelete(bookId) {
      console.log(bookId);
      let filteredBooks = fil.filter(
        (eachBook) => eachBook.bookId != bookId
      );
      setFilteredAllCohorts([...filteredBooks]);
    }

    function handleSearch(event) {
      setSearchStack(event.target.value);
      let filterAllBooks = allBooks.filter((eachBook) =>
        eachBook.bookTitle
          .toLowerCase()
          .includes(event.target.value.toLowerCase())
      );
      setFilteredAllBook([...filterAllBooks]);
    }

    // function addDays(date, days) {
    //   const newDate = new Date(date);
    //   newDate.setDate(date.getDate() + days);
    //   return newDate;
    // }
    let mappedAllBooks = filteredAllBook.map((eachBook) => (
      <tr key={eachBook.bookId}>
        <td>{eachBook.bookId}</td>
        <td>{eachBook.bookTitle}</td>
        <td>{eachBook.bookPrice}</td>
        <td>{eachBook.bookAuthorId}</td>
        
        <td>{new Date(eachBook.bookPublished).toDateString()}</td>
        
        
     
        <td>
          <button
            onClick={() => handleView(eachBook.bookId)}
            className="btn btn-warning"
          >
            <span className="material-symbols-outlined">view_list</span>
          </button>
        </td>
        <td>
          <button
            onClick={() => handleEdit(eachBook.bookId)}
            className="btn btn-primary"
          >
            <span className="material-symbols-outlined">edit</span>
          </button>
        </td>
        <td>
          <button
            onClick={() => handleDelete(eachBook.bookId)}
            className="btn btn-danger"
          >
            <span className="material-symbols-outlined">delete</span>
          </button>
        </td>
      </tr>
    ));

    return (
      <>
        <div className="container m-1">
          <h3>LIST OF BOOKS</h3>
          <div className="formC-control-group">
            <label htmlFor="BId" className="form-label">

              Search Stack:
            </label>
            <input
              type="text"
              id="BId"
              placeholder="Enter search string"
              onChange={(e) => handleSearch(e)}
            ></input>
          </div>
          <table className="table table-striped">
            <thead>
              <tr className="table-dark">
                <th>ID</th>
                <th>TITLE</th>
                <th>PRICE</th>
                <th>AUTHORID</th>
                <th>PUBLISHED ON</th>

                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>{mappedAllBooks}</tbody>
          </table>
        </div>
      </>
    );
}