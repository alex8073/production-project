import { classNames } from './classNames';

describe('classNames', () => {
    test('with only main class', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('with additional classes', () => {
        expect(classNames(
            'someClass',
            {},
            ['class1', 'class2'],
        ))
            .toBe('someClass class1 class2');
    });

    test('with mods and additional classes', () => {
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: true },
            ['class1', 'class2'],
        ))
            .toBe('someClass class1 class2 hovered scrollable');
    });

    test('with some mods false', () => {
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: false },
            ['class1', 'class2'],
        ))
            .toBe('someClass class1 class2 hovered');
    });

    test('with mods undefined', () => {
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: undefined },
            ['class1', 'class2'],
        ))
            .toBe('someClass class1 class2 hovered');
    });
});
