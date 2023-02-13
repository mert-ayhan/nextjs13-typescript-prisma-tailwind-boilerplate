// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../prisma/client";

type postProps = {
	title: string;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	if (req.method === "POST") {
		const post: postProps = JSON.parse(req.body);
		console.log(post);

		if (!post.title.length)
			return res
				.status(500)
				.json({ message: "Please do not leave this empty!" });

		try {
			const data = await prisma.post.create({
				data: {
					title: post.title,
				},
			});
			return res.status(200).json(data);
		} catch (error) {
			return res.status(500).json(error);
		}
	}
}
