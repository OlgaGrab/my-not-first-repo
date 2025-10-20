//  {
//       "id": 1,
//       "body": "This is some awesome thinking!",
//       "postId": 242,
//       "likes": 3,
//       "user": {
//         "id": 105,
//         "username": "emmac",
//         "fullName": "Emma Wilson"
//       }
//     },

export interface ApiDto {
    id: number;
    body: string;
    postId: number;
    likes: number;
    user: UserDto;
}

interface UserDto {
    id: number;
    username: string;
    fullName: string;
}
