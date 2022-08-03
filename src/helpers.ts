import { SetupProps } from "./model";

export const officeSetup: SetupProps[] = [ 
    {
      id: 0,
      title: "Foundation",
      isChecked: false,
      tasks: [
        {
          title: "Setup virtual office",
          checked: false
        }, 
        {
          title: "Set mission & vision",
          checked: false
        },
        {
          title: "Select business name",
          checked: false
        },
        {
          title: "Buy domains",
          checked: false
        },
      ]
    }, 
    {
      id: 1,
      title: "Discovery",
      isChecked: false,
      tasks: [
        {
          title: "Create roadmap",
          checked: false
        }, 
        {
          title: "Competitor Analysis",
          checked: false
        },
      ]
    }, 
    {
      id: 2,
      title: "Delivery",
      isChecked: false,
      tasks: [
        {
          title: "Release marketing",
          checked: false
        }, 
        {
          title: "Release MVP",
          checked: false
        },
      ]
    }, 
  ]
  