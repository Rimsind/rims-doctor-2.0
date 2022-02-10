import { Breadcrumb } from "components/common";

const TimeTable = () => {
  return (
    <>
      <div className="page-wrapper" id="page-wrapper">
        <Breadcrumb title="Time Table" />
        <div className="content container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-body">
                  <p>Time Table Content</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TimeTable;
