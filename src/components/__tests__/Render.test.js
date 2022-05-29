// import { rest } from 'msw';
// import { setupServer } from 'msw/node';

// const server = setupServer(
//     rest.get('https://api.thecatapi.com/v1/favourites', (req, res, ctx)=>{
//         return res(
//             ctx.set({
//                 "x-api-key": "2c806c06-7132-4706-9f4a-f957c5c0d1a0",
//                 'Accept-Language': 'en-US',
//                 'Content-Type': ['application/json', 'application/hal+json'],
//                 'Content-Length': '40032',
//               }),
//             ctx.json(['abys','Abysian'])
//         )
        
//     })
// );
// beforeAll(() => {
//     // Establish requests interception layer before all tests.
//     server.listen()
//   })
//   afterAll(() => {
//     // Clean up after all tests are done, preventing this
//     // interception layer from affecting irrelevant tests.
//     server.close()
//   })

// export const handlers = [
//     rest.get('https://api.thecatapi.com/v1/favourites', (req, res, ctx)=>{
//         return res(
//             ctx.set({
//                 "x-api-key": "2c806c06-7132-4706-9f4a-f957c5c0d1a0",
//                 'Content-Type': ['application/json', 'application/hal+json'],
//               })
//         )
//     }),
//     rest.post('https://api.thecatapi.com/v1/favourites', (req, res, ctx)=>{
//         return res(
//             ctx.set({
//                 "x-api-key": "2c806c06-7132-4706-9f4a-f957c5c0d1a0",
//                 'Content-Type': ['application/json', 'application/hal+json'],

//               })
//         )
//     })
// ]

import { render, fireEvent } from '@testing-library/react';

import DisplayBreeds from '../DisplayBreeds';
import DisplayFavorites from '../DisplayFavorites';

test('Render Breeds',()=>{
    const fakeBreeds = [
        {id:1, name:'Abysian', image:{url:'https://cdn2.thecatapi.com/images/ozEvzdVM-.jpg',id:1}},
        {id:2, name:'Abysian1', image:{url:'https://cdn2.thecatapi.com/images/ozEvzdVM-.jpg',id:2}}]
    render(<DisplayBreeds breed={fakeBreeds}/>);
})

test('Render Favorites', ()=>{
    const fakeFavorites = [
        {id:1, image:{id:1, url:'https://cdn2.thecatapi.com/images/ozEvzdVM-.jpg'}},
        {id:2, image:{id:2, url:'https://cdn2.thecatapi.com/images/ozEvzdVM-.jpg'}}
    ]
    render(<DisplayFavorites favorite={fakeFavorites}/>);
})