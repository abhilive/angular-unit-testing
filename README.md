# Unit Testing in Angular

To get started, clone the repo or download it

npm install
npm test

# Sample test prototype : Start

    describe('my first test', () => {
        let sut;

        beforeEach(() => {
            sut = {}
        })

        it('should be true if true', () => {
            //arrange
            sut.a = false;

            //act
            sut.a = true;

            //assert
            expect(sut.a).toBe(true);
        })
    })

# End
