import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
	{ name: "Projects", href: "/projects" },
	{ name: "Contact", href: "/contact" },
];

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
			<nav className="my-16 animate-fade-in">
				<ul className="flex flex-wrap items-center justify-center gap-4">
					{navigation.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
						>
							{item.name}
						</Link>
					))}
				</ul>
			</nav>
			<div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<Particles
				className="absolute inset-0 -z-10 animate-fade-in"
				quantity={100}
			/>
			<h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
				Mahmoud Essma

			</h1>
			<h4 className="z-10 font-light text-sm w text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title 
			 sm:text-2xl md:text-l whitespace-nowrap bg-clip-text ">
				UI/UX Developer
			</h4>

			<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<div className="my-16 text-center animate-fade-in">
				<h2 className="text-sm text-zinc-500 mx-6">
				 I'm Mahmoud Essam, a UI/UX Developer with over 4+ years of experience in the field. <br />
				 I have a passion for all aspects of UX Design and UI Design and have worked on numerous projects 
				 throughout my career. As a human-centered designer, <br /> I always put myself in the shoes of the user 
				 and strive to create products that make life easier and more convenient. <br /> 
				 I approach challenges as opportunities for generating new ideas and believe that every problem 
				 has an opportunity on the other side.
				</h2>
			</div>
		</div>
	);
}
