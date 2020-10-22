var pr = 0;
for (var p = 2; p <= 100; p++) {
    for (var i = 2; i <= 9; i++) {
        if (i != p) {
            if (p % i == 0) {
                pr = 0;
                break;
            } else {
                pr = 1;
            }
        }
    }
    if (pr == 1)
        console.log(p);
}