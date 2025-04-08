import { Menu } from ".";
import linksMock from "../NavLinks/mock"

export default {
    title: "Menu",
    component: Menu,
    args: {
        links: linksMock,
        logoData: {
            text: "Logo",
            link: "#target",
            srcImg: ""
        }
    },
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
            <Menu {...args} />
        </div>
    );
};