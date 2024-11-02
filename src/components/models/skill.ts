class Skill {
  id: string;
  name: string;
  description: string;
  languages?: string[];
  tools?: string[];
  frameworks?: string[];
  standards?: string[];
  icon: string;

  constructor(id: string, name: string, description: string, icon: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.icon = icon;
  }
}

export default Skill;
