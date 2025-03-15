import { TextComponent } from ".";

export default {
    title: "TextComponent",
    component: TextComponent,
    args: {
        children: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae et excepturi 
        dolorum magnam voluptates at aut provident quo vitae, omnis quod rerum tempora eos, modi 
        consequuntur illum. Molestias, ut ex!`,
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
            <TextComponent {...args} />
        </div>
    );
};