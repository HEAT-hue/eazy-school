import { Container, Grid, Button } from "@radix-ui/themes";
import styles from './styles.module.css'
import { getHomeDetails } from '@/lib/actions/homeActions'
import Image from "next/image";

export default async function Hero() {

    // Fetch home details from server
    const greeting = await getHomeDetails();

    return (
        <div className={styles.hero}>

            {/* Hero Text Container */}
            <Container className="pt-[7rem] pb-9 h-full bg-[#fff]/80 border-yellow-500">

                <Grid columns={{ initial: '1', md: '2' }} gap={'7'}>
                    {/* --------------------------- Grid Left Section --------------------------- */}
                    <div className="p-sm-inline md:p-inline">
                        <p className="capitalize text-4xl md:text-[4rem] leading-tight max-w-md">
                            <strong>
                                <span className="font-[700]">Your kids deserve  the </span>
                                <span className="font-light">best education</span></strong>
                        </p>

                        <p className="text-xl mt-5">Active Learning, Expert Teachers & Safe Environment</p>

                        <Button className={"capitalize bg-pry text-white py-7 px-5 text-lg rounded-s font-bold mt-9 cursor-pointer"}>
                            Admission Now
                        </Button>
                    </div>

                    {/* --------------------------- Grid Right Section --------------------------- */}
                    <div>
                        {/* School boy image */}
                        <div className="relative h-[450px] w-[90%] m-auto max-w-[350px] flex justify-end">

                            {/* Banner Quote */}
                            <div className="absolute -left-[0rem] top-3">
                                <div className={styles.banner}>
                                    <div className="bg-sec px-[25px] py-[20px] text-white text-xl">
                                        <p className="w-max font-bold">Back to School</p>
                                    </div>
                                </div>
                            </div>

                            <Image src={'/img/banner.png'} width={301} height={451} alt="School boy" className="absolute z-[20] left-[60%] -translate-x-[50%]" />

                            {/* Background blue shape */}
                            <div className={styles.subimg}></div>
                        </div>

                    </div>

                </Grid>
            </Container>
        </div >
    )
}