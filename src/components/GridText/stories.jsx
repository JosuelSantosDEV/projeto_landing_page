import { GridText } from ".";
import mock from "./mock"

export default {
    title: "GridText",
    component: GridText,
    args: mock,
    argsTypes: {
        children: {type: "string"},
    },
    parameters :{
        backgrounds: {
            default: "light",
        }
    }
};

export const Template = (args) => {
    return (
        <div>
            <GridText {...args} />
        </div>
    );
};