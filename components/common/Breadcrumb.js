const Breadcrumb = (props) => {
  return (
    <>
      <div className="breadcrumb">
        <div className="container-fluid">
          <p className="fs-6">Doctor / {props.title}</p>
          <p className="fs-5 fw-bold">{props.title}</p>
        </div>
      </div>
    </>
  );
};

export default Breadcrumb;
