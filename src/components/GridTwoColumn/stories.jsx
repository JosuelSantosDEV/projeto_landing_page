import { GridTwoColumn } from ".";
import mock from "./mock";

export default {
    title: "GridTwoColumn",
    component: GridTwoColumn,
    args: mock,
    argsTypes: {
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
            <GridTwoColumn {...args} />
        </div>
    );
};