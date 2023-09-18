import { Tag } from "./tag";

export interface Portfolio{
    picture: string,
    name: string,
    description: string,
    github: string,
    page: string,
    tags: Tag[],
}