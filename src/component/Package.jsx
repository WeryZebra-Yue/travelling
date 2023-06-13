import { useState } from "react";
import FormDialog from "./Form";
import image from "../assets/images/packages/p1.jpg";
function Package(props) {
  const [dialog, setDialog] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        // justifyContent: "space-between",
        alignItems: "center",
        color: "#f9f7f3",
        marginBottom: "1em",
        // padding: "1em",
        borderRadius: "1em",
      }}
    >
      <div>
        <img
          src={props.imgsrc ? props.imgsrc : image}
          alt="package-place"
          width={350}
          height={250}
          style={{
            borderTopLeftRadius: "1em",
            borderTopRightRadius: "1em",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            padding: "0em 0em 0em 0em",
          }}
        >
          <div
            style={{
              display: "flex",
              // flexDirection: "column",
              justifyContent: "space-between",
              width: "100%",
              backgroundColor: "#4361ee",

              padding: "1em 1em 1em 1em",
            }}
          >
            <span
              style={{
                fontSize: "1.4em",
                fontFamily: "Poppins",
                // letterSpacing: "0.04em",
                fontWeight: 500,
                // fontWeight: 500,
              }}
              className=""
            >
              {props.title}{" "}
            </span>
            <span
              style={{
                fontSize: "1.2em",
                fontFamily: "Poppins",
              }}
            >
              {props.price.inr} ₹ | {props.price.usd} $
            </span>
          </div>

          <button
            style={{
              // backgroundColor: "#1976d2",
              border: "none",
              color: "white",
              width: "100%",
              padding: "0.9em",
              borderRadius: "0 0 0.5em  0.5em",
              cursor: "pointer",
              fontSize: "1.25em",
              // buying button
              fontFamily: "Poppins",
              letterSpacing: "0.05em",
              fontWeight: 500,
              backgroundColor: "#4361ee",
              marginTop: "1em",
            }}
            onClick={() => {
              setDialog(true);
            }}
            // className="about-view packages-btn"
          >
            Book Now
          </button>

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
