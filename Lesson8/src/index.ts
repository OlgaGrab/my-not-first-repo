import { ApiDto, ParagraphApiDto } from './models/index';
import { Lemon } from './abstractions/abstraction';

async function getApiResponse(): Promise<ApiDto[]> {
    const response = await fetch('https://dummyjson.com/comments');
    const json = await response.json();
    return json.comments as ApiDto[];
}

async function apiDtoClass(): Promise<ParagraphApiDto[]> {
    const comments = await getApiResponse();
    return comments.map((row) => new ParagraphApiDto(row as unknown as Record<string, unknown>));
}

(async () => {
    const comments = await getApiResponse();
    const hasLikes = comments.filter((comment) => comment.likes === 0);
    console.log(hasLikes);

    const classComments = await apiDtoClass();
    console.log(classComments);
})();

const sicily = new Lemon('lemon', 'green', 'sour');
const home = new Lemon('small lemon', 'grassy', 'bitter');
console.log(sicily.getCharacteristic());
console.log(home.getCharacteristic());
console.log(home.isBerryUsable());
console.log(sicily.isBerryUsable());
