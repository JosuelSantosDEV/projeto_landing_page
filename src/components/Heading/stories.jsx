import { background } from "storybook/internal/theming";
import Heading from ".";


export default {
    title: "Heading",
    component: Heading,
    args: {
        children:"Essa é a Heading",
        colorDark: false,
    },
    argsTypes: {
        children: {type: "string"},
        colorDark: {type: "boolean"},
    },
    parameters :{
        backgrounds: {
            default: "light",
        }
    }
}

export const Light = (args) => <Heading {...args}  />
Light.parameters = {
    backgrounds: {default: "light"}
}

export const Dark = (args) => <Heading {...args}  />
Dark.parameters = {
    backgrounds: {default: "dark"}
}