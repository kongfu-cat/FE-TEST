function fetchData(callback?) {
    return new Promise((resolve, reject) => {
        const data = 'peanut butter';
        try {
            setTimeout(() => {
                if (callback) callback(data);
                resolve(data);
            }, 100);
        } catch (e) {
            reject(e);
        }
    });
}

test('the data is peanut butter', (done) => {
    function callback(data) {
        try {
            expect(data).toBe('peanut butter');
            done();
        } catch (error) {
            done(error);
        }
    }

    fetchData(callback);
});

test('the data is peanut butter', () => {
    return fetchData().then((data) => {
        expect(data).toBe('peanut butter');
    });
});

test('the data is peanut butter', () => {
    return expect(fetchData()).resolves.toBe('peanut butter');
});

test('the data is peanut butter', async () => {
    const data = await fetchData();
    expect(data).toBe('peanut butter');
});

// test('the fetch fails with an error', async () => {
//     expect.assertions(1);
//     try {
//         await fetchData();
//     } catch (e) {
//         expect(e).toMatch('error');
//     }
// });
