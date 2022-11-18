import { projects } from "../data/projects-data.js";

const projectElement = (project, index) => {
  // create the project element using an <article>
  const article = document.createElement("article");

  // add classes to style the article element above
  article.classList.add("brick");
  article.classList.add("entry");

  // to empasize the first and/or second project if the projects are equal to 5 or 6
  if (index === 0 && projects.length === 5) {
    article.classList.add("brick--double");
  } else if (projects.length > 5 && (index === 0 || index === 1)) {
    article.classList.add("brick--double");
  }

  // add the hyperlink in the <article> element
  const hyperlink = createHyperlinkElement(project, index);
  article.append(hyperlink);

  return article;
};

const createHyperlinkElement = (project, index) => {
  // the hyperlink <a> tag in the <article> element above
  const hyperlink = document.createElement("a");

  // add the project's associated modal
  hyperlink.setAttribute("href", `#modal-0${index + 1}`);

  // add classes to style the hyperlink element above
  hyperlink.classList.add("entry__link");

  // add the project's image in the hyperlink <a>
  const projectImage = createImageContainer(project, index);
  hyperlink.append(projectImage);

  // add the projects's info in the hyperlink <a>
  const projectInfo = createInfoContainer(project);
  hyperlink.append(projectInfo);

  return hyperlink;
};

const createImageContainer = (project, index) => {
  // create project's image container
  const imageContainer = document.createElement("div");
  imageContainer.classList.add("entry__thumb");

  // create project's image
  const image = document.createElement("img");
  image.setAttribute("alt", project.demoImageAlt);

  // a function that displays the proper image based on the
  // screensize, and number of projects
  displayLogoOrDemoImage(project, index, image);

  // add the image in the image container
  imageContainer.append(image);

  return imageContainer;
};

const displayLogoOrDemoImage = (project, index, image) => {
  // to change display based on screensize
  window.addEventListener("resize", () => {
    loadProjectImage(project, image, index);
  });

  // initial page load
  loadProjectImage(project, image, index);
};

const loadProjectImage = (project, image, index) => {
  const screenIsLarge = window.matchMedia("(min-width: 1001px)").matches;
  const projectLengthIsMax = projects.length > 5;
  const firstOrSecondProject = index === 0 || index === 1;

  if (screenIsLarge && projectLengthIsMax && firstOrSecondProject) {
    // to empasize the first and second project if the projects are more than 5
    image.setAttribute("src", project.demoImage);
  } else {
    image.setAttribute("src", project.logo);
  }
};

const createInfoContainer = (project) => {
  // create project's info container
  const infoContainer = document.createElement("div");
  infoContainer.classList.add("entry__info");

  // the project's label
  const label = document.createElement("div");
  label.textContent = project.label;
  label.classList.add("entry__cat");

  // the project's title
  const name = document.createElement("h4");
  name.textContent = project.name;
  name.classList.add("entry__title");

  // add the project information in the infoContainer
  infoContainer.append(label);
  infoContainer.append(name);

  return infoContainer;
};

/*===============
  MAIN FUNCTION
===============*/
export const renderProjects = () => {
  // get the element from the UI that will store our nav links
  const projectContainer = document.querySelector(".projects-container");

  // add projects that is in an <article> element to the UI
  projects.forEach((project, index) => {
    projectContainer.append(projectElement(project, index));
  });
};
renderProjects();