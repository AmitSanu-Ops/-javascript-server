    let t1 = 0, t2 = 1, nextTerm = 0;
    for (let i = 0; i <= 10; i++) {
        nextTerm = t1 + t2;
        t1 = t2;
        t2 = nextTerm;
        console.log(nextTerm);
    }