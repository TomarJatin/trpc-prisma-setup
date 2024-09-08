"use client";

import { trpc } from "@/utils/trpc";

export default function Home() {
	const { data: users, isLoading } = trpc.test.getUsers.useQuery();
	const createUser = trpc.test.createUser.useMutation({
		onSuccess: () => {
			// Invalidate and refetch
			// trpc.user.getUsers.invalidate();
		},
	});

	if (isLoading) return <div>Loading...</div>;

	return (
		<div>
			<h1>Users:</h1>
			<ul>
				{users?.map((user) => (
					<li key={user.id}>
						{user.name} ({user.email})
					</li>
				))}
			</ul>
			<button
				onClick={() =>
					createUser.mutate({
						name: "New User3",
						email: "new3@example.com",
					})
				}
			>
				Add User
			</button>
		</div>
	);
}
