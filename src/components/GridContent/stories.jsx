import { GridContent } from ".";
import mock from "./mock";

export default {
    title: "GridContent",
    component: GridContent,
    args: mock,
    parameters :{
        backgrounds: {
            default: "light",
        }
    }
};

export const Template = (args) => {
    return (
        <div>
            <GridContent {...args} />
        </div>
    );
};