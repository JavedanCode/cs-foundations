import linkedListFactory from "../src/linked-list";

describe("Linked List", () => {
  let list;

  beforeEach(() => {
    list = linkedListFactory();
  });

  test("initial list is empty", () => {
    expect(list.size()).toBe(0);
    expect(list.getHead()).toBe(null);
    expect(list.tail()).toBe(null);
  });

  test("append adds elements to the end", () => {
    list.append(1);
    list.append(2);
    list.append(3);

    expect(list.size()).toBe(3);
    expect(list.tail().value).toBe(3);
  });

  test("prepend adds element to the start", () => {
    list.append(2);
    list.append(3);
    list.prepend(1);

    expect(list.getHead().value).toBe(1);
    expect(list.size()).toBe(3);
  });

  test("at(index) returns correct value", () => {
    list.append(1);
    list.append(2);
    list.append(3);

    expect(list.at(0)).toBe(1);
    expect(list.at(1)).toBe(2);
    expect(list.at(2)).toBe(3);
    expect(list.at(5)).toBe(undefined);
  });

  test("pop removes last element and returns its value", () => {
    list.append(1);
    list.append(2);
    list.append(3);

    const value = list.pop();

    expect(value).toBe(3);
    expect(list.size()).toBe(2);
    expect(list.tail().value).toBe(2);
  });

  test("pop on single element list", () => {
    list.append(1);

    expect(list.pop()).toBe(1);
    expect(list.size()).toBe(0);
    expect(list.getHead()).toBe(null);
  });

  test("pop on empty list returns undefined", () => {
    expect(list.pop()).toBe(undefined);
  });

  test("findIndex returns correct index", () => {
    list.append(1);
    list.append(2);
    list.append(3);

    expect(list.findIndex(2)).toBe(1);
    expect(list.findIndex(5)).toBe(-1);
  });

  test("toString formats correctly", () => {
    list.append(1);
    list.append(2);
    list.append(3);

    expect(list.toString()).toBe("( 1 ) -> ( 2 ) -> ( 3 ) -> null");
  });

  test("insertAt inserts values at index", () => {
    list.append(1);
    list.append(2);
    list.append(3);

    list.insertAt(1, 10, 11);

    expect(list.toString()).toBe(
      "( 1 ) -> ( 10 ) -> ( 11 ) -> ( 2 ) -> ( 3 ) -> null",
    );
  });

  test("insertAt at beginning", () => {
    list.append(2);
    list.append(3);

    list.insertAt(0, 1);

    expect(list.toString()).toBe("( 1 ) -> ( 2 ) -> ( 3 ) -> null");
  });

  test("insertAt throws error if out of bounds", () => {
    list.append(1);

    expect(() => list.insertAt(5, 10)).toThrow(RangeError);
  });

  test("removeAt removes element at index", () => {
    list.append(1);
    list.append(2);
    list.append(3);

    list.removeAt(1);

    expect(list.toString()).toBe("( 1 ) -> ( 3 ) -> null");
  });

  test("removeAt first element", () => {
    list.append(1);
    list.append(2);

    list.removeAt(0);

    expect(list.toString()).toBe("( 2 ) -> null");
  });

  test("removeAt throws error if out of bounds", () => {
    list.append(1);

    expect(() => list.removeAt(2)).toThrow(RangeError);
  });
});
