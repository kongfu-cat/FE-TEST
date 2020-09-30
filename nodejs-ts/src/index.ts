console.log('hello world!!');

interface DebugTest {
    id: number;
    val: string;
}
function debugTest(v0: DebugTest) {
    const v1 = { a: '1', b: '2' };
    return Object.assign({}, v0, v1);
}
const dt: DebugTest = { id: 1, val: 'ab' };
const res = debugTest(dt);

let count = 1;
while (count < 100000000) {
    count++;
}

console.log(res);
