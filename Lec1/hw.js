// -თეორია-
// 1)რამდენი ცვლადი გვაქვს ჯავასკრიპტში.(პასუხი თეორიულად გაეცი)
// სამი ცვლადი: let, const, var

// 2)რამდენიტიპი გვაქვს ჯავასკრიპტში.(ჩამოთვალე)(პასუხი თეორიულად გაეცი)
// string, number, boolean, null, undefined, object(array, function), bigInt, symbol

// 3) რომელი მეთოდი აქცევს სტრინგს მასივად.(პასუხი თეორიულად გაეცი)
// split()

// 4) სტრინგი პრიმიტიული ტიპია თუ არა ? .(პასუხი თეორიულად გაეცი)
// primitive, bcoz string can't be changed, string is immutable 

// 5)ჩამოთვალე რა მეთოდები ვისწავლეთ მაგ -> length(პასუხი თეორიულად გაეცი)
// .length, chartAt(index), slice(start, end),
// .toUpperCase(), .toLowerCase(), str1.concat(str2),
// .trim(), split(splitter , limit),
// replace(search val, replace val), includes(str)



// -პრაქტიკა-
// 1) let fullName = "Lika Mamaladze" - საბოლოო პასუხი "L.M."
let fullName = "Lika Mamaladze"
let res = fullName[0] + "." + fullName[5] + "."
console.log(res)
console.log("---------------------------------------")
// 2) let email = " EXAMPLE@MAIL.COM " - გაწმინდე (trim) და გადაიყვანე lowercase-ში.
// გადაამოწმე, შეიცავს თუ არა "@"
let email = " EXAMPLE@MAIL.COM "
let answer = email.trim().toLowerCase()
console.log(answer)
console.log(answer.includes("@"))
console.log("---------------------------------------")
// 3) let str = "luka" ამოიღეთ ბოლო ასო და გადააქციეთ upperCase-ად
let str = "luka"
let lastLetter = str[str.length - 1]
console.log(lastLetter.toUpperCase())
console.log("---------------------------------------")
// 4)გამოიყენე for ლუპი 1-დან 100-მდე რიცხვებზე.
// თუ რიცხვი იყოფა 3-ზე დააბრუნე - "Foo"
// თუ იყოფა 5-ზე დააბრუნე - "Bar"
// თუ იყოფა ორივეზე დააბრუნე - "FooBar"
// თუ არა დააბრუნე - უბრალოდ რიცხვი
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FooBar");
    } else if (i % 3 === 0) {
        console.log("Foo");
    } else if (i % 5 === 0) {
        console.log("Bar");
    } else {
        console.log(i);
    }
}
console.log("---------------------------------------")
// 5)let text = "JS is stupid but sometimes cool" - სიტყვა "stupid" შეცვალე "s****d"-ით.
let text = "JS is stupid but sometimes cool"
let replacedStr = text.replace("stupid", "s****d")
console.log(replacedStr)