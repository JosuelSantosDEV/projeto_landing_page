import { GoTop } from ".";

export default {
    title: "GoTop",
    component: GoTop,
    parameters :{
        backgrounds: {
            default: "light",
        }
    }
};

export const Template = (args) => {
    return (
        <div>
            <GoTop {...args} />
        </div>
    );
};