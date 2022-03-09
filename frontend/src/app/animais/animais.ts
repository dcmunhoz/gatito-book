export interface Animal {
    id: number;
    postDate: Date;
    url: String;
    description: string;
    allowComments: boolean;
    like: number;
    comments: number;
    urserId: number;
}

export type Animais = Array<Animal>;