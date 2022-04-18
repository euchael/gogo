import { Fragment } from "react";
import ReactDOM from "react-dom";

const PreLoader = () => {
  // const portalElement = document.getElementById("preLoader");

  return (
    // <Fragment>
    //   {portalElement
    //     ? ReactDOM.createPortal(
    //         <Fragment>
    //           <div className="preloader">
    //             <div className="preloader-inner">
    //               <div className="preloader-icon">
    //                 <span></span>
    //                 <span></span>
    //               </div>
    //             </div>
    //           </div>
    //         </Fragment>,
    //         portalElement
    //       )
    //     : null}
    // </Fragment>

    <Fragment>
      <div className="preloader">
        <div className="preloader-inner">
          <div className="preloader-icon">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PreLoader;
