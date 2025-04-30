import { GridImage } from ".";

import mock from "./mock";

export default {
    title: "GridImage",
    component: GridImage,
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
            <GridImage {...args} />
        </div>
    );
};