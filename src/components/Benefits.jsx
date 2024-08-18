import Section from "./Section.jsx";
import Heading from "./Heading.jsx";
import {benefits} from "../constants/index.js";

const Benefits = () => {
    return(
        <Section id={"features"}>
            <div className={"container relative z-2"}>
                <Heading
                    className={"md:max-w-md lg:max-w-2xl"}
                    title={"Chat Smarter, Not Harder with Brainwave"}
                />
                <div
                    className={"flex flex-wrap gap-10"}
                >
                    {benefits.map((item) =>(
                        <div
                            className={`block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]`}
                            style={{backgroundImage: `url(${'./src/'+item.backgroundUrl})`}}
                            key={item.id}
                        >
                            <div
                            className={`relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none`}>
                            <h5 className={`h5 mb-5`}>{item.title}</h5>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    )
}

export default Benefits;