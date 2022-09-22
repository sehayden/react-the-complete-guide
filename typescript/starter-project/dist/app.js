"use strict";
class ProjectState {
    constructor() {
        this.listeners = [];
        this.projects = [];
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new ProjectState();
        return this.instance;
    }
    addListener(listenerFn) {
        this.listeners.push(listenerFn);
    }
    addProject(title, description, numOfPeople) {
        const newProject = {
            id: Math.random().toString(),
            title: title,
            description: description,
            numOfPeople: numOfPeople
        };
        this.projects.push(newProject);
        for (const listenerFn of this.listeners) {
            listenerFn(this.projects.slice());
        }
    }
}
const projectState = ProjectState.getInstance(); // for 1 state management per object
//Template project list
class ProjectList {
    constructor(type) {
        this.type = type;
        this.templateElement = document.getElementById('project-list');
        this.hostElement = document.getElementById('app');
        this.assignedProject = [];
        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        this.element.id = `${this.type}-projects`;
        projectState.addListener((projects) => {
            this.assignedProject = projects;
            this.renderProject();
        });
        this.attach();
        this.renderContent();
    }
    renderProject() {
        const listEl = document.getElementById(`${this.type}-projects-list`);
        for (const prjItem of this.assignedProject) {
            const listItem = document.createElement('li');
            listItem.textContent = prjItem.title;
            listEl.appendChild(listItem);
        }
    }
    renderContent() {
        const listId = `${this.type}-projects-list`;
        this.element.querySelector('ul').id = listId;
        this.element.querySelector('h2').textContent = `${this.type.toUpperCase()} PROJECTS`;
    }
    attach() {
        this.hostElement.insertAdjacentElement('beforeend', this.element);
    }
}
//Template project input
class ProjectInput {
    constructor() {
        this.eventHandler = (e) => {
            e.preventDefault();
            this.gatherUserInput();
        };
        this.templateElement = document.getElementById('project-input');
        this.hostElement = document.getElementById('app');
        const importedNode = document.importNode(this.templateElement.content, true);
        this.formElement = importedNode.firstElementChild;
        this.formElement.id = 'user-input';
        this.titleInputElement = this.formElement.querySelector('#title');
        this.descriptionInputElement = this.formElement.querySelector('#description');
        this.peopleInputElement = this.formElement.querySelector('#people');
        this.config();
        this.attach();
    }
    gatherUserInput() {
        const titleInput = this.titleInputElement.value;
        const descriptionInput = this.descriptionInputElement.value;
        const peopleInput = +this.peopleInputElement.value;
        this.validate({ value: titleInput, require: true, minLength: 5 });
        this.validate({ value: descriptionInput, require: false, minLength: 0 });
        this.validate({ value: peopleInput, require: true, minLength: 5 });
        projectState.addProject(titleInput, descriptionInput, peopleInput);
        return ([titleInput, descriptionInput, peopleInput]);
    }
    config() {
        this.formElement.addEventListener('submit', this.eventHandler.bind(this));
    }
    attach() {
        this.hostElement.insertAdjacentElement('afterbegin', this.formElement);
    }
    validate(input) {
        if (input.require) {
            if (typeof input.value === 'string') {
                if (input.value.trim().length === 0) {
                    throw new Error('Do not leave input empty');
                }
                else if (input.value.trim().length < input.minLength) {
                    throw new Error(`Input must be ${input.minLength} in length`);
                }
            }
            if (typeof input.value === 'number') {
                if (!input.value) {
                    throw new Error('Number of people is missing');
                }
                else if (input.value <= 0) {
                    throw new Error('Number of people must me larger than 0');
                }
            }
        }
    }
}
const prj = new ProjectInput();
const activeList = new ProjectList('active');
const finishedList = new ProjectList('finished');
