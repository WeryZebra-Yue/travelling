import { useState } from "react";
import FormDialog from "./Form";

function Package(props) {
  const [dialog, setDialog] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        // justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        marginBottom: "1em",
        padding: "1em",
        borderRadius: "1em",
      }}
    >
      <div>
        <img src={props.imgsrc} alt="package-place" width={350} height={250} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              paddingTop: "1em",
            }}
          >
            <span
              style={{
                fontSize: "1.2em",
              }}
              className=""
            >
              {props.title}{" "}
            </span>
            <span
              style={{
                fontSize: "1.2em",
              }}
            >
              {props.price.inr} ₹
            </span>
          </div>
          <div>
            <button
              style={{
                backgroundColor: "#1976d2",
                border: "none",
                color: "white",
              }}
              onClick={() => {
                setDialog(true);
              }}
              className="about-view packages-btn"
            >
              book now
            </button>
          </div>

          {/* <div className="packages-para">
            <p>
              <span>
                <i className="fa fa-angle-right"></i> {props.days} days
              </span>
            </p> */}
          {/* <p>
              <span>
                <i className="fa fa-angle-right"></i> transportation
              </span>
              <i className="fa fa-angle-right"></i> food facilities
            </p> */}
          {/* </div> */}
          {/* <div className="packages-review">
            <p>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <span>
                {props.review} {props.review > 1 ? "reviews" : "review"}
              </span>
            </p>
          </div> */}
        </div>
      </div>
      <FormDialog
        {...props}
        open={dialog}
        close={() => {
          console.log("close");
          setDialog(false);
        }}
      />
    </div>
  );
}

export default Package;
