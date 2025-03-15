import { NavLinks } from ".";
import mock from "./mock";

export default {
    title: "NavLinks",
    component: NavLinks,
    args: {
        links: mock,
    },
    argsTypes: {
        links: {type: "object"},
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
            <NavLinks {...args} />
        </div>
    );
};