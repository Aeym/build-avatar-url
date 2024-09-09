import { API_URL } from "./config";

export function buildAvatarUrl(
	context?: string | null,
	firstName?: string | null,
	lastName?: string | null
): string {
	if (context?.includes("default")) {
		return "";
	}

	const getInitial = (name?: string | null): string =>
		name?.trim().charAt(0).toUpperCase() || "";

	const initials = `${getInitial(firstName)}+${getInitial(lastName)}`;
	return `${API_URL}${initials}`;
}
