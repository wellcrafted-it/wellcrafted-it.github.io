import React from "react";

class Service {
  id: string;
  name: string;
  description: React.ReactNode;
  icon: string;

  constructor(
    id: string,
    name: string,
    description: React.ReactNode,
    icon: string,
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.icon = icon;
  }
}

export default Service;
