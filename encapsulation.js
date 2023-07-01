function Counter(){
    let count = 5;
    function increment(){
        count++;
        console.log(`Count: ${count}`);
    }

    return {
        increment : increment
    }

    //the role of return is to expose increment as object returned by the counter function so that it can be accessed by the external codes
}

const counter = Counter();
counter.increment();

