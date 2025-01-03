import React from "react";
import { Button } from "@/components/ui/button";

function Icons({ iconSrc, label, variant, className }) {
  return (
    <Button variant={variant} className={className}>
      <img src={iconSrc} alt={label} style={{ marginRight: 8 }} />
      {label}
    </Button>
  );
}

export default Icons;
