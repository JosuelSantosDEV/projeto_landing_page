import { Footer } from ".";

export default {
    title: "Footer",
    component: Footer,
    args: {
        html:`<p><a href="#">Feito ❤ por Josuel Santos DEV</a></p>`,
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
            <Footer {...args} />
        </div>
    );
};