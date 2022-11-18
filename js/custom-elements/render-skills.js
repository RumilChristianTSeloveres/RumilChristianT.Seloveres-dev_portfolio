import { skills } from "../data/skills-data.js";

const badgeElement = (skill) => {
  // create the badge element using a <div>
  const badge = document.createElement("div");

  // add icon
  const icon = document.createElement("img");
  icon.setAttribute("src", skill.icon);

  // add label
  const label = document.createElement("span");
  label.textContent = skill.label;

  // add data to the <div> badge element
  badge.append(icon);
  badge.append(label);

  // apply this to style the badge element
  badge.classList.add("badge");

  return badge;
};

/*===============
  MAIN FUNCTION
===============*/
export const renderSkills = () => {
  // get the (parent) element from the UI (in index.html) that will store our skill badges
  const skillsContainer = document.querySelector(".skills-container");

  // add the badge elements to the (parent) skills container (to be displayed in the UI)
  skills.forEach((skill) => {
    skillsContainer.append(badgeElement(skill));
  });
};

renderSkills();