import { SectionContainer } from ".";

export default {
    title: "SectionContainer",
    component: SectionContainer,
    args: {
        children:(
            <div>
                <h1>SectionContainer</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non ab doloribus laboriosam aspernatur eum,
                     aliquam in et iusto dolorem voluptatemprovident assumenda eaque! Odio eius fuga deserunt?
                     Vero, similique illum.</p>
            </div>
        ),
    },
    argsTypes: {
        children: {type: ""},
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
            <SectionContainer {...args} />
        </div>
    );
};