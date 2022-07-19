import React from "react";
import { Link } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
export default function LocationPanner(props) {
  const breadcrumbs = useBreadcrumbs();
  return (
    <React.Fragment>
      <div className="breadcrumbs">
        <h3>{breadcrumbs[1].breadcrumb.props.children}</h3>
        {breadcrumbs.map(({ breadcrumb },index) => (
          <Link  key={index} to={`/${breadcrumb.props.children}`} className="location-link">
            {breadcrumb}
          </Link>
        ))}
      </div>
    </React.Fragment>
  );
}
