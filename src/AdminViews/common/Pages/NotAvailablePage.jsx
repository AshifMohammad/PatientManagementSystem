import React from "react";
import { Card } from "react-bootstrap";
import "./style.less";

export default function NotAvailablePage() {
  const handleEmailClick = () => window.open("mailto:user@abctechnology.com");
  return (
    <Card>
      <Card.Body>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="error-template">
                <h1>Oops!</h1>
                <h2>404 Not Found</h2>
                <div>
                  Sorry
                  <a
                    className="error-details fa fa-building ml-2"
                    aria-hidden="true"
                  ></a>
                  Company Pages are in Progress!
                </div>
                <div className="error-actions">
                  <a
                    href="/company-management"
                    className="btn btn-primary btn-lg"
                  >
                    <span className="glyphicon glyphicon-home"></span>
                    Take Me Home
                  </a>
                  <a
                    onClick={handleEmailClick}
                    className="btn btn-default btn-lg"
                  >
                    <span className="glyphicon glyphicon-envelope"></span>
                    Contact Support
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
