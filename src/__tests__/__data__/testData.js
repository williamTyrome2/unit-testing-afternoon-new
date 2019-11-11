export const users = [
    {
        id: 1, 
        first: 'Test',
        last: 'User',
    },
    {
        id:2,
        first: 'Hello',
        last: 'World',
    },
    
],
export const posts = [
    {
        id: 1,
        userId: 2,
        title: 'This is a long post',
        text: 
        'This is a longer string that will be used to test whethter or not the shortenText function correctly shortens'
    },
    {
        id: 2, 
        userId: 2,
        title: 'this is a short post',
        text: 'hello world',
    },
    {
        id: 3,
        userId: 1,
        title: 'This is a long post',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do'
    },
    {
        id: 4,
        userId: 1,
        title: 'this is a long post',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,'
    },
    {
        id: 5,
        userId: 3,
        title: 'This is a long post',
        text:'Lorem ipsum dolor sit amer,'
    },
];

export const shortText = 'This is avery short sentence';

export const longText = 
'This is a longer string that will be used to test whether or not the shortenText function correctly shortens the text correctly or not.';