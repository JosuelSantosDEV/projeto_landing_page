import { MenuLink } from ".";

export default {
    title: "MenuLink",
    component: MenuLink,
    tags: ["autodocs"],
    args: {
        children:"Essa é a MenuLink",
        link: "https://www.google.com",
        newTab: false,
    },
    argsTypes: {
        children: {type: "string"},
        link: {type: "string"},
        newTab: {type: "boolean"},  
    },
    parameters :{
        backgrounds: {
            default: "light",
        }
    }
};

export const Template = (args) => {
    return (
        
        <div style={{display: "flex"}}>
            <MenuLink {...args} />
        </div>
        
    );
};