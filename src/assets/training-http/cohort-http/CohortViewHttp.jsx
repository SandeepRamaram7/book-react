import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export default function CohortViewHttp() {
  const baseUrl = "http://localhost:3000/cohorts";
  let [fetchedBook, setFetchedBook] = useState({
    bookId: 0,
    bookTitle: "",
    bookPrice: "",
    bookPublished: "",
    bookImageUrl: "",
    bookAuthorId: "",
  });
  let { cid } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    fetch(baseUrl + "/" + cid)
      .then((res) => res.json())
      .then((data) => setFetchedBook(data));
  }, []);
  return (
    <>
      <div className="container mx-5 px-5">
        <button onClick={() => navigate(-1)} className="btn btn-primary">
          {/* <button onClick={() => navigate("/training/cohort-list")} className="btn btn-primary"> */}
          Back to book List
        </button>
        {fetchedBook.bookTitle == "" ? (
          ""
        ) : (
          <div className="card m-2">
            <div className="card-header bg-warning text-light">
              <h3>Cohort Details for cohort ID : {cid}</h3>
            </div>
            <div className="card-body">
              <h6>Book Title : {fetchedCohort.cohortStack}</h6>
              <h6>Book Prize : {fetchedCohort.cohortSize}</h6>
              <h6> : {fetchedCohort.cohortDurationWeeks}</h6>
              <h6>
                Cohort Start Date :
                {new Date(fetchedCohort.cohortStartDate).toDateString()}
              </h6>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
