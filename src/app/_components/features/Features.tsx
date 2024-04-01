import { Container } from "@radix-ui/themes";
import classNames from "classnames";
import { ReactElement } from "react";
import { FaUserFriends, FaBookReader, FaUserGraduate, FaUniversity } from "react-icons/fa";

type FeatureType = {
    title: string,
    desc: string,
    icon: ReactElement
    color: string
    iconBg: string
}

const features: FeatureType[] = [
    {
        title: "Expert Teachers",
        desc: "Well experienced teachers for each subject. No common teacher for all subjects.",
        icon: <FaUserFriends size={30} color="#fd5c63" />,
        color: "#fd5c63",
        iconBg: "#f5707624"
    },
    {
        title: "Quality Education",
        desc: "Best curriculum based on the Cambridge international framework.",
        icon: <FaBookReader size={30} color="#00a4e4" />,
        color: "#00a4e4",
        iconBg: "#00a4e414"
    },
    {
        title: "Alumni Support",
        desc: "Life time Alumni support through various channels available.",
        icon: <FaUserGraduate size={30} color="#ffc845" />,
        color: "#ffc845",
        iconBg: "#f9bc2e1a"
    },
    {
        title: "Best Scholarships",
        desc: "Best Scholarships available for the low income family students.",
        icon: <FaUniversity size={30} color="#00c16e" />,
        color: "#00c16e",
        iconBg: "#00c16e17"
    },
]


export default function Features() {
    return (
        <>
            <Container className="p-sm-inline sm:p-inline pt-12">
                {/* Feature title */}
                <h2 className="capitalize font-medium text-center text-md md:text-xl">BEST FEATURES</h2>
                <h3 className="text-3xl md:text-[2.5rem] leading-tight font-bold text-center mt-3 max-w-[20ch] m-auto">Achieve your goals with Eazy school</h3>

                {/* List of features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:flex md:items-stretch place-items-center gap-4 md:gap-8 mt-9 sm:[&>*]:justify-self-start sm:[&>*:nth-child(odd)]:justify-self-end">
                    {features.map((feature: FeatureType, index: number) => {
                        return (
                            <Feature key={index} {...feature} />
                        )
                    })}
                </div>

            </Container>
        </>
    )
}


const Feature = (
    { title, desc, icon, color, iconBg }: FeatureType) => {

    const style = {
        backgroundColor: iconBg,
    }


    return (
        <>
            <div className={`w-full max-w-[400px] bg-white cursor-pointer shadow-md hover:border  hover:border-[#fd5c63] transition-all duration-300 ease-in-out p-6 py-8 grid grid-cols-1 place-items-center gap-y-3`}>
                <div style={style} className={`p-5 rounded-full`}>
                    {icon}
                </div>

                <h3 className="font-bold text-2xl">{title}</h3>

                <p className="text-center font-medium">{desc}</p>

            </div>
        </>
    )
}