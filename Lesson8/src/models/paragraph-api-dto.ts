export class ParagraphApiDto {
    public id: number;
    public body: string;
    public postId?: number;
    public hasLikes: boolean;
    public user: UserDto;

    public constructor(row: Record<string, unknown>) {
        this.id = row['id'] as number;
        this.body = row['body'] as string;
        this.user = new UserDto(row['user'] as Record<string, unknown>);
        this.hasLikes = !!row['likes'];
    }
}

class UserDto {
    public id: number;
    public username: string;
    public firstName: string;
    public lastName: string;

    public constructor(row: Record<string, unknown>) {
        this.id = row['id'] as number;
        this.username = row['username'] as string;
        const fullName = row['fullName'] as string;
        const nameParts = fullName.split(' ');
        this.firstName = nameParts[0];
        this.lastName = nameParts[1];
    }
}
