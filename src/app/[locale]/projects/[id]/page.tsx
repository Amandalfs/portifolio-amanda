import Button from "@/components/ui/Button/Button";
import ButtonIcon from "@/components/ui/ButtonIcon/ButtonIcon";
import { Typography } from "@/components/ui/typography";
import Image from "next/image";
import ArrowLeft from "@/components/icons/ArrowLeft";
import TailwindcssIcon from "@/assets/icons/TailwindIcon.svg"
import { Link } from "@/i18n/routing";

export default function Page(){
    return (<section className="flex flex-col pt-24 gap-8">
        <article className="flex flex-col gap-6">
            <div className="relative w-full h-52" >
                <Image
                    className="w-full h-52" 
                    width={500}
                    height={200}
                    src={"/assets/ProjectMove.png"} 
                    alt="image project" 
                />
                <Link href={"/"}>
                    <ButtonIcon
                        className="absolute top-4 left-4"
                    >
                            <ArrowLeft className="fill-textPrimary-light dark:fill-textPrimary-dark" />
                    </ButtonIcon>
                </Link> 
            </div>
            <div className="flex flex-col mx-6 gap-6 pb-12">
                <div className="flex justify-between">
                    <Typography.paragraph>
                        Jul - Dec 2022
                    </Typography.paragraph>
                    <ul>
                        <li key={1}>
                            <Image 
                                className="fill-textSecondary-light dark:fill-textSecondary-dark"
                                src={TailwindcssIcon} 
                                alt={"TailwindcssIcon"} 
                                width={32} 
                                height={32} 
                            />
                        </li>
                    </ul>
                </div>
                <Typography.H2>Space X</Typography.H2>
                <div className="flex flex-col gap-6">
                    <div>
                        <span className="font-bold text-textSecondary-light dark:text-textSecondary-dark">Minha função: </span>Full Stack
                    </div>
                    <div>
                        <span className="font-bold text-textSecondary-light dark:text-textSecondary-dark">time: </span> projeto Solo
                    </div>
                    <Typography.paragraph>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia maiores minima ducimus odit tenetur, magnam autem ipsam natus unde omnis sunt consequuntur repellat provident officiis, nihil dolorum perferendis voluptatem repudiandae.
                        Fuga alias aliquid quo, blanditiis facere magni earum quidem pariatur, repellendus, eveniet a distinctio. Delectus eius nobis impedit debitis enim sunt accusantium laudantium, voluptatibus adipisci ullam, quaerat, neque ipsa repellat.
                        <br />
                        Eveniet ipsam numquam magnam aut ipsa voluptatibus et delectus molestiae iure enim fugit quisquam sint ullam esse, similique itaque accusantium ea rem eligendi, tempore odio reiciendis nemo, quos saepe! Quisquam.
                        Similique sint natus porro eius sed earum blanditiis reprehenderit numquam cumque nulla ut exercitationem deserunt pariatur fuga laborum quaerat, voluptates repellat, voluptatibus rem est error illo consectetur. Corrupti, quia sequi.
                        Dolore et voluptatibus atque rerum, omnis, laboriosam exercitationem tenetur incidunt voluptate suscipit, corrupti voluptatem fugiat distinctio! Fugiat, veniam cumque illum voluptas eum officia odio consectetur similique consequatur vel, dolores quam?
                        Perspiciatis iusto itaque consequatur cupiditate tempora qui vero vitae odio omnis labore corporis beatae enim, adipisci debitis, harum, architecto eligendi consequuntur neque! Totam exercitationem quia eum non? Aliquid, temporibus fugiat.
                    </Typography.paragraph>
                </div>
            </div>
        </article>
        <article className="flex flex-col justify-center items-center gap-6 p-6 bg-surfacePrimary-light dark:bg-surfacePrimary-dark">
            <Typography.H2>Dê uma olhada neste projeto</Typography.H2>
            <div className="flex flex-col gap-2">
                <Button size="lg">Live demo</Button>
                <Button size="lg" color="secondary">Code</Button>
            </div>
        </article>
    </section>)
}