import { LogoLink } from ".";

export default {
    title: "LogoLink",
    component: LogoLink,
    args: {
        text:"Essa é a LogoLink",
        srcImg: "/assets/images/logo.png",
        link: "/"

    },
    argsTypes: {
        text: {type: "string"},
        srcImg: {type: "string"},
        link: {type: "string"}
    },
    parameters :{
        backgrounds: {
            default: "light",
        }
    }
};

export const ImageOnly = (args) => {
    return (
        <div>
            <LogoLink {...args} />
        </div>
    );
};

export const TextOnly = (args) => {
    return (
        <div>
            <LogoLink {...args} />
        </div>
    );
};

TextOnly.args = {
    srcImg: ""
};