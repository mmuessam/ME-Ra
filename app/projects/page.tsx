import Link from "next/link";
import React from "react";

import { allProjects } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";
import { Redis } from "@upstash/redis";
import { Eye } from "lucide-react";

// const redis = Redis.fromEnv();

// export const revalidate = 60;
// export default async function ProjectsPage() {
// 	const views = (
// 		await redis.mget<number[]>(
// 			...allProjects.map((p) => ["pageviews", "projects", p.slug].join(":")),
// 		)
// 	).reduce((acc, v, i) => {
// 		acc[allProjects[i].slug] = v ?? 0;
// 		return acc;
// 	}, {} as Record<string, number>);

// 	const featured = allProjects.find((project) => project.slug === "unkey")!;
// 	const top2 = allProjects.find((project) => project.slug === "planetfall")!;
// 	const top3 = allProjects.find((project) => project.slug === "highstorm")!;
// 	const sorted = allProjects
// 		.filter((p) => p.published)
// 		.filter(
// 			(project) =>
// 				project.slug !== featured.slug &&
// 				project.slug !== top2.slug &&
// 				project.slug !== top3.slug,
// 		)
// 		.sort(
// 			(a, b) =>
// 				new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
// 				new Date(a.date ?? Number.POSITIVE_INFINITY).getTime(),
// 		);

// 	return (

export default function Example() {
  return (



	
    <div className="h-screen flex flex-col justify-center  items-center ">
		<Navigation />
      <h1 className="z-10 text-center text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        SOON
      </h1>

      <p
        className="z-10 font-light text-sm w text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title 
			 sm:text-1 md:text-sm whitespace-nowrap bg-clip-text "
      >
        <a
          href="https://bit.ly/3rSe31b
"
        >
          {" "}
          View My CV
        </a>
      </p>
    </div>
  );
}
