it('test create character', () => {
    const character = createCharacter()

    expect(character['health']).toBe(1000)
    expect(character['level']).toBe(1)
})

it('test character status', () => {
    const character = createCharacter()
    const cadaver = createCharacter()
    cadaver['health'] = 0

    expect(isAlive(character)).toBeTruthy()
    expect(isAlive(cadaver)).toBeFalsy()
})