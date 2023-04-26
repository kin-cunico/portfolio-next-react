import { useAnimate, usePresence } from "framer-motion";
// import ContactUs from "./ContactForm";
import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
	AiFillTwitterCircle,
	AiFillLinkedin,
	AiFillGithub,
} from "react-icons/ai";
import kincunico from "../images/kin.png";
const WPP_N = "00447459777592";
import ContactUs from "./ContactForm";

export default function Home() {
	const [isPresent, safeToRemove] = usePresence();
	// TODO animate the
	const [scope, animate] = useAnimate();
	// TODO CREATE the toggle functionality for the day/night button
	const [toggle, setToggle] = useState();
	// TODO CREATE the contact button to roll down to the contact form
	const [contact, setContact] = useState();

	//bit of code to handle new animate from framer-motion
	useEffect(() => {
		if (isPresent) {
			const Animation = async () => {
				await animate(
					//Here we pass the animation to our selected scope(in this case to the page)
					scope.current,
					{ backgroundColor: "#000" },
					{ duration: 0.7, delay: 0.2 }
				);
			};
			Animation();
		} else {
			const exitAnime = async () => {
				await animate(
					scope.current,
					{ opacity: [1, 0] },
					{ duration: 0.5, delay: 0.2 }
				);
				safeToRemove();
			};
			exitAnime();
		}
	});
	return (
		<div ref={scope}>
			<Head>
				<title>Kin Cunico</title>
				<meta
					name="description"
					content="Created by Kin Cunico"
				/>
				<link
					rel="icon"
					href="/favicon.ico"
				/>
			</Head>
			<main className="bg-slate-900 px-10 h-auto">
				<section>
					<nav className="p-8 flex align-middle justify-evenly gap-5">
						<Link href="/">
							<h1 className="text-xl font-bold text-lime-500 font-nothing">
								KinCunico.dev
							</h1>
						</Link>

						<ul className="flex items-center">
							<li>
								<BsFillMoonStarsFill className="cursor-pointer text-xl text-gray-400" />
							</li>
							<li>
								<a
									className="bg-gradient-to-b from-slate-500 to-slate-800 text-gray-400 px-6 py-2 rounded-md ml-8"
									href="https://wa.me/+4407459777592"
									target="blank"
								>
									Contact
								</a>
							</li>
						</ul>
					</nav>
					<section className="flex flex-col gap-2 justify-center border-b-2 pb-2">
						<div className="flex flex-col items-left gap-2 p-10 items-center">
							<h2 className="font-bold tracking-wider text-4xl py-2 text-lime-500">
								Kin Cunico
							</h2>
							<h3 className="font-semibold tracking-wide py-2 text-gray-400">
								Web Developer
							</h3>
							<p className="tracking-wider leading-5 text-gray-400">
								Italo-Brazilian web developer based in the UK.
							</p>
						</div>
						<div className="flex justify-evenly p-2 pb-4 text-5xl  text-lime-500">
							<a
								href="https://github.com/kin-cunico"
								target="blank"
							>
								<AiFillGithub className="items-end" />
							</a>
							<a
								href="https://www.linkedin.com/in/kincunicoen/"
								target="blank"
							>
								<AiFillLinkedin className="" />
							</a>
							<a
								href="https://twitter.com/KinCunico"
								target="blank"
							>
								<AiFillTwitterCircle className="" />
							</a>
						</div>
						<div className="border-8 border-slate-400 rounded-full mx-auto w-80 h-80 relative bg-gradient-to-b from-slate-400 to-slate-900 overflow-clip backdrop-contrast-200">
							<img
								src={kincunico}
								alt="photo"
								className="drop-shadow-xl mx-auto absolute -bottom-5 left-14 pointer-events-none"
							/>
						</div>
					</section>
					<h3 className="text-center font-bold tracking-wide py-2 text-lime-500">
						What can you expect if you hire me?
					</h3>
					<section className="pb-5">
						<div className="flex flex-col flex-wrap gap-2 items-center justify-between">
							<h4 className="text-slate-50 font-bold letter-spacing">
								Projects:
							</h4>

							<div className="flex gap-4 w-full justify-around flex-wrap items-center pb-2 border-b-2">
								<a
									href="https://gym-typescript-82j.pages.dev/"
									target="blank"
								>
									<p className="rounded-md box-content px-2 bg-slate-500 w-36 h-1/2 text-center text-slate-950 font-semibold">
										Gym (SPA) with Typescript.
									</p>
								</a>
								<p className="flex leading-8 rounded-md box-border px-2 text-lime-500 w-28 h-1/2 justify-center flex-col text-left">
									React with Typescript, Tailwind CSS, Framer Motion, and
									FormSubmit
								</p>
								<iframe
									src="https://gym-typescript-82j.pages.dev/"
									title="Gym webapp with typescript"
									allowTransparency
									frameBorder={0}
								></iframe>
							</div>

							<div className="flex gap-4 w-full justify-around flex-wrap items-center">
								<a
									href="https://gym-typescript-82j.pages.dev/"
									target="blank"
								>
									<p className="rounded-md box-content px-2 bg-slate-500 w-36 h-1/2 text-center text-slate-950 font-semibold">
										Gym (SPA) with Typescript.
									</p>
								</a>
								<p className="flex leading-8 rounded-md box-border px-2 text-lime-500 w-28 h-1/2 justify-center flex-col text-left">
									React with Typescript, Tailwind CSS, Framer Motion, and
									FormSubmit
								</p>
								<iframe
									src="https://gym-typescript-82j.pages.dev/"
									title="Gym webapp with typescript"
									allowTransparency
									frameBorder={0}
								></iframe>
							</div>
						</div>
					</section>
					<ContactUs />
				</section>
				<footer className=" text-slate-50 py-5">
					<div className="flex flex-wrap justify-around gap-10">
						<p className="flex flex-col border-b-2 border-r-2 border-l-2 rounded-lg py-2 px-4">
							Copyright: kincunico.dev 2023
						</p>
						<p className="flex flex-col border-b-2 border-l-2 border-r-2 rounded-lg py-2 px-4">
							contact: contact@kincunico.dev
						</p>
					</div>
				</footer>
			</main>
		</div>
	);
}
