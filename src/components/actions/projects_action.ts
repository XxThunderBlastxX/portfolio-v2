"use server";

export interface Project {
    name: string;
    description: string;
    stacks: string[];
    link: string;
}

interface ProjectApiResponse {
    data: {
        projects: {
            ID: number;
            name: string;
            description: string;
            link: string;
            stacks: string[];
            CreatedAt: string;
            UpdatedAt: {
                Time: string;
                Valid: boolean;
            };
        }[];
    };
    success: boolean;
}

function parseProjects(response: string): Project[] {
    const parsedData: ProjectApiResponse = JSON.parse(response) as ProjectApiResponse;
    if (!parsedData.success) {
        throw new Error('API request failed');
    }

    return parsedData.data.projects.map((project) => ({
        name: project.name,
        description: project.description,
        stacks: project.stacks,
        link: project.link,
    }));
}


export default async function getProjects(): Promise<Project[]> {
    try {
        const res = await fetch("https://api.koustav.dev/projects/list")

        if (res.ok && res.status === 200) {
            const data = await res.text();
            return parseProjects(data).reverse();
        }

        return []
    } catch (err) {
        console.error(err);
        return [];
    }
}