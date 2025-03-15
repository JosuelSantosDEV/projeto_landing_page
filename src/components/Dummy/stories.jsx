import { Dummy } from ".";

export default {
    title: "Dummy",
    component: Dummy,
    args: {
        children:"Essa é a Dummy",
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
            <Dummy {...args} />
        </div>
    );
};