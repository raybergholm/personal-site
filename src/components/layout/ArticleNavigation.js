import React from "react";

import { Button } from "../foundation/Foundation";

const ArticleNavigation = () => (
  <div>
    <Button link="#prev" text="Previous" />
    <Button link="#next" text="Next" />
  </div>
);

export default ArticleNavigation;