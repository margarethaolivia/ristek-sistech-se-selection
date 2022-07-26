const Alert = ({ alert, setAlert, text }) => {
  return (
    <div
      className={
        alert
          ? "alert bg-success fade show d-flex justify-content-between"
          : "alert bg-success fade d-flex justify-content-between"
      }
      role="alert"
    >
      Your blog is {text} sucessfully
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true" onClick={() => setAlert(false)}>
          &times;
        </span>
      </button>
    </div>
  );
};

export default Alert;
