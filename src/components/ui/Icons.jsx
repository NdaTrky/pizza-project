import React from "react";
import { Button } from "@/components/ui/button";

function Icons({ iconSrc, label, variant }) {
  return (
    <Button variant={variant}>
      <img src={iconSrc} alt={label} style={{ marginRight: 8 }} />
      {label}
    </Button>
  );
}

export default Icons;
