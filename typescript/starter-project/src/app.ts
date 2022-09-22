interface Validatable {
  value: string | number,
  require: boolean,
  minLength: number
}

class ProjectState {
  private listeners: any[] = []
  private projects: any[] = []
  private static instance: ProjectState
  private constructor() {

  }
  static getInstance() {
    if (this.instance) {
      return this.instance
    }
    this.instance = new ProjectState()
    return this.instance
  }

  addListener(listenerFn: Function) {
    this.listeners.push(listenerFn)
  }

  addProject(title: string, description: string, numOfPeople: number) {
    const newProject = {
      id: Math.random().toString(),
      title: title,
      description: description,
      numOfPeople: numOfPeople
    }
    this.projects.push(newProject)
    for (const listenerFn of this.listeners) {
      listenerFn(this.projects.slice())
    }
  }
}

const projectState = ProjectState.getInstance() // for 1 state management per object

//Template project list
class ProjectList {
  templateElement: HTMLTemplateElement
  hostElement: HTMLDivElement
  element: HTMLElement
  assignedProject: any[]

  constructor(private type: 'active' | 'finished') {
    this.templateElement = document.getElementById('project-list')! as HTMLTemplateElement
    this.hostElement = document.getElementById('app')! as HTMLDivElement
    this.assignedProject = []

    const importedNode = document.importNode(this.templateElement.content, true)
    this.element = importedNode.firstElementChild as HTMLElement
    this.element.id = `${this.type}-projects`

    projectState.addListener((projects: any[]) => {
      this.assignedProject = projects
      this.renderProject()
    })

    this.attach()
    this.renderContent()
  }

  private renderProject() {
    const listEl = document.getElementById(`${this.type}-projects-list`)! as HTMLUListElement
    for (const prjItem of this.assignedProject) {
      const listItem = document.createElement('li')
      listItem.textContent = prjItem.title
      listEl.appendChild(listItem)
    }
  }
  private renderContent() {
    const listId = `${this.type}-projects-list`
    this.element.querySelector('ul')!.id = listId
    this.element.querySelector('h2')!.textContent = `${this.type.toUpperCase()} PROJECTS`
  }
  private attach() {
    this.hostElement.insertAdjacentElement('beforeend', this.element)
  }
}


//Template project input
class ProjectInput {
  templateElement: HTMLTemplateElement
  hostElement: HTMLDivElement
  formElement: HTMLFormElement

  titleInputElement: HTMLInputElement
  descriptionInputElement: HTMLInputElement
  peopleInputElement: HTMLInputElement

  constructor() {
    this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement
    this.hostElement = document.getElementById('app')! as HTMLDivElement
    const importedNode = document.importNode(this.templateElement.content, true)
    this.formElement = importedNode.firstElementChild as HTMLFormElement
    this.formElement.id = 'user-input'

    this.titleInputElement = this.formElement.querySelector('#title')! as HTMLInputElement
    this.descriptionInputElement = this.formElement.querySelector('#description')! as HTMLInputElement
    this.peopleInputElement = this.formElement.querySelector('#people')! as HTMLInputElement

    this.config()
    this.attach()

  }

  private gatherUserInput(): [string, string, number] {
    const titleInput = this.titleInputElement.value as string
    const descriptionInput = this.descriptionInputElement.value as string
    const peopleInput = +this.peopleInputElement.value
    this.validate({ value: titleInput, require: true, minLength: 5 })
    this.validate({ value: descriptionInput, require: false, minLength: 0 })
    this.validate({ value: peopleInput, require: true, minLength: 5 })
    projectState.addProject(titleInput, descriptionInput, peopleInput)
    return ([titleInput, descriptionInput, peopleInput])
  }
  private eventHandler = (e: Event) => {
    e.preventDefault()
    this.gatherUserInput()
  }
  private config() {
    this.formElement.addEventListener('submit', this.eventHandler.bind(this))
  }
  private attach() {
    this.hostElement.insertAdjacentElement('afterbegin', this.formElement)
  }
  private validate(input: Validatable) {
    if (input.require) {
      if (typeof input.value === 'string') {
        if (input.value.trim().length === 0) {
          throw new Error('Do not leave input empty')
        }
        else if (input.value.trim().length < input.minLength) {
          throw new Error(`Input must be ${input.minLength} in length`)
        }
      }
      if (typeof input.value === 'number') {
        if (!input.value) {
          throw new Error('Number of people is missing')
        }
        else if (input.value <= 0) {
          throw new Error('Number of people must me larger than 0')
        }
      }
    }

  }
}
const prj = new ProjectInput()
const activeList = new ProjectList('active')
const finishedList = new ProjectList('finished')