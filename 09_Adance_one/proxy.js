
const p1 = {
    fname: 'piyush',
    lname: 'garg',
    age: 18 ,
};

const p1proxy = new Proxy (p1, {
    get (target , prop) {
        if (prop in target) return Reflect.get(target, prop);
        return false;
    },
    set(target , prop ,value) {
        if (!(prop in target)) throw new Error(`${prop} does not exist`);
        switch (prop) {
            case 'fname':
            case 'lname':
                if(typeof value !== 'string')
                    throw new Error (`${prop} must be a string`);
                break;
                case 'age':
                    if(typeof value !== 'number')
                        throw new Error(`${prop} must be a number`);
                    if (value <= 0 ) throw new Error(`${prop} must be > zero`)         
        }
    Reflect.set(target, prop, value);// if we want to use default behaviour we will use the reflect method
    //target[prop] = value;  // deafult behviour ko mai kudh kyu handle karu ho sakta hai kuch bug issue ho
    },
});

p1proxy.age = 10;
p1proxy.fname = 11;

console.log(p1proxy);

// in proxy we have to implemnet the get and set method to handle the behaviour of the object
// and reflect provides you out of the box implementation of the proxy function jo apko default behaviour provide karta hai

