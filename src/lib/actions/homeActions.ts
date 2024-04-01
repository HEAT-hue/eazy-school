import { Greeting } from "../definitions"

export async function getHomeDetails(): Promise<Greeting> {
    return {
        name: "Emmanuel"
    }
}