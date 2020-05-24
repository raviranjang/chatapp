import React, { useEffect } from "react";
import { useSelector } from "react-redux";

function Config(props) {
  const appTitle = useSelector(({ config }) => config.appName);

  useEffect(() => {
    document.title = appTitle;
  }, [appTitle]);

  return <>{props.children}</>;
}

export { Config };
