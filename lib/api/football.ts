const BASE_URL = "https://v3.football.api-sports.io";

function getHeaders(): HeadersInit {
    return {
        "x-apisports-key": process.env.API_SPORTS_KEY ?? "",
    };
}

export interface Team {
    id: number;
    name: string;
    logo: string;
}

interface TeamResponse {
    team: Team;
}

interface TeamsApiResponse {
    response: TeamResponse[];
}

export async function getTeamById(id: number): Promise<Team | null> {
    const res = await fetch(`${BASE_URL}/teams?id=${id}`, {
        method: "GET",
        headers: getHeaders(),
        next: { revalidate: 120 },
    });

    if (!res.ok) {
        console.error("[football API] bad response:", res.status, res.statusText);
        return null;
    }

    const data: TeamsApiResponse = await res.json();
    console.log("[football API] response:", JSON.stringify(data, null, 2));
    return data.response[0]?.team ?? null;
}
