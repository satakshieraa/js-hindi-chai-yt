
// yaha banya humne object // oyai balai balai video complete honai mai rha hai (aasu sai bhara hua emoji )

const user =  {
    _email: 'h@gmail.com',
    _password: '147',

    
get email(){
    return this._email.toUpperCase()
   },
   
   set email (value){

    this._email = value
   
   }
   
   }

   const tea = Object.create(user)
console.log(tea.email);
// humare pass yaha pai email access ho rha hai print ho kai output a rha hai 
//but humare pass toh email kie nam kie property he nhi hai 
//upar dekho const mai _email and _password hai
//toh hota kya hai jaisai kie apsi sari properties hai chahtai wo  _email ya _password ho
// _ yeh uderscore kya bata ta hai kie almost mai usko ek private property define kar rhu hu jo normal users kai use mai nhi ayaigie
//  behine the scene uderscore _ <- yeh getters and setters ko method nhi rehnai deta hai
// yeh bolta hai kie getters and setters special method hai jo mai property kai upar rakh rha hu kyukie
// actually mai dekha jayai toh yeh kya hai actually mai memory hai and memory kai andar sai value lai kai a rhai ho and dai ke a rhai ho
// toh yahi toh kar rhai ho kie laikai anai ka and dai kai anai ka jo process hai usko memory mai js usko  override karnai kai liye apko getter and setters milta hai 



// jaisai new hai constructor fn

// waisai he factory fn hotai hai direct Object.create() //array mai bhi hotai hai
// () iskai andar dena paraiga kie kis object kai basis pai mai ek naya fn create kar kai du
// ()  bydefault yeh null hota hai 
// (user) user kai base pai ek object create karo aur usko tea kai anar refer kar do
// yeh karne kai bad hum chizo ko directly access kar sktai hai