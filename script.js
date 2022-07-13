

const app = new Vue(
    {
        el:'#app',
        data: {
            emails : [],
            },
        methods: {
             
         generateNewEmail(){
            for(let i = 0; i < 10; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then( (result) => {                
                    this.emails.push(result.data.response) })
                }
            },
            
        },
       
       

        created(){
            this.generateNewEmail();
        }
    }
    
)

