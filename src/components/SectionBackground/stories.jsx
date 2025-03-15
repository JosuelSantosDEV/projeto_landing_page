import { SectionContainer } from "../SectionContainer";
import { SectionBackground } from ".";

export default {
    title: "SectionBackground",
    component: SectionBackground,
    args: {
        children: (
            <SectionContainer>
                <div>
                <h1>SectionContainer</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non ab doloribus laboriosam aspernatur eum,
                     aliquam in et iusto dolorem voluptatemprovident assumenda eaque! Odio eius fuga deserunt?
                     Vero, similique illum.</p>
                </div>
            </SectionContainer>
        ),
        background: false
    },
    argsTypes: {
        children: {type: ""},
        background: {type: "boolean"}

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
            <SectionBackground {...args} />
        </div>
    );
};