// INTERFACES
export interface Course {
    courseId: number;
    modules: ModuleId[]; // Array of module identifiers
    title: string;
    description: string;
    imgUrl: string;
    route: string;
    learners?: number; // Optional
    tags: string[]; // Array of tag names
}

export interface Module {
    moduleId: number;
    topics: Topic[]; // Array of topics within the module
    title: string;
    description: string;
    imgUrl: string;
    route: string;
    courseId: number; // Identifier of the associated course
}

export interface Topic {
    topicId: number;
    title: string;
    card?: number; // Optional card ID
    position: number; // Position within the module
    moduleId: number; // Identifier of the associated module
    cardId: number; // Identifier of the card associated with the topic
    cardType: CardTypes; // Enum specifying the type of the card
}

// TYPES
export type Video = {
    videoId: number;
    videoUrl: string;
    subTitle: string; // Subtitle or description of the video
};

export type Text = {
    textId: number;
    text: string; // Content of the text
};

export type List = {
    listId: number;
    subTitle: string[]; // Array of subtitles or list items
};

export type Test = {
    testId: number;
    items: ItemTest[]; // Array of test items/questions
};

export type Error = {
    message: string; // Error message
    code: number; // Error code
};

export type ItemTest = {
    answer: string; // Answer text
    right: boolean; // Indicates if the answer is correct
};

export type Tag = {
    id: number; // Tag identifier
    name: string; // Tag name
    color: string; // Color associated with the tag
};

export type ModuleId = {
    modId: number; // Module identifier
    modName?: string; // Optional module name
};

export type Topics = {
    topicId?: number; // Optional topic identifier
    topicName: string; // Name of the topic
};

export type Usuari = {
    email: string; // User's email address
    userId: UserId; // User identifier type
    userName: string; // User's name
    userScore: number; // User's score
};

export type Retos = {
    retoId: string; // Challenge identifier
    usuarioQueReta: UserId; // User who initiates the challenge
    usuarioRetado: UserId; // User being challenged
    puntosApostados: number; // Points wagered in the challenge
};

// GOOD PRACTICE: Declaring a 'userId' type enhances consistency and type safety
export type UserId = {
    userId: number; // Identifier for a user
};

// ENUMS
export enum CardTypes {
    Video, // Video card type
    Text,  // Text card type
    List,  // List card type
    Test   // Test card type
}
