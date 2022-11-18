import { projects } from "../data/projects-data.js";

const modalElement = (project, index) => {
  // create the modal element using a <div>
  const modal = document.createElement("div");
  modal.setAttribute("id", `modal-0${index + 1}`);
  modal.setAttribute("hidden", "");

  // an element that stores our modal information
  const modalInfo = createModalInfo(project);

  // add data to our modal
  modal.append(modalInfo);

  return modal;
};

const createModalInfo = (project) => {
  // store our modal information using a <div>
  const modalInfo = document.createElement("div");
  modalInfo.classList.add("modal-popup");

  // the project's [demo] and [source code] links
  const projectLinks = createProjectLinks(project);

  // the project's demo image that will be displayed in the modal
  const projectDemoImage = document.createElement("img");
  projectDemoImage.setAttribute("src", project.demoImage);
  projectDemoImage.setAttribute("alt", project.demoImageLabel);

  // the actual project description
  const projectDescription = createModalDescription(project);

  // add data to the modalInfo <div> element
  modalInfo.append(projectLinks);
  modalInfo.append(projectDemoImage);
  modalInfo.append(projectDescription);

  return modalInfo;
};

const createProjectLinks = (project) => {
  // a <div> element that holds our project links
  const projectLinksContainer = document.createElement("div");
  projectLinksContainer.classList.add("project-links");

  // the [Project Demo] button
  const actualProjectLink = document.createElement("a");
  actualProjectLink.classList.add("project-link-btn");
  actualProjectLink.setAttribute("href", project.demoLink);
  actualProjectLink.setAttribute("target", "_blank");
  actualProjectLink.textContent = "Project Demo";

  // the [Source Code] button
  const sourceCodeLink = document.createElement("a");
  sourceCodeLink.classList.add("project-link-btn");
  sourceCodeLink.setAttribute("href", project.sourceCodeLink);
  sourceCodeLink.setAttribute("target", "_blank");
  sourceCodeLink.textContent = "Source Code";

  // add the project link buttons to the container
  projectLinksContainer.append(actualProjectLink);
  projectLinksContainer.append(sourceCodeLink);

  return projectLinksContainer;
};

const createModalDescription = (project) => {
  // a <div> element that holds our project description
  const modalDescription = document.createElement("div");
  modalDescription.classList.add("modal-popup__desc");

  // the project's name in a <h5> tag
  const projectName = document.createElement("h5");
  projectName.textContent = project.name;

  // the project's description in a <p> tag
  const projectDescription = document.createElement("p");
  projectDescription.textContent = project.description;

  // a <ul> element that holds our project tags
  const projectTagsContainer = document.createElement("ul");
  projectTagsContainer.classList.add("modal-popup__cat");

  // add all project tags to the projectTagsContainer, then render them
  createProjectTags(projectTagsContainer, project.tags);

  // add data to the modalDescription <div> element
  modalDescription.append(projectName);
  modalDescription.append(projectDescription);
  modalDescription.append(projectTagsContainer);

  return modalDescription;
};

const createProjectTags = (projectTagsContainer, tags) => {
  // create a list item <li> element for every tag that a project has
  // then add those <li> elements in the projectTagsContainer

  tags?.forEach((tag) => {
    const projectTag = document.createElement("li");
    projectTag.textContent = tag;

    projectTagsContainer.append(projectTag);
  });
};

/*===============
  MAIN FUNCTION
===============*/
export const renderProjectModals = () => {
  // get the (parent) element from the UI (in index.html) that will store our modal elements
  const modalContainer = document.querySelector(".modals-container");

  // add the modal elements to the (parent) modal container (to be displayed in the UI)
  projects.forEach((project, index) => {
    modalContainer.append(modalElement(project, index));
  });
};
renderProjectModals();