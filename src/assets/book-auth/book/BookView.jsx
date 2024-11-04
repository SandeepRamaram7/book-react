import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export default function BookView() {
  const baseUrl = "http://localhost:3000/BOOKS";
  let [fetchedCohort, setFetchedCohort] = useState({
    bookId: 1,
    bookTitle: "Sample Book Title",
    bookPrice: "19.99",
    bookPublished: "2023-10-15",
    bookImageUrl: "https://example.com/image.jpg",
    bookAuthorId: "auth123",
  });
  let { cid } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    fetch(baseUrl + "/" + cid)
      .then((res) => res.json())
      .then((data) => setFetchedCohort(data));
  }, []);
  return (
    <>
      <div className="container mx-5 px-5">
        <button onClick={() => navigate(-1)} className="btn btn-primary">
          {/* <button onClick={() => navigate("/training/cohort-list")} className="btn btn-primary"> */}
          Back to Cohort List
        </button>
        {fetchedCohort.cohortStack == "" ? (
          ""
        ) : (
          <div className="card m-2">
            <div className="card-header bg-warning text-light">
              <h3>Cohort Details for cohort ID : {cid}</h3>
            </div>
            <div className="card-body">
              <h6>Cohort Stack : {fetchedCohort.cohortStack}</h6>
              <h6>Cohort Size : {fetchedCohort.cohortSize}</h6>
              <h6>Cohort Duration : {fetchedCohort.cohortDurationWeeks}</h6>
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
