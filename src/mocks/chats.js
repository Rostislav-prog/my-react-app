import { GeneratorId } from './../components/GeneratorId'

const createChatMock = i => ({
  id: GeneratorId(),
  name: `name ${i}`,
})

export const CHATS = Array.from({ length: 3 }).map((_, i) => createChatMock(i))
