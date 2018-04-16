import React from "react";

import Foundation from "../foundation/Foundation";

const { Button } = Foundation;

const ArticleNavigation = () => (
  <div>
    <Button link="#prev" text="Previous" />
    <Button link="#next" text="Next" />
  </div>
);

export default ArticleNavigation;