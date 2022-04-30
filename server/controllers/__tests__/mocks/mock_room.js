import {playersMock,playersMockLarge} from '../mocks/mock_players';

export const mockRoomCode = 'x7UvC9'
export const mockRoomCodeLarge = 'z7nv9p'

export const mockRoom = {
    roomCode: mockRoomCode,
    players: playersMock,
}

export const mockRoomLarge = {
    roomCode: mockRoomCodeLarge,
    players: [...playersMockLarge], //ten players
}